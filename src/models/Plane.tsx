import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";
import { Mesh } from "three";

interface PlaneProps {
  isRotating: boolean;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
}

const Plane: React.FC<PlaneProps> = ({
  isRotating,
  position,
  rotation,
  scale,
}) => {
  const ref = useRef<Mesh>(null!);;
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh ref={ref} position={position} rotation={rotation} scale={scale}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;