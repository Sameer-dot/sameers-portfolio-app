import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import * as THREE from 'three';

const Target = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  const ringColor = new THREE.Color('#33a381');
  const standColor = new THREE.Color('#1C1C21');

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* Stand base */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.5, 0.7, 0.15, 32]} />
        <meshStandardMaterial color={standColor} metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Stand pole */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.3, 16]} />
        <meshStandardMaterial color={standColor} metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Outer ring */}
      <mesh position={[0, 0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.05, 16, 48]} />
        <meshStandardMaterial color={ringColor} metalness={0.4} roughness={0.2} />
      </mesh>
      {/* Middle ring */}
      <mesh position={[0, 0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.35, 0.04, 16, 48]} />
        <meshStandardMaterial color="#AFB0B6" metalness={0.4} roughness={0.2} />
      </mesh>
      {/* Inner ring / bullseye */}
      <mesh position={[0, 0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.15, 0.03, 16, 48]} />
        <meshStandardMaterial color={ringColor} metalness={0.4} roughness={0.2} />
      </mesh>
      {/* Center dot */}
      <mesh position={[0, 0.9, 0]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" emissive="#33a381" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
};

export default Target;
