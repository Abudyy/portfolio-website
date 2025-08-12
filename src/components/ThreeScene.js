// src/components/ThreeScene.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// === YOUR SAVED LIGHTS (from the editor) ===
const SAVED_LIGHTS = {
  "glows":[
    {"type":"sprite","color":"#73d8ff","size":2.1192301713867185,"position":[-2.571258822860637,0.3649174656637207,-3.0741471214670324]},
    {"type":"sprite","color":"#73d8ff","size":2.1192301713867185,"position":[-3.6181930442660173,0.47412997008043417,-2.027212605421513]},
    {"type":"sprite","color":"#73d8ff","size":2.1192301713867185,"position":[-3.5528715019013952,1.671431092332433,-2.092534490119567]},
    {"type":"sprite","color":"#73d8ff","size":2.1192301713867185,"position":[-2.8886812963180866,1.548960121888166,-2.7567250706570463]},
    {"type":"sprite","color":"#73d8ff","size":2.1192301713867185,"position":[-4.640667801294827,0.7574083172817666,-1.0953918187053224]},
    {"type":"sprite","color":"#73d8ff","size":2.1192301713867185,"position":[-4.6589397544046784,-0.24410818424900374,-1.09539169056994]},
    {"type":"sprite","color":"#73d8ff","size":2.1192301713867185,"position":[2.799078322014729,-1.0545002109384374,-3.3862049672289607]},
    {"type":"sprite","color":"#73d8ff","size":2.1192301713867185,"position":[-2.469219220286087,-0.9593680542615028,-3.4982286420699666]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[-3.1601384056578947,-1.234934437498382,-1.9966663763896169]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[-2.6532195358782604,-1.2452757630037996,-2.4654785151806933]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[0.2815401977006077,-1.1444151914648946,-3.4016220932065866]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[1.064968359183738,-1.193752190171596,-3.403401988589759]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[1.547166631907085,-1.1611623119888625,-3.4035331411308922]},
    {"type":"sprite","color":"#ff6ec7","size":1.716576438823242,"position":[-4.508756950911669,-0.4190455042330947,1.2985384074073618]},
    {"type":"sprite","color":"#ff6ec7","size":1.716576438823242,"position":[-0.604359207083438,3.0931449064990084,-2.9949319960068865]},
    {"type":"sprite","color":"#ff6ec7","size":1.716576438823242,"position":[-1.5846542275535496,2.6926377756550353,-2.9946792488079]},
    {"type":"sprite","color":"#ff6ec7","size":1.716576438823242,"position":[0.6543018133415361,3.4072748348539545,1.2790587134414448]},
    {"type":"sprite","color":"#ff6ec7","size":1.716576438823242,"position":[0.9791283709252319,3.273668862689669,1.2791430459617497]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[1.2970601735679188,0.7839074469116756,0.22560248365942392]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[1.6616023179672736,0.9431196365018943,0.5632888553886816]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[0.8422155141915875,-1.5396886030391608,-0.5444552925727018]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[-0.2267494899886242,-1.551847438983979,0.46938311466472693]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[0.29165370454339057,-1.7323118840761365,0.041468668913267774]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[1.6322600482126213,-1.231136544067712,3.595773480184692]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[0.8858071540835477,-1.285901563315087,3.591758734724817]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[-2.2463183844027297,0.49224947174526384,2.890317201589123]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[-2.746989854688416,0.449477025005448,2.865622516535706]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[1.722225282024961,-2.505411533290564,-3.988361794101984]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[1.7281461959332245,-2.6570788705306794,-3.625973830773161]},
    {"type":"sprite","color":"#ff6ec7","size":1.716576438823242,"position":[-4.461109689014862,-2.251567914022948,1.2918333461987783]},
    {"type":"sprite","color":"#ff6ec7","size":1.716576438823242,"position":[-4.4429164696186625,-2.208146386567292,0.7427024878677123]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[-1.699296096140703,-2.4486784131215447,-3.222294278310013]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[-0.8901462421852792,-2.446300999390926,-3.223667451488931]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[-2.3530117969075004,2.2803545016484645,-0.6402939965267318]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[-2.4387731417611818,2.6682187860358,-0.6402939981741018]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[-4.684788171409424,1.7353816285732084,2.8532501573583624]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[-4.681103367600312,0.8446610159022646,2.8569349382181084]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[-0.91043085976978,-0.6547541369694961,1.535370206605173]},
    {"type":"sprite","color":"#ffc58f","size":1.716576438823242,"position":[-0.6171412514263441,-0.5317113142542237,1.9397678274154992]},
    {"type":"sprite","color":"#ff6ec7","size":1.716576438823242,"position":[-0.7396027007544581,-2.1069262143382006,0.9984300165858793]}
  ],
  "spots":[]
};

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const cleanup = []; // moved up so editor can push into it

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, mount.clientWidth / mount.clientHeight, 0.05, 1000);
    camera.position.set(10, 2, 15);

    // Renderer (transparent)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, premultipliedAlpha: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.4;
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Environment lighting
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

    // Base lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));
    const dir = new THREE.DirectionalLight(0xffffff, 1.0); dir.position.set(5, 10, 7.5); scene.add(dir);
    const pinkKey = new THREE.DirectionalLight(0xff6ec7, 0.6); pinkKey.position.set(-8, 6, 4); scene.add(pinkKey);
    const cyanFill = new THREE.DirectionalLight(0x6fe3ff, 0.5); cyanFill.position.set(8, 4, -2); scene.add(cyanFill);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false; controls.minDistance = 2;
    controls.maxDistance = 20; controls.maxPolarAngle = Math.PI / 2;

    // Glow sprite helper
    function makeGlowSprite(color = '#73d8ff', size = 1.8) {
      const c = document.createElement('canvas'); c.width = c.height = 256;
      const ctx = c.getContext('2d');
      const g = ctx.createRadialGradient(128,128,0,128,128,128);
      g.addColorStop(0.0,'rgba(255,255,255,1)');
      g.addColorStop(0.48,'rgba(255,255,255,0.35)');
      g.addColorStop(1.0,'rgba(255,255,255,0)');
      ctx.fillStyle = g; ctx.fillRect(0,0,256,256);
      const tex = new THREE.CanvasTexture(c);
      const mat = new THREE.SpriteMaterial({
        map: tex, color: new THREE.Color(color),
        blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.85
      });
      const s = new THREE.Sprite(mat); s.scale.set(size, size, size); return s;
    }

    // Apply saved lights (sprites + spots) — spots array is empty now but supported
    function applySavedLights(data) {
      data?.glows?.forEach(g => {
        const s = makeGlowSprite(g.color || '#73d8ff', g.size || 1.5);
        s.position.fromArray(g.position);
        scene.add(s);
      });
      data?.spots?.forEach(sv => {
        const spot = new THREE.SpotLight(0xffffff, sv.intensity ?? 1, sv.distance, sv.angle, sv.penumbra ?? 0.35, 1.0);
        spot.color.set(sv.color || '#ffffff');
        spot.castShadow = false;
        spot.position.fromArray(sv.position);
        spot.target.position.fromArray(sv.target);
        scene.add(spot, spot.target);
      });
    }

    // Pivot
    const pivot = new THREE.Group(); scene.add(pivot);

    // Loader
    const manager = new THREE.LoadingManager();
    const loader = new GLTFLoader(manager);
    let mixer = null;
    let model = null;

    loader.load(
      `${process.env.PUBLIC_URL}/models/vaporwave_littlest_tokyo_-_3d_editor_challenge/scene.gltf`,
      (gltf) => {
        model = gltf.scene;

        // Materials cleanup + emissive boost
        model.traverse((o) => {
          if (!o.isMesh) return;
          const g = o.geometry;
          if (g && !g.attributes.uv2 && g.attributes.uv) {
            g.setAttribute('uv2', new THREE.BufferAttribute(g.attributes.uv.array, 2));
          }
          const mats = Array.isArray(o.material) ? o.material : [o.material];
          const name = (o.name || '').toLowerCase();
          const isSign = name.includes('sign') || name.includes('screen') || name.includes('tv') || name.includes('billboard');
          mats.forEach((m) => {
            if (!m) return;
            if (m.map) { m.map.colorSpace = THREE.SRGBColorSpace; m.map.anisotropy = renderer.capabilities.getMaxAnisotropy(); }
            if (m.emissiveMap) m.emissiveMap.colorSpace = THREE.SRGBColorSpace;
            if ('envMapIntensity' in m) m.envMapIntensity = 0.8;
            if ('aoMapIntensity' in m) m.aoMapIntensity = 1.0;
            if (isSign && 'emissive' in m) {
              const neon = name.includes('left') || name.includes('pink') ? '#ff6ec7' : '#73d8ff';
              m.emissive = new THREE.Color(neon);
              m.emissiveIntensity = 2.2;
            }
          });
        });

        model.position.set(0, 0, 0);
        model.scale.set(0.02, 0.02, 0.02);
        pivot.add(model);

        // Frame: flip to opposite side
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const offset = camera.position.clone().sub(center);
        offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);
        camera.position.copy(center).add(offset);
        controls.target.copy(center);
        controls.update();

        // A couple of base spots (cheap, no shadows)
        const addSpot = (color, intensity, from, lookAt, dist = size.length() * 1.2) => {
          const spot = new THREE.SpotLight(color, intensity, dist, Math.PI / 7, 0.35, 1.0);
          spot.castShadow = false;
          spot.position.copy(from);
          spot.target.position.copy(lookAt);
          scene.add(spot, spot.target);
          return spot;
        };
        addSpot(0xff6ec7, 1.0,
          new THREE.Vector3(center.x - size.x * 0.6, center.y + size.y * 0.7, center.z + size.z * 0.6),
          new THREE.Vector3(center.x, center.y + size.y * 0.35, center.z));
        addSpot(0x6fe3ff, 0.9,
          new THREE.Vector3(center.x + size.x * 0.6, center.y + size.y * 0.65, center.z - size.z * 0.6),
          new THREE.Vector3(center.x, center.y + size.y * 0.3, center.z));

        // >>> Apply your saved glows here <<<
        applySavedLights(SAVED_LIGHTS);

        // Optional: load from localStorage if you saved there
        // const saved = localStorage.getItem('myLights');
        // if (saved) applySavedLights(JSON.parse(saved));

        // (Editor exists but off by default — press Q to toggle)
        //initEditor({ model, size });

        // Animations
        mixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach((clip) => mixer.clipAction(clip).play());
      },
      undefined,
      (err) => console.error('GLTF load error:', err)
    );

    manager.onLoad = () => {
      renderer.render(scene, camera);
      renderer.compile(scene, camera);
      requestAnimationFrame(() => { renderer.domElement.style.opacity = '1'; });
    };

    // Animate
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const dt = clock.getDelta();
      if (mixer) mixer.update(dt);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', handleResize);
