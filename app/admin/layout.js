// /app/admin/layout.js — Metadata for the admin dashboard (server component)

export const metadata = {
  title: 'Admin Dashboard | Librae AI Labs',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return <>{children}</>;
}
