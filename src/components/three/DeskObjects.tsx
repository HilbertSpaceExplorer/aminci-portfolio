import { Float, RoundedBox } from "@react-three/drei";

function Desk() {
  return (
    <group>
      <RoundedBox args={[8, 0.25, 4.6]} radius={0.08} smoothness={4} position={[0, -0.85, 0.8]}>
        <meshStandardMaterial color="#6b3f25" roughness={0.55} />
      </RoundedBox>

      <mesh position={[-3.5, -2.0, -1.0]}>
        <boxGeometry args={[0.18, 2.2, 0.18]} />
        <meshStandardMaterial color="#3f2415" />
      </mesh>

      <mesh position={[3.5, -2.0, -1.0]}>
        <boxGeometry args={[0.18, 2.2, 0.18]} />
        <meshStandardMaterial color="#3f2415" />
      </mesh>

      <mesh position={[-3.5, -2.0, 2.3]}>
        <boxGeometry args={[0.18, 2.2, 0.18]} />
        <meshStandardMaterial color="#3f2415" />
      </mesh>

      <mesh position={[3.5, -2.0, 2.3]}>
        <boxGeometry args={[0.18, 2.2, 0.18]} />
        <meshStandardMaterial color="#3f2415" />
      </mesh>
    </group>
  );
}

function Plant() {
  return (
    <group position={[2.8, -0.45, 0.2]}>
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.28, 0.22, 0.45, 32]} />
        <meshStandardMaterial color="#d6a35d" roughness={0.6} />
      </mesh>

      {Array.from({ length: 12 }).map((_, index) => {
        const angle = (index / 12) * Math.PI * 2;
        return (
          <mesh
            key={index}
            position={[Math.cos(angle) * 0.22, 0.55, Math.sin(angle) * 0.22]}
            rotation={[0.8, angle, 0.4]}
          >
            <coneGeometry args={[0.08, 0.55, 8]} />
            <meshStandardMaterial color="#22c55e" roughness={0.5} />
          </mesh>
        );
      })}
    </group>
  );
}

function RubiksCube() {
  const colors = ["#ef4444", "#22c55e", "#3b82f6", "#facc15", "#f97316", "#ffffff"];

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.15}>
      <group position={[-2.8, -0.45, 0.4]} rotation={[0.15, 0.6, 0]}>
        <boxGeometry />
        <mesh>
          <boxGeometry args={[0.55, 0.55, 0.55]} />
          <meshStandardMaterial color={colors[0]} roughness={0.35} />
        </mesh>
      </group>
    </Float>
  );
}

function Books() {
  return (
    <group position={[-2.4, -0.58, -0.8]} rotation={[0, 0.25, 0]}>
      {["#0f766e", "#1d4ed8", "#7c2d12"].map((color, index) => (
        <mesh key={color} position={[0, index * 0.09, 0]}>
          <boxGeometry args={[1.0, 0.08, 0.65]} />
          <meshStandardMaterial color={color} roughness={0.45} />
        </mesh>
      ))}
    </group>
  );
}

function Mug() {
  return (
    <group position={[2.1, -0.45, 1.4]}>
      <mesh>
        <cylinderGeometry args={[0.22, 0.18, 0.45, 32]} />
        <meshStandardMaterial color="#0f172a" roughness={0.4} />
      </mesh>

      <mesh position={[0.26, 0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.12, 0.025, 12, 24]} />
        <meshStandardMaterial color="#0f172a" roughness={0.4} />
      </mesh>
    </group>
  );
}

function ActionFigurePlaceholder() {
  return (
    <group position={[-3.25, -0.45, 1.35]}>
      <mesh position={[0, 0.55, 0]}>
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshStandardMaterial color="#e5e7eb" />
      </mesh>

      <mesh position={[0, 0.25, 0]}>
        <capsuleGeometry args={[0.12, 0.35, 8, 16]} />
        <meshStandardMaterial color="#38bdf8" />
      </mesh>

      <mesh position={[-0.12, -0.05, 0]}>
        <capsuleGeometry args={[0.04, 0.35, 8, 16]} />
        <meshStandardMaterial color="#111827" />
      </mesh>

      <mesh position={[0.12, -0.05, 0]}>
        <capsuleGeometry args={[0.04, 0.35, 8, 16]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
    </group>
  );
}

export default function DeskObjects() {
  return (
    <>
      <Desk />
      <Plant />
      <RubiksCube />
      <Books />
      <Mug />
      <ActionFigurePlaceholder />
    </>
  );
}