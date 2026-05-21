import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type CameraMode = "desk" | "screen";

type CameraRigProps = {
  mode: CameraMode;
};

const deskPosition = new THREE.Vector3(0, 2.2, 7.4);
const screenPosition = new THREE.Vector3(0, 1.65, 2.15);

const deskTarget = new THREE.Vector3(0, 0.25, 0.3);
const screenTarget = new THREE.Vector3(0, 1.55, 0.65);

export default function CameraRig({ mode }: CameraRigProps) {
  const { camera } = useThree();

  useFrame(() => {
    const desiredPosition = mode === "desk" ? deskPosition : screenPosition;
    const desiredTarget = mode === "desk" ? deskTarget : screenTarget;

    camera.position.lerp(desiredPosition, 0.055);
    camera.lookAt(desiredTarget);
  });

  return null;
}