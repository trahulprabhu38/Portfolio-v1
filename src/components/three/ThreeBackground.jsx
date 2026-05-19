import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ThreeBackground.css';

// ── Helpers ───────────────────────────────────────────────────────────────────

const lm = (color, opacity) =>
  new THREE.LineBasicMaterial({ color, transparent: true, opacity });

// Stars uniformly distributed on a sphere shell
function makeStarSphere(count, rMin, rMax, color, size, opacity) {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = rMin + Math.random() * (rMax - rMin);
    const u = Math.random(), v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi   = Math.acos(2 * v - 1);
    pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = r * Math.cos(phi);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    color, size, transparent: true, opacity,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  return { pts: new THREE.Points(geo, mat), geo, mat };
}

// Proper spiral galaxy — flat disc, logarithmic spiral arms
function makeGalaxy(count = 1200, arms = 3) {
  const positions = new Float32Array(count * 3);
  const colors    = new Float32Array(count * 3);
  const spin = 3.2, spread = 0.6;

  for (let i = 0; i < count; i++) {
    const r  = Math.random() * 10;
    const br = (i % arms) * ((Math.PI * 2) / arms);
    const sa = r * spin;
    const rx = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * spread;
    const ry = Math.pow(Math.random(), 5) * (Math.random() < 0.5 ? 1 : -1) * 0.12;
    const rz = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * spread;

    positions[i * 3]     = Math.cos(br + sa) * r + rx;
    positions[i * 3 + 1] = ry;
    positions[i * 3 + 2] = Math.sin(br + sa) * r + rz;

    const t = Math.min(r / 10, 1);
    // inner: blue-white → outer: violet-pink
    colors[i * 3]     = 0.5 + (1 - t) * 0.5;
    colors[i * 3 + 1] = 0.45 + (1 - t) * 0.5;
    colors[i * 3 + 2] = 1.0;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));
  const mat = new THREE.PointsMaterial({
    size: 0.065, vertexColors: true, transparent: true, opacity: 0.8,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  return { pts: new THREE.Points(geo, mat), geo, mat };
}

// Galaxy core glow
function makeGalaxyCoreGlow() {
  const count = 220;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = Math.pow(Math.random(), 2) * 1.2;
    const a = Math.random() * Math.PI * 2;
    pos[i * 3]     = Math.cos(a) * r;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 0.18;
    pos[i * 3 + 2] = Math.sin(a) * r;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    color: 0xfff8e0, size: 0.18, transparent: true, opacity: 0.9,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  return { pts: new THREE.Points(geo, mat), geo, mat };
}

// Black hole — astrophysical rendering with photon ring, Doppler disk, lensed secondary image
function makeBlackHole() {
  const g = new THREE.Group();

  // ── 1. Event horizon ─────────────────────────────────────────────────────
  g.add(new THREE.Mesh(
    new THREE.SphereGeometry(1.0, 64, 64),
    new THREE.MeshBasicMaterial({ color: 0x000000 })
  ));

  // ── 2. Corona — fuzzy X-ray haze clinging to the horizon ─────────────────
  const coronaN = 700;
  const cPos = new Float32Array(coronaN * 3);
  for (let i = 0; i < coronaN; i++) {
    const r = 1.0 + Math.pow(Math.random(), 2.5) * 0.38;
    const theta = Math.random() * Math.PI * 2;
    const phi   = Math.acos(2 * Math.random() - 1);
    cPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    cPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    cPos[i * 3 + 2] = r * Math.cos(phi);
  }
  const cGeo = new THREE.BufferGeometry();
  cGeo.setAttribute('position', new THREE.BufferAttribute(cPos, 3));
  g.add(new THREE.Points(cGeo, new THREE.PointsMaterial({
    color: 0xfffbe8, size: 0.06, transparent: true, opacity: 0.18,
    blending: THREE.AdditiveBlending, depthWrite: false,
  })));



  // ── 4. Accretion disk — Doppler-shifted, tilted, rotating sub-group ───────
  const diskGroup = new THREE.Group();
  diskGroup.userData = { type: 'disk' };

  const diskN = 18000;
  const dPos = new Float32Array(diskN * 3);
  const dCol = new Float32Array(diskN * 3);
  const incl = 0.22; // slight viewing tilt so disk reads clearly

  for (let i = 0; i < diskN; i++) {
    const a     = Math.random() * Math.PI * 2;
    // Concentrate heavily toward inner edge — power 1.6 makes it taper fast
    const r     = 1.15 + Math.pow(Math.random(), 1.6) * 2.2;
    const thick = 0.008 + (r - 1.15) * 0.012; // very thin
    const xF    = Math.cos(a) * r;
    const zF    = Math.sin(a) * r;
    const yF    = (Math.random() - 0.5) * thick * 2;

    // Tilt disk toward viewer
    dPos[i * 3]     = xF;
    dPos[i * 3 + 1] = yF * Math.cos(incl) - zF * Math.sin(incl);
    dPos[i * 3 + 2] = yF * Math.sin(incl) + zF * Math.cos(incl);

    // Doppler boosting × temperature gradient
    const dop    = Math.cos(a);                             // +1 = approaching
    const innerT = 1 - Math.min((r - 1.15) / 2.2, 1);     // 1 = inner, 0 = outer
    const bright = 0.5 + dop * 0.5;                        // approaching side 2× brighter
    dCol[i * 3]     = Math.min(1, bright * (0.9 + innerT * 0.1));
    dCol[i * 3 + 1] = Math.min(1, bright * (0.35 + innerT * 0.55));
    dCol[i * 3 + 2] = Math.min(1, bright * (0.03 + innerT * 0.55));
  }

  const dGeo = new THREE.BufferGeometry();
  dGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3));
  dGeo.setAttribute('color', new THREE.BufferAttribute(dCol, 3));
  diskGroup.add(new THREE.Points(dGeo, new THREE.PointsMaterial({
    size: 0.058, vertexColors: true, transparent: true, opacity: 0.74,
    blending: THREE.AdditiveBlending, depthWrite: false,
  })));

  g.add(diskGroup);


  // ── 6. Relativistic jet glow — particles only, no lines ──────────────────
  const jgN = 180;
  const jgPos = new Float32Array(jgN * 3);
  for (let i = 0; i < jgN; i++) {
    const dir = i < jgN / 2 ? 1 : -1;
    const t   = Math.random();
    const y   = dir * (1.1 + t * 6.8);
    const r   = Math.random() * 0.22 * t;
    const a   = Math.random() * Math.PI * 2;
    jgPos[i * 3]     = Math.cos(a) * r;
    jgPos[i * 3 + 1] = y;
    jgPos[i * 3 + 2] = Math.sin(a) * r;
  }
  const jgGeo = new THREE.BufferGeometry();
  jgGeo.setAttribute('position', new THREE.BufferAttribute(jgPos, 3));
  g.add(new THREE.Points(jgGeo, new THREE.PointsMaterial({
    color: 0x55bbff, size: 0.12, transparent: true, opacity: 0.3,
    blending: THREE.AdditiveBlending, depthWrite: false,
  })));

  return g;
}

