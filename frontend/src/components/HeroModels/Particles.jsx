import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 300 }) => {
  const mesh = useRef();

  // Generate particles inside a sphere
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const radius = 5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      temp.push({
        basePosition: [x, y, z],
        speed: 0.5 + Math.random() * 0.5, // Individual particle speed multiplier
        offset: Math.random() * 100,     // Phase offset
      });
    }
    return temp;
  }, [count]);

  // Reusable Float32Array for performance
  const positions = useMemo(() => new Float32Array(count * 3), [count]);

  // Animate each particle with orbital floating motion
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const timeFactor = 3; // 🔥 Adjust this to control global animation speed

    particles.forEach((p, i) => {
      const [x, y, z] = p.basePosition;
      const floatY = y + Math.sin(t * p.speed * timeFactor + p.offset) * 0.2;
      const floatX = x + Math.cos(t * p.speed * timeFactor + p.offset) * 0.1;
      const floatZ = z + Math.sin(t * p.speed * timeFactor + p.offset) * 0.1;

      positions[i * 3] = floatX;
      positions[i * 3 + 1] = floatY;
      positions[i * 3 + 2] = floatZ;
    });

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