/*
    // --- Editor (same as before, but OFF by default) ---
    function initEditor({ model, size }) {
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();
      let EDIT = false; // start OFF
      let glowColor = '#ff6ec7';
      let glowSize = size.x * 0.24;

      const placedGlows = [];
      const placedSpots = [];

      const ui = document.createElement('div');
      ui.style.cssText =
        'position:absolute;top:8px;left:8px;z-index:10;padding:8px 10px;border-radius:10px;'+
        'background:rgba(0,0,0,.55);color:#fff;font:12px/1.3 system-ui;display:flex;gap:8px;align-items:center;';
      ui.innerHTML = `
        <span id="status">Editor: <b>OFF</b></span>
        <button id="toggle" style="cursor:pointer;padding:4px 8px;border-radius:6px;border:none;background:#444;color:#fff">Toggle (Q)</button>
        <button id="copy" style="cursor:pointer;padding:4px 8px;border-radius:6px;border:none;background:#2ea043;color:#fff">Copy lights JSON</button>
      `;
      mount.appendChild(ui);

      ui.querySelector('#toggle').onclick = () => {
        EDIT = !EDIT;
        ui.querySelector('#status').innerHTML = `Editor: <b>${EDIT ? 'ON' : 'OFF'}</b>`;
      };

      async function exportJSON() {
        const glows = placedGlows.map(s => ({
          type: 'sprite', color: '#'+s.material.color.getHexString(),
          size: s.scale.x, position: s.position.toArray()
        }));
        const spots = placedSpots.map(s => ({
          type: 'spot', color: '#'+s.color.getHexString(), intensity: s.intensity,
          position: s.position.toArray(), target: s.target.position.toArray(),
          angle: s.angle, distance: s.distance, penumbra: s.penumbra
        }));
        const data = JSON.stringify({ glows, spots }, null, 2);
        try { await navigator.clipboard.writeText(data); console.log('Lights JSON copied to clipboard:\n', data); }
        catch { console.log('Lights JSON:\n', data); }
      }
      ui.querySelector('#copy').onclick = exportJSON;

      function getHit(e) {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        return raycaster.intersectObject(model, true)[0];
      }

      function worldNormal(hit) {
        if (!hit?.face) return new THREE.Vector3(0,1,0);
        const n = hit.face.normal.clone();
        n.transformDirection(hit.object.matrixWorld);
        return n.normalize();
      }

      function makeGlow(color, size, point, normal) {
        const s = makeGlowSprite(color, size);
        s.position.copy(point).add(normal.multiplyScalar(size * 0.01));
        scene.add(s);
        placedGlows.push(s);
      }

      function makeSpot(colorHex, point, normal) {
        const dist = size.length() * 0.8;
        const pos = point.clone().add(normal.clone().multiplyScalar(size.x * 0.35));
        const spot = new THREE.SpotLight(colorHex, 1.0, dist, Math.PI/7, 0.35, 1.0);
        spot.position.copy(pos);
        spot.target.position.copy(point);
        scene.add(spot, spot.target);
        placedSpots.push(spot);
      }

      function onPointerDown(e) {
        if (!EDIT) return;
        const hit = getHit(e);
        if (!hit) return;
        const n = worldNormal(hit);
        if (e.altKey) {
          const hex = glowColor === '#ff6ec7' ? 0xff6ec7 : glowColor === '#73d8ff' ? 0x73d8ff : 0xffc58f;
          makeSpot(hex, hit.point, n);
        } else if (e.shiftKey) {
          makeGlow(glowColor, glowSize, hit.point, n);
        }
      }

      function onKey(e) {
        if (e.code === 'KeyQ') { ui.querySelector('#toggle').click(); }
        if (e.code === 'Digit1') glowColor = '#ff6ec7';
        if (e.code === 'Digit2') glowColor = '#73d8ff';
        if (e.code === 'Digit3') glowColor = '#ffc58f';
        if (e.code === 'BracketLeft')  glowSize *= 0.9;
        if (e.code === 'BracketRight') glowSize *= 1.1;
        if (e.code === 'KeyE') exportJSON();
      }

      renderer.domElement.addEventListener('pointerdown', onPointerDown);
      document.addEventListener('keydown', onKey, { capture: true });

      cleanup.push(() => {
        renderer.domElement.removeEventListener('pointerdown', onPointerDown);
        document.removeEventListener('keydown', onKey, { capture: true });
        ui.remove();
      });
    }
*/
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cleanup.forEach(fn => fn());
      renderer.setAnimationLoop(null);
      pmrem.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);
  //height was 500px, not 
  return <div ref={mountRef} style={{ width: '100%', height: '500px', position: 'relative' }} />;
};

export default ThreeScene;