// Nebula — spread particle cloud
function makeNebula(color, count = 300, radius = 5, flatness = 0.22) {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = Math.random() * radius;
    const u = Math.random(), v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi   = Math.acos(2 * v - 1);
    pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * flatness;
    pos[i * 3 + 2] = r * Math.cos(phi);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    color, size: 0.28, transparent: true, opacity: 0.11,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  return { pts: new THREE.Points(geo, mat), geo, mat };
}

// Kubernetes wheel
function makeK8sWheel(color) {
  const g = new THREE.Group();
  const r = 0.22;
  const hexGeo = new THREE.CylinderGeometry(r, r, 0.03, 6);
  const mat = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.35 });
  const center = new THREE.Mesh(hexGeo, mat);
  center.rotation.x = Math.PI / 2;
  g.add(center);
  const edgeMat = lm(color, 0.2);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const d = r * 3.6;
    const x = Math.cos(a) * d, y = Math.sin(a) * d;
    const hex = new THREE.Mesh(hexGeo, mat.clone());
    hex.rotation.x = Math.PI / 2;
    hex.position.set(x, y, 0);
    g.add(hex);
    g.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0), new THREE.Vector3(x,y,0)]),
      edgeMat.clone()
    ));
  }
  return g;
}

// Terraform diamonds
function makeTerraformDiamonds(color) {
  const g = new THREE.Group();
  const m = lm(color, 0.32);
  [[0.5, 0.72, 0.28], [0.38, 0.56, -0.18], [0.24, 0.38, -0.48]].forEach(([w, h, y]) => {
    const s = new THREE.Shape();
    s.moveTo(0, h/2); s.lineTo(w/2, 0); s.lineTo(0, -h/2); s.lineTo(-w/2, 0); s.closePath();
    const seg = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.ShapeGeometry(s)),
      m.clone()
    );
    seg.position.y = y;
    g.add(seg);
  });
  return g;
}

