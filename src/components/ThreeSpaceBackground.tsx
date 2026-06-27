import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

// Custom procedural Earth shader
const EarthShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uSunDirection: { value: new THREE.Vector3(5, 3, 5).normalize() },
  },
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec2 vUv;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec2 vUv;
    uniform float uTime;
    uniform vec3 uSunDirection;

    // Procedural value noise
    float hash(vec3 p) {
      p = fract(p * 0.3183099 + vec3(0.1, 0.1, 0.1));
      p *= 17.0;
      return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
    }

    float noise(vec3 x) {
      vec3 i = floor(x);
      vec3 f = fract(x);
      f = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(
          mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
          mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x),
          f.y
        ),
        mix(
          mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
          mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x),
          f.y
        ),
        f.z
      );
    }

    float fbm(vec3 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 4; ++i) {
        v += a * noise(p);
        p = p * 2.0;
        a *= 0.5;
      }
      return v;
    }

    void main() {
      // 3D Noise for landmasses
      float n = fbm(vPosition * 2.2);
      
      // Futuristic Space colors
      vec3 oceanColor = vec3(0.01, 0.04, 0.12); // deep space navy blue
      vec3 landColor = vec3(0.04, 0.3, 0.6);   // cybernetic tech blue
      
      // Determine if land or ocean
      float isLand = step(0.46, n);
      vec3 baseColor = mix(oceanColor, landColor, isLand);
      
      // Add glowing neon coastlines
      float edge = smoothstep(0.44, 0.46, n) * (1.0 - smoothstep(0.46, 0.48, n));
      baseColor += edge * vec3(0.0, 0.8, 1.0) * 0.7; // glowing cyan borders
      
      // Grid lines overlay (latitude/longitude lines for tech vibe)
      float gridX = step(0.98, sin(vUv.x * 80.0));
      float gridY = step(0.98, sin(vUv.y * 40.0));
      float grid = max(gridX, gridY);
      baseColor = mix(baseColor, vec3(0.0, 0.6, 0.9), grid * 0.12);

      // Lighting (Sun diffuse reflection)
      float diffuse = max(dot(vNormal, uSunDirection), 0.08); // 0.08 ambient light min
      
      // Specular highlight on oceans
      vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));
      vec3 halfDir = normalize(uSunDirection + viewDir);
      float spec = pow(max(dot(vNormal, halfDir), 0.0), 16.0) * (1.0 - isLand);
      vec3 specularColor = vec3(0.3, 0.7, 1.0) * spec * 0.6;
      
      // Combine lighting
      vec3 finalColor = baseColor * diffuse + specularColor;
      
      // Add a subtle rim glow
      float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 4.0);
      finalColor += vec3(0.0, 0.6, 1.0) * fresnel * 0.4;

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,
};

// Custom atmosphere shader
const AtmosphereShaderMaterial = {
  vertexShader: `
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec3 vNormal;
    void main() {
      // Glow is strongest at the outer edge
      float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.5);
      gl_FragColor = vec4(0.0, 0.6, 1.0, 1.0) * intensity * 0.8;
    }
  `,
};

function SpaceScene() {
  const earthRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  const { width } = useThree().viewport;
  
  // Make the Earth placement responsive
  const isMobile = width < 6.5;
  const earthPosition: [number, number, number] = isMobile ? [0, -1.2, 0] : [2.2, 0, 0];
  const earthScale = isMobile ? 1.5 : 2.0;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scrollY = window.scrollY;

    // Continuous rotation
    if (earthRef.current) {
      earthRef.current.rotation.y = time * 0.04 + scrollY * 0.0006;
    }
    
    // Parallax scrolling effect on the entire group
    if (groupRef.current) {
      groupRef.current.position.y = scrollY * 0.0015;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 3D Stars background */}
      <Stars radius={120} depth={50} count={3500} factor={4} saturation={0.5} fade speed={1.2} />

      {/* Earth Group */}
      <group position={earthPosition}>
        {/* Earth Mesh */}
        <mesh ref={earthRef} scale={earthScale}>
          <sphereGeometry args={[1, 64, 64]} />
          <shaderMaterial
            attach="material"
            args={[
              {
                uniforms: {
                  uTime: { value: 0 },
                  uSunDirection: { value: new THREE.Vector3(5, 3, 5).normalize() },
                },
                vertexShader: EarthShaderMaterial.vertexShader,
                fragmentShader: EarthShaderMaterial.fragmentShader,
                transparent: true,
              },
            ]}
          />
        </mesh>

        {/* Atmosphere Glow Mesh */}
        <mesh ref={atmosphereRef} scale={earthScale * 1.15}>
          <sphereGeometry args={[1, 32, 32]} />
          <shaderMaterial
            attach="material"
            args={[
              {
                vertexShader: AtmosphereShaderMaterial.vertexShader,
                fragmentShader: AtmosphereShaderMaterial.fragmentShader,
                blending: THREE.AdditiveBlending,
                side: THREE.BackSide,
                transparent: true,
              },
            ]}
          />
        </mesh>
      </group>
    </group>
  );
}

export function ThreeSpaceBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <SpaceScene />
        </Canvas>
      </div>

      {/* CSS nebula glows from original component for high performance & aesthetics */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden>
        {/* Purple nebula — top right */}
        <div
          className="absolute animate-drift"
          style={{
            top: "-10%",
            right: "-10%",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(88,28,135,0.18) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Blue nebula — left center */}
        <div
          className="absolute animate-drift-slow"
          style={{
            top: "30%",
            left: "-8%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(29,78,216,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Teal nebula — bottom center */}
        <div
          className="absolute animate-pulse-soft"
          style={{
            bottom: "-5%",
            left: "35%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,78,59,0.10) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Tech Grid scanning line */}
        <div
          className="absolute inset-x-0 top-1/3 h-[1px] animate-scan"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(56,189,248,0.42), rgba(255,255,255,0.12), transparent)",
          }}
        />

        {/* Tech Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(circle at center, black 18%, transparent 74%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 18%, transparent 74%)",
          }}
        />
      </div>
    </>
  );
}
