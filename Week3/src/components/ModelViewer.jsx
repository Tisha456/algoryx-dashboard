import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function EarthModel() {
  const { scene } = useGLTF("/models/Earth.glb");

  return (
    <primitive
      object={scene}
      scale={1}
      position={[0, 0, 0]}
    />
  );
}

function ModelViewer() {
  return (
    <div className="h-[500px] w-full overflow-hidden rounded-3xl border border-green-400/20 bg-slate-950">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={2.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={4}
        />

        <Suspense fallback={null}>
          <EarthModel />
        </Suspense>

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}

export default ModelViewer;