// ── Main component ────────────────────────────────────────────────────────────

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = window.innerWidth, H = window.innerHeight;

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(80, W / H, 0.1, 300);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x030210, 1);
    mount.appendChild(renderer.domElement);

    // ── Star shells (spherical — surround camera on all sides) ────────────────
    const far  = makeStarSphere(3800, 22, 65, 0xd8d0ff, 0.05,  0.8);
    const mid  = makeStarSphere(900,  10, 22, 0xfff8f0, 0.10,  0.6);
    const blue = makeStarSphere(400,  14, 40, 0x88bbff, 0.13,  0.5);
    scene.add(far.pts, mid.pts, blue.pts);

    // ── Galaxy — placed far upper-left of initial view ────────────────────────
    const { pts: galaxyPts, geo: galGeo, mat: galMat } = makeGalaxy(1200, 3);
    galaxyPts.position.set(-40, -8, -30);
    galaxyPts.rotation.set(0.3, 0.5, 0.1);
    galaxyPts.scale.setScalar(3.5);
    scene.add(galaxyPts);

    const { pts: corePts, geo: coreGeo, mat: coreMat } = makeGalaxyCoreGlow();
    corePts.position.copy(galaxyPts.position);
    corePts.rotation.copy(galaxyPts.rotation);
    corePts.scale.copy(galaxyPts.scale);
    scene.add(corePts);

    // ── Black hole — massive, dominates the background ───────────────────────
    const bh = makeBlackHole();
    bh.position.set(20, -1, -10);
    bh.scale.setScalar(7.5);
    scene.add(bh);

    // ── Nebulae — spread around different quadrants ───────────────────────────
    const neb1 = makeNebula(0x6633bb, 380, 7, 0.28);
    neb1.pts.position.set(-28, 12, -18);
    scene.add(neb1.pts);

    const neb2 = makeNebula(0x1144aa, 320, 6, 0.35);
    neb2.pts.position.set(18, -16, 25);
    scene.add(neb2.pts);

    const neb3 = makeNebula(0x881133, 260, 5, 0.2);
    neb3.pts.position.set(5, 22, -40);
    scene.add(neb3.pts);

    // ── DevOps objects ────────────────────────────────────────────────────────
    const tf = makeTerraformDiamonds(0x7b42bc);
    tf.position.set(5, 3.5, -3);
    tf.userData = { iy: 3.5, rx: 0.004, ry: 0.007, fs: 0.41, fa: 0.2 };
    scene.add(tf);

    const tf2 = makeTerraformDiamonds(0x9b62dc);
    tf2.scale.setScalar(0.7);
    tf2.position.set(-5.5, -4, -5);
    tf2.userData = { iy: -4, rx: -0.003, ry: 0.005, fs: 0.35, fa: 0.15 };
    scene.add(tf2);

    const devOpsFloaters = [tf, tf2];

    // ── State ─────────────────────────────────────────────────────────────────
    const mouse   = { x: 0, y: 0 };
    let   scrollY = 0;

    const onMouseMove = e => {
      mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onScroll = () => { scrollY = window.scrollY; };
    const onResize = () => {
      const w = window.innerWidth, h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // ── Animation ─────────────────────────────────────────────────────────────
    const clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t  = clock.getElapsedTime();
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const sp = scrollY / maxScroll; // 0 → 1 over full page

      // Universe sweeps slowly as you scroll — black hole stays prominent
      scene.rotation.y = sp * Math.PI * 0.9 + mouse.x * 0.14;
      scene.rotation.x = sp * 0.15 + mouse.y * 0.07;

      // Slow forward drift through space
      camera.position.z = 5 - sp * 3.5;

      // Star shells drift slowly
      far.pts.rotation.y  = t * 0.012;
      far.pts.rotation.x  = t * 0.005;
      mid.pts.rotation.y  = -t * 0.008;
      blue.pts.rotation.z = t * 0.006;

      // Galaxy slow spin
      galaxyPts.rotation.y += 0.0015;
      corePts.rotation.y   += 0.0015;

      // Black hole — glacially slow drift
      bh.children.forEach((child) => {
        const ct = child.userData.type;
        if (ct === 'disk') child.rotation.y += 0.00014;
        else if (ct === 'arc') child.rotation.z += child.userData.speed * 0.08;
      });

      // Nebulae gentle pulse
      const nb = 0.97 + Math.sin(t * 0.4) * 0.03;
      neb1.pts.material.opacity = 0.11 * nb;
      neb2.pts.material.opacity = 0.11 / nb;

      // DevOps floaters bob
      devOpsFloaters.forEach(obj => {
        const d = obj.userData;
        if (d.rx) obj.rotation.x += d.rx;
        if (d.ry) obj.rotation.y += d.ry;
        obj.position.y = d.iy + Math.sin(t * d.fs) * d.fa;
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
      [far, mid, blue].forEach(({ geo, mat }) => { geo.dispose(); mat.dispose(); });
      galGeo.dispose(); galMat.dispose();
      coreGeo.dispose(); coreMat.dispose();
      [neb1, neb2, neb3].forEach(({ geo, mat }) => { geo.dispose(); mat.dispose(); });
    };
  }, []);

  return <div ref={mountRef} className="three-bg" />;
};

export default ThreeBackground;
