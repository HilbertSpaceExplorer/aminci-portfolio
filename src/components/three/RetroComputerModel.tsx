import { RoundedBox } from "@react-three/drei";
import HtmlTerminalScreen from "./HtmlTerminalScreen";

export default function RetroComputerModel() {
  return (
    <group position={[0, 0.35, 0]}>
      {/* Monitor shell */}
      <RoundedBox
        args={[3.4, 2.35, 1.0]}
        radius={0.25}
        smoothness={8}
        position={[0, 1.55, 0]}
      >
        <meshStandardMaterial color="#e8ded2" roughness={0.42} metalness={0.05} />
      </RoundedBox>

      {/* Dark front bezel */}
      <RoundedBox
        args={[2.85, 1.85, 0.16]}
        radius={0.18}
        smoothness={8}
        position={[0, 1.55, 0.52]}
      >
        <meshStandardMaterial color="#17100d" roughness={0.4} />
      </RoundedBox>

      {/* Screen glass */}
      <RoundedBox
        args={[2.35, 1.35, 0.08]}
        radius={0.12}
        smoothness={8}
        position={[0, 1.55, 0.61]}
      >
        <meshStandardMaterial
          color="#120900"
          emissive="#f59e0b"
          emissiveIntensity={0.2}
          roughness={0.25}
        />
      </RoundedBox>

      {/* Real interactive HTML terminal overlay */}
      <HtmlTerminalScreen />

      {/* Monitor stand */}
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[0.8, 0.35, 0.7]} />
        <meshStandardMaterial color="#d8cfc4" roughness={0.45} />
      </mesh>

      {/* Computer base */}
      <RoundedBox
        args={[4.0, 0.55, 2.1]}
        radius={0.18}
        smoothness={8}
        position={[0, -0.05, 0.1]}
      >
        <meshStandardMaterial color="#ddd3c6" roughness={0.48} />
      </RoundedBox>

      {/* Disk drives */}
      <mesh position={[-0.75, 0.12, 1.18]}>
        <boxGeometry args={[0.8, 0.12, 0.08]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>

      <mesh position={[0.75, 0.12, 1.18]}>
        <boxGeometry args={[0.8, 0.12, 0.08]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>

      {/* Keyboard */}
      <group position={[0, -0.55, 2.15]}>
        <RoundedBox args={[3.7, 0.18, 1.05]} radius={0.1} smoothness={6}>
          <meshStandardMaterial color="#f0e7dc" roughness={0.5} />
        </RoundedBox>

        {Array.from({ length: 48 }).map((_, index) => {
          const row = Math.floor(index / 12);
          const col = index % 12;

          return (
            <mesh
              key={index}
              position={[-1.55 + col * 0.28, 0.14, -0.3 + row * 0.18]}
            >
              <boxGeometry args={[0.2, 0.08, 0.12]} />
              <meshStandardMaterial color="#111827" roughness={0.6} />
            </mesh>
          );
        })}

        <mesh position={[0, 0.15, 0.48]}>
          <boxGeometry args={[1.4, 0.08, 0.12]} />
          <meshStandardMaterial color="#111827" roughness={0.6} />
        </mesh>
      </group>
    </group>
  );
}