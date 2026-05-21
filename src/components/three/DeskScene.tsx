import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import RetroComputerModel from "./RetroComputerModel";
import DeskObjects from "./DeskObjects";
import CameraRig from "./CameraRig";

type CameraMode = "desk" | "screen";

export default function DeskScene() {
  const [mode, setMode] = useState<CameraMode>("desk");

  return (
    <div className="relative h-[680px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#140b08] shadow-2xl shadow-black/40">
      <Canvas camera={{ position: [0, 2.2, 7.4], fov: 38 }}>
        <Suspense fallback={null}>
          <color attach="background" args={["#140b08"]} />

          <ambientLight intensity={0.55} />
          <directionalLight position={[4, 5, 4]} intensity={1.8} />
          <pointLight position={[-3, 3, 3]} intensity={2.2} color="#f59e0b" />
          <pointLight position={[3, 2, 3]} intensity={1.4} color="#22d3ee" />

          <group rotation={[0, -0.12, 0]}>
            <RetroComputerModel />
            <DeskObjects />
          </group>

          <Environment preset="warehouse" />
          <CameraRig mode={mode} />

        <OrbitControls
        enabled={mode === "desk"}
        enablePan={false}
        enableZoom={false}
        enableRotate={mode === "desk"}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.1}
        />
        </Suspense>
      </Canvas>

      <div className="absolute left-4 top-4 z-20 flex gap-2">
        <button
          onClick={() => setMode("desk")}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            mode === "desk"
              ? "bg-amber-300 text-black"
              : "bg-black/50 text-amber-200 hover:bg-black/70"
          }`}
        >
          Desk view
        </button>

        <button
          onClick={() => setMode("screen")}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            mode === "screen"
              ? "bg-amber-300 text-black"
              : "bg-black/50 text-amber-200 hover:bg-black/70"
          }`}
        >
          Terminal view
        </button>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}