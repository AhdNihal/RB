import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { TextureLoader, MeshStandardMaterial } from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Globe() {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, "gl.png");
  const [fadeIn, setFadeIn] = useState(0);

  useFrame(() => {
    if (fadeIn < 1) {
      setFadeIn((prev) => Math.min(prev + 0.035, 1.3));
    }

    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0045;
      // meshRef.current.rotation.x -= 0.0005;
      const scale = 0.5 + 0.7 * fadeIn;
      meshRef.current.scale.set(scale, scale, scale);
      meshRef.current.castShadow = true;
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <sphereGeometry args={[2, 64, 128]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function GlobeWrapper() {
  return (
    <div className="w-full h-[90vh]">
      <Canvas shadows>
        <ambientLight color={"0000ff"} intensity={0.7} />
        <spotLight
          position={[0, 0, -5]}
          intensity={1.7}
          color={"#ffffff"}
          angle={0.5}
          penumbra={1}
          castShadow
        />
        <directionalLight
          position={[2, 4, -1]}
          color={"#ffffff"} // Red light to influence shadow
          intensity={1.5}
        />
        {/* <pointLight position={[10, -10, -10]} /> */}
        <Globe />
        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}
