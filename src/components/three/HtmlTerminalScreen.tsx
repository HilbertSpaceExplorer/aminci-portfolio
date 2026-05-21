import { Html } from "@react-three/drei";
import Terminal from "../terminal/Terminal";

export default function HtmlTerminalScreen() {
  return (
    <Html
      transform
      center
      position={[0, 1.55, 0.68]}
      rotation={[0, 0, 0]}
      distanceFactor={1}
      zIndexRange={[1000, 0]}
      className="pointer-events-auto"
    >
      <div
        className="pointer-events-auto h-[260px] w-[420px] overflow-hidden rounded-xl border border-amber-300/30 bg-[#120900] shadow-[0_0_35px_rgba(245,158,11,0.45)]"
        onPointerDown={(event) => event.stopPropagation()}
        onClick={(event) => event.stopPropagation()}
        onWheel={(event) => event.stopPropagation()}
      >
        <Terminal embedded compact />
      </div>
    </Html>
  );
}