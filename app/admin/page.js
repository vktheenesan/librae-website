'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './page.module.css';

// ─── Tab definitions ───
const TABS = [
  { key: 'funnel', label: 'Funnel Overview', icon: '📊' },
  { key: 'trials', label: 'Trial Management', icon: '🔑' },
  { key: 'telemetry', label: 'Telemetry Feed', icon: '📡' },
  { key: 'chat', label: 'Chat Review', icon: '💬' },
  { key: 'payments', label: 'Payments', icon: '💳' },
];

// ─── Helpers ───
function formatDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function formatTimestamp(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return `${d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} ${d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;
}

function daysLeft(expiryDate) {
  if (!expiryDate) return '—';
  const diff = Math.ceil((new Date(expiryDate) - Date.now()) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

function statusPillClass(status) {
  const s = (status || '').toLowerCase();
  if (s === 'active') return styles.pillActive;
  if (s === 'expired') return styles.pillExpired;
  if (s === 'revoked') return styles.pillRevoked;
  if (s === 'completed') return styles.pillCompleted;
  if (s === 'failed') return styles.pillFailed;
  return styles.pillPending;
}

// ════════════════════════════════════════════════════════════════
// LOGIN SCREEN
// ════════════════════════════════════════════════════════════════

function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();
      if (data.authorized) {
        const session = {
          email: data.email,
          token: data.session_token,
          ts: Date.now(),
        };
        localStorage.setItem('librae_admin_session', JSON.stringify(session));
        onLogin(session);
      } else {
        setError(data.error || 'Access denied.');
      }
    } catch {
      setError('Connection failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginLogo}>LIBRAE AI LABS</div>
        <div className={styles.loginSubtitle}>Admin Command Center</div>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <input
            className={styles.loginInput}
            type="email"
            placeholder="admin@librae.work"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <button className={styles.loginButton} type="submit" disabled={loading}>
            {loading ? 'Verifying…' : 'Authenticate'}
          </button>
          {error && <div className={styles.loginError}>{error}</div>}
        </form>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
// SECTION: FUNNEL OVERVIEW
// ════════════════════════════════════════════════════════════════

function FunnelOverview({ stats }) {
  if (!stats) return <div className={styles.emptyState}><span className={styles.emptyIcon}>📊</span>No data loaded.</div>;

  const o = stats.overview || {};
  const trialsByStatus = stats.trials?.by_status || {};

  const cards = [
    { icon: '🏢', label: 'Organizations', value: o.total_organizations },
    { icon: '🎯', label: 'Leads', value: o.total_leads },
    {
      icon: '🔑',
      label: 'Trials',
      value: o.total_trials,
      sub: `${trialsByStatus.active || 0} active · ${trialsByStatus.expired || 0} expired · ${trialsByStatus.revoked || 0} revoked`,
    },
    { icon: '💬', label: 'Chat Sessions', value: o.total_chat_sessions },
    { icon: '📥', label: 'Downloads', value: o.total_downloads },
    {
      icon: '💰',
      label: 'Revenue (USD)',
      value: `$${stats.payments?.total_revenue_usd || '0.00'}`,
    },
  ];

  return (
    <div>
      <div className={styles.statsGrid}>
        {cards.map((c) => (
          <div key={c.label} className={styles.statCard}>
            <span className={styles.statIcon}>{c.icon}</span>
            <div className={styles.statLabel}>{c.label}</div>
            <div className={styles.statValue}>{c.value ?? 0}</div>
            {c.sub && <div className={styles.statSub}>{c.sub}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
// SECTION: TRIAL MANAGEMENT
// ════════════════════════════════════════════════════════════════

function TrialManagement({ onToast }) {
  const [trials, setTrials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionInFlight, setActionInFlight] = useState(null);

  const fetchTrials = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/trials');
      const data = await res.json();
      setTrials(data.trials || []);
    } catch {
      onToast('Failed to fetch trials', 'error');
    } finally {
      setLoading(false);
    }
  }, [onToast]);

  useEffect(() => {
    fetchTrials();
  }, [fetchTrials]);

  const handleAction = async (trialId, action) => {
    setActionInFlight(`${trialId}-${action}`);
    try {
      const res = await fetch('/api/admin/trials', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trial_id: trialId, action, days: 30 }),
      });
      const data = await res.json();
      if (data.success) {
        onToast(`Trial ${action}d successfully`, 'success');
        fetchTrials();
      } else {
        onToast(data.error || `Failed to ${action} trial`, 'error');
      }
    } catch {
      onToast(`Failed to ${action} trial`, 'error');
    } finally {
      setActionInFlight(null);
    }
  };

  if (loading) {
    return <div className={styles.emptyState}><span className={styles.emptyIcon}>⏳</span>Loading trials…</div>;
  }

  if (!trials.length) {
    return <div className={styles.emptyState}><span className={styles.emptyIcon}>🔑</span>No trials found.</div>;
  }

  return (
    <div className={styles.glassPanel}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Token</th>
              <th>Organization</th>
              <th>Product</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>Expiry Date</th>
              <th>Days Left</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trials.map((t) => {
              const orgName = t.organizations?.name || t.leads?.company_name || '—';
              const remaining = daysLeft(t.expiry_date);
              const status = t.status || 'unknown';
              return (
                <tr key={t.id}>
                  <td><span className={styles.tokenText} title={t.trial_token}>{t.trial_token || t.id?.slice(0, 12)}</span></td>
                  <td>{orgName}</td>
                  <td>{t.product || '—'}</td>
                  <td><span className={`${styles.pill} ${statusPillClass(status)}`}>{status}</span></td>
                  <td>{formatDate(t.start_date)}</td>
                  <td>{formatDate(t.expiry_date)}</td>
                  <td style={{ color: remaining <= 3 ? '#e63946' : remaining <= 7 ? '#ffb703' : 'inherit' }}>
                    {status === 'active' ? remaining : '—'}
                  </td>
                  <td>
                    <div className={styles.actionGroup}>
                      <button
                        className={`${styles.actionBtn} ${styles.btnExtend}`}
                        onClick={() => handleAction(t.id, 'extend')}
                        disabled={actionInFlight === `${t.id}-extend`}
                        title="Extend by 30 days"
                      >
                        {actionInFlight === `${t.id}-extend` ? '…' : '+30d'}
                      </button>
                      {status === 'active' ? (
                        <button
                          className={`${styles.actionBtn} ${styles.btnRevoke}`}
                          onClick={() => handleAction(t.id, 'revoke')}
                          disabled={actionInFlight === `${t.id}-revoke`}
                        >
                          {actionInFlight === `${t.id}-revoke` ? '…' : 'Revoke'}
                        </button>
                      ) : (
                        <button
                          className={`${styles.actionBtn} ${styles.btnReactivate}`}
                          onClick={() => handleAction(t.id, 'reactivate')}
                          disabled={actionInFlight === `${t.id}-reactivate`}
                        >
                          {actionInFlight === `${t.id}-reactivate` ? '…' : 'Reactivate'}
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
// SECTION: TELEMETRY FEED
// ════════════════════════════════════════════════════════════════

function TelemetryFeed({ stats }) {
  const events = stats?.telemetry?.recent?.slice(0, 30) || [];

  if (!events.length) {
    return <div className={styles.emptyState}><span className={styles.emptyIcon}>📡</span>No telemetry events.</div>;
  }

  return (
    <div className={styles.glassPanel}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Action</th>
              <th>Domain</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {events.map((ev, i) => (
              <tr key={ev.id || i}>
                <td style={{ color: 'rgba(255,255,255,0.25)' }}>{i + 1}</td>
                <td>
                  <span className={`${styles.pill} ${styles.pillPending}`}>{ev.action}</span>
                </td>
                <td>{ev.domain || '—'}</td>
                <td>{formatTimestamp(ev.created_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
// SECTION: CHAT REVIEW
// ════════════════════════════════════════════════════════════════

function ChatReview({ stats }) {
  const sessions = stats?.chat_sessions?.recent || [];
  const [expanded, setExpanded] = useState(null);

  if (!sessions.length) {
    return <div className={styles.emptyState}><span className={styles.emptyIcon}>💬</span>No chat sessions.</div>;
  }

  const toggleExpand = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.glassPanel}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>Source</th>
              <th>Messages</th>
              <th>First Message</th>
              <th>Last Message</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((s) => (
              <>
                <tr key={s.id} className={styles.chatRow} onClick={() => toggleExpand(s.id)}>
                  <td>
                    <span className={`${styles.expandIcon} ${expanded === s.id ? styles.expandIconOpen : ''}`}>▶</span>
                  </td>
                  <td>
                    <span className={`${styles.pill} ${s.source === 'desktop' ? styles.pillActive : styles.pillPending}`}>
                      {s.source || 'website'}
                    </span>
                  </td>
                  <td>{s.message_count ?? 0}</td>
                  <td>{formatTimestamp(s.first_message_at)}</td>
                  <td>{formatTimestamp(s.last_message_at)}</td>
                </tr>
                {expanded === s.id && (
                  <tr key={`${s.id}-expand`} className={styles.messagesPanel}>
                    <td colSpan={5}>
                      {s.messages && s.messages.length > 0 ? (
                        <div className={styles.messagesList}>
                          {s.messages.map((msg, i) => (
                            <div key={i} className={styles.messageItem}>
                              <strong style={{ color: msg.role === 'user' ? '#ffb703' : '#22c55e' }}>
                                {msg.role === 'user' ? 'User' : 'CAHAYA'}:
                              </strong>{' '}
                              {msg.content}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className={styles.noMessages}>
                          Messages not loaded. Session ID: {s.id}
                        </div>
                      )}
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
// SECTION: PAYMENTS
// ════════════════════════════════════════════════════════════════

function Payments({ stats }) {
  const payments = stats?.payments?.recent || [];

  if (!payments.length) {
    return <div className={styles.emptyState}><span className={styles.emptyIcon}>💳</span>No payments recorded.</div>;
  }

  return (
    <div className={styles.glassPanel}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Tier</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, i) => (
              <tr key={p.id || i}>
                <td style={{ color: 'rgba(255,255,255,0.25)' }}>{i + 1}</td>
                <td>{p.tier || '—'}</td>
                <td style={{ fontWeight: 600, color: '#F0F4FF' }}>
                  ${((p.amount_cents || 0) / 100).toFixed(2)}
                </td>
                <td>
                  <span className={`${styles.pill} ${statusPillClass(p.status)}`}>
                    {p.status || 'unknown'}
                  </span>
                </td>
                <td>{formatDate(p.created_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
// MAIN DASHBOARD PAGE
// ════════════════════════════════════════════════════════════════

export default function AdminDashboard() {
  const [session, setSession] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [activeTab, setActiveTab] = useState('funnel');
  const [stats, setStats] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [toast, setToast] = useState(null);

  // ── Auth check ──
  useEffect(() => {
    const saved = localStorage.getItem('librae_admin_session');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Sessions valid for 24h
        if (Date.now() - parsed.ts < 24 * 60 * 60 * 1000) {
          setSession(parsed);
        } else {
          localStorage.removeItem('librae_admin_session');
        }
      } catch {
        localStorage.removeItem('librae_admin_session');
      }
    }
    setAuthChecked(true);
  }, []);

  // ── Fetch stats ──
  const fetchStats = useCallback(async () => {
    setRefreshing(true);
    try {
      const res = await fetch('/api/admin/stats');
      const data = await res.json();
      if (!data.error) setStats(data);
    } catch {
      showToast('Failed to load dashboard data', 'error');
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    if (session) fetchStats();
  }, [session, fetchStats]);

  // ── Toast ──
  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  // ── Logout ──
  const handleLogout = () => {
    localStorage.removeItem('librae_admin_session');
    setSession(null);
    setStats(null);
  };

  // ── Loading check ──
  if (!authChecked) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner} />
      </div>
    );
  }

  // ── Login gate ──
  if (!session) {
    return <LoginScreen onLogin={setSession} />;
  }

  // ── Render active section ──
  const renderSection = () => {
    switch (activeTab) {
      case 'funnel':
        return <FunnelOverview stats={stats} />;
      case 'trials':
        return <TrialManagement onToast={showToast} />;
      case 'telemetry':
        return <TelemetryFeed stats={stats} />;
      case 'chat':
        return <ChatReview stats={stats} />;
      case 'payments':
        return <Payments stats={stats} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.dashboard}>
      {/* ── Top Bar ── */}
      <header className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <span className={styles.topBarBrand}>LIBRAE</span>
          <span className={styles.topBarTag}>Admin</span>
        </div>
        <div className={styles.topBarRight}>
          <span className={styles.topBarEmail}>{session.email}</span>
          <button className={styles.refreshBtn} onClick={fetchStats} disabled={refreshing}>
            {refreshing ? 'Syncing…' : '↻ Refresh'}
          </button>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </header>

      {/* ── Tab Bar ── */}
      <nav className={styles.tabBar}>
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </nav>

      {/* ── Content ── */}
      <main className={styles.contentArea}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionHeaderIcon}>
            {TABS.find((t) => t.key === activeTab)?.icon}
          </span>
          {TABS.find((t) => t.key === activeTab)?.label}
        </div>
        {stats || activeTab === 'trials' ? renderSection() : (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>⏳</span>
            Loading dashboard data…
          </div>
        )}
      </main>

      {/* ── Toast ── */}
      {toast && (
        <div className={`${styles.toast} ${toast.type === 'error' ? styles.toastError : styles.toastSuccess}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
}
