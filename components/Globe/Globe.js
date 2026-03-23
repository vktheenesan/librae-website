'use client';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const HOTSPOTS = [
  { name: 'MPOB (Malaysia)', lat: 3.14, lng: 101.69, color: '#D4AF37', label: 'MPOB HQ' },
  { name: 'ROAT (Thailand)', lat: 13.75, lng: 100.5, color: '#2E8B57', label: 'ROAT Partner' },
  { name: 'Punjab (India)', lat: 31.15, lng: 75.34, color: '#D4AF37', label: 'Punjab Project' },
  { name: 'KL', lat: 3.14, lng: 101.69, color: '#F0D060', label: 'Librae HQ' },
  { name: 'Batu Gajah', lat: 4.47, lng: 101.04, color: '#2E8B57', label: 'Origin' },
  { name: 'Melaka Straits', lat: 2.10, lng: 102.25, color: '#3EAB6C', label: 'Ocean Monitor' },
];

function latLngToVec3(lat, lng, r) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

export default function Globe({ height = '100%' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const el = mountRef.current;
    const w = el.clientWidth, h = el.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
    camera.position.z = 3.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    // Globe sphere
    const geo = new THREE.SphereGeometry(1, 64, 64);
    const mat = new THREE.MeshPhongMaterial({
      color: new THREE.Color('#002366'),
      emissive: new THREE.Color('#001133'),
      specular: new THREE.Color('#1466CC'),
      shininess: 30,
      transparent: true,
      opacity: 0.95,
    });
    const globe = new THREE.Mesh(geo, mat);
    scene.add(globe);

    // Wireframe overlay
    const wfGeo = new THREE.SphereGeometry(1.001, 32, 32);
    const wfMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#D4AF37'),
      wireframe: true,
      transparent: true,
      opacity: 0.06,
    });
    const wireframe = new THREE.Mesh(wfGeo, wfMat);
    scene.add(wireframe);

    // Atmosphere glow
    const atmGeo = new THREE.SphereGeometry(1.15, 32, 32);
    const atmMat = new THREE.MeshPhongMaterial({
      color: new THREE.Color('#002A6E'),
      transparent: true,
      opacity: 0.12,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(atmGeo, atmMat));

    // Lights
    const ambient = new THREE.AmbientLight(0x223355, 0.8);
    scene.add(ambient);
    const dirLight = new THREE.DirectionalLight(0xD4AF37, 1.2);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);
    const rimLight = new THREE.DirectionalLight(0x2E8B57, 0.5);
    rimLight.position.set(-5, -2, -5);
    scene.add(rimLight);

    // Hotspots
    const hotspotMeshes = [];
    HOTSPOTS.forEach(hs => {
      const pos = latLngToVec3(hs.lat, hs.lng, 1.02);
      const dotGeo = new THREE.SphereGeometry(0.018, 16, 16);
      const dotMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(hs.color) });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(pos);
      scene.add(dot);
      hotspotMeshes.push(dot);

      // Pulse ring
      const ringGeo = new THREE.RingGeometry(0.025, 0.04, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(hs.color), side: THREE.DoubleSide, transparent: true, opacity: 0.6
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos);
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      ring.userData.pulse = Math.random() * Math.PI * 2;
      scene.add(ring);
    });

    // Stars
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(3000);
    for (let i = 0; i < 3000; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 200;
      starPositions[i+1] = (Math.random() - 0.5) * 200;
      starPositions[i+2] = (Math.random() - 0.5) * 200;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.3, sizeAttenuation: true });
    scene.add(new THREE.Points(starGeo, starMat));

    // Orbital Rings & Satellites (Copernicus Constellation)
    const satellites = [];
    const orbitalRadii = [1.3, 1.45, 1.6];
    const orbitalSpeeds = [0.2, -0.15, 0.3];
    const orbitalColors = ['#4A9EFF', '#7B4AFF', '#D4AF37'];

    orbitalRadii.forEach((radius, idx) => {
      // The Ring Path
      const ringG = new THREE.TorusGeometry(radius, 0.002, 16, 100);
      const ringM = new THREE.MeshBasicMaterial({ color: orbitalColors[idx], transparent: true, opacity: 0.2 });
      const ringMesh = new THREE.Mesh(ringG, ringM);
      // Tilt the obits
      ringMesh.rotation.x = Math.PI / 2 + (Math.random() - 0.5) * 0.5;
      ringMesh.rotation.y = (Math.random() - 0.5) * 0.5;
      scene.add(ringMesh);

      // The Satellite Node
      const sGeo = new THREE.SphereGeometry(0.02, 16, 16);
      const sMat = new THREE.MeshBasicMaterial({ color: orbitalColors[idx] });
      const satellite = new THREE.Mesh(sGeo, sMat);
      // Give satellite a glowing aura
      const auraG = new THREE.SphereGeometry(0.04, 16, 16);
      const auraM = new THREE.MeshBasicMaterial({ color: orbitalColors[idx], transparent: true, opacity: 0.4 });
      const aura = new THREE.Mesh(auraG, auraM);
      satellite.add(aura);

      scene.add(satellite);
      satellites.push({ mesh: satellite, radius, speed: orbitalSpeeds[idx], angle: Math.random() * Math.PI * 2, tiltX: ringMesh.rotation.x, tiltY: ringMesh.rotation.y });
    });

    // Mouse drag rotation
    let isDragging = false, prevX = 0, prevY = 0, velX = 0, velY = 0;
    const onMouseDown = e => { isDragging = true; prevX = e.clientX; prevY = e.clientY; };
    const onMouseMove = e => {
      if (!isDragging) return;
      velX = (e.clientX - prevX) * 0.005;
      velY = (e.clientY - prevY) * 0.005;
      prevX = e.clientX; prevY = e.clientY;
    };
    const onMouseUp = () => { isDragging = false; };
    el.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation
    let frame;
    const clock = new THREE.Clock();
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      if (!isDragging) {
        globe.rotation.y += 0.002;
        wireframe.rotation.y += 0.001;
        velX *= 0.95; velY *= 0.95;
      } else {
        globe.rotation.y += velX;
        globe.rotation.x += velY;
        wireframe.rotation.y += velX;
        wireframe.rotation.x += velY;
      }
      // Pulse rings
      scene.children.forEach(child => {
        if (child.userData.pulse !== undefined) {
          child.userData.pulse += 0.05;
          child.material.opacity = 0.3 + 0.4 * Math.sin(child.userData.pulse);
          const s = 1 + 0.3 * Math.sin(child.userData.pulse);
          child.scale.set(s, s, s);
        }
      });

      // Animate Satellites
      satellites.forEach(sat => {
        sat.angle += sat.speed * 0.02; // Update angle based on speed
        // Basic circular orbit in XZ plane
        let x = sat.radius * Math.cos(sat.angle);
        let z = sat.radius * Math.sin(sat.angle);
        let y = 0;
        
        // Apply tilts to match the orbital ring
        const vec = new THREE.Vector3(x, y, z);
        vec.applyAxisAngle(new THREE.Vector3(1, 0, 0), sat.tiltX);
        vec.applyAxisAngle(new THREE.Vector3(0, 1, 0), sat.tiltY);
        
        sat.mesh.position.copy(vec);
      });

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      const nw = el.clientWidth, nh = el.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width:'100%', height, cursor:'grab' }} />
  );
}
