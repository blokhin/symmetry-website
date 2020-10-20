import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, softShadows } from "drei";
import * as THREE from "three";
import "../style/AnimationTest.css";

const basicArgsObj = {
  radiusTop: 0.05,
  radiusBottom: 0.05,
  height: 5,
  radialSegments: 60,
  heightSegments: 60,
  openEnded: false,
  thetaStart: 0,
  thetaLength: Math.PI * 2,
};

const basicArgs = [
  basicArgsObj.radiusTop,
  basicArgsObj.radiusBottom,
  basicArgsObj.height,
  basicArgsObj.radialSegments,
  basicArgsObj.heightSegments,
  basicArgsObj.openEnded,
  basicArgsObj.thetaStart,
  basicArgsObj.thetaLength,
];

const axisRotations = {
  x: [Math.PI / 2, Math.PI / 2, 0],
  y: [0, Math.PI / 2, 0],
  z: [0, 0, Math.PI / 2],
  bbrftl: [0, Math.PI / 4, Math.PI / 4],
  tbrfbl: [0, Math.PI / 4, -Math.PI / 4],
  bblftr: [0, -Math.PI / 4, Math.PI / 4],
  tblfbr: [0, -Math.PI / 4, -Math.PI / 4],
  ha1: [Math.PI / 2, 0, 0],
  ha2: [Math.PI / 2, 0, Math.PI / 3],
  ha3: [Math.PI / 2, 0, (2 * Math.PI) / 3],
};

const SixFold = ({ rotation, color, height }) => {
  const edgeLength = 0.6;
  var hexagon = new THREE.Shape();
  hexagon.moveTo(0, edgeLength / 2);
  hexagon.lineTo((-edgeLength * Math.sqrt(3)) / 4, edgeLength / 4);
  hexagon.lineTo((-edgeLength * Math.sqrt(3)) / 4, -edgeLength / 4);
  hexagon.moveTo(0, -edgeLength / 2);
  hexagon.lineTo((edgeLength * Math.sqrt(3)) / 4, -edgeLength / 4);
  hexagon.lineTo((edgeLength * Math.sqrt(3)) / 4, edgeLength / 4);

  var extrudeSettings = {
    steps: 5,
    depth: 0.05,
    bevelEnabled: false,
  };
  return (
    <group rotation={rotation}>
      <mesh castShadow position={[0, height, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <extrudeGeometry attach="geometry" args={[hexagon, extrudeSettings]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </group>
  );
};

const FourFold = ({ rotation, color, height }) => {
  const edgeLength = 0.3;
  var square = new THREE.Shape();
  square.moveTo(edgeLength / 2, edgeLength / 2);
  square.lineTo(edgeLength / 2, edgeLength / 2 - edgeLength);
  square.lineTo(edgeLength / 2 - edgeLength, edgeLength / 2 - edgeLength);
  square.lineTo(edgeLength / 2 - edgeLength, edgeLength / 2);

  var extrudeSettings = {
    steps: 5,
    depth: 0.05,
    bevelEnabled: false,
  };
  return (
    <group rotation={rotation}>
      <mesh castShadow position={[0, height, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <extrudeGeometry attach="geometry" args={[square, extrudeSettings]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </group>
  );
};

const ThreeFold = ({ rotation, color, height }) => {
  const edgeLength = 0.4;
  var triangle = new THREE.Shape();
  triangle.moveTo(0, edgeLength);
  triangle.lineTo((edgeLength * Math.sqrt(3)) / 2, -edgeLength / 2);
  triangle.lineTo((-edgeLength * Math.sqrt(3)) / 2, -edgeLength / 2);

  var extrudeSettings = {
    steps: 5,
    depth: 0.05,
    bevelEnabled: false,
  };
  return (
    <group rotation={rotation}>
      <mesh castShadow position={[0, height, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <extrudeGeometry attach="geometry" args={[triangle, extrudeSettings]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </group>
  );
};

const TwoFold = ({ rotation, color, height }) => {
  var ellipse = new THREE.EllipseCurve(0, 0, 0.2, 0.35, 0, Math.PI * 2);
  var ellipseShape = new THREE.Shape(ellipse.getPoints(50));

  var extrudeSettings = {
    steps: 5,
    depth: 0.05,
    bevelEnabled: false,
  };
  return (
    <group rotation={rotation}>
      <mesh castShadow position={[0, height, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <extrudeGeometry
          attach="geometry"
          args={[ellipseShape, extrudeSettings]}
        />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </group>
  );
};

const AxisLine = ({ position, color, rotation, color2 }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.y += 0.002));
  return (
    <group ref={mesh}>
      <TwoFold
        rotation={rotation}
        color={color2}
        height={basicArgsObj.height / 2.2}
      />
      <TwoFold
        rotation={rotation}
        color={color2}
        height={-basicArgsObj.height / 2.2}
      />
      <mesh castShadow position={position} rotation={rotation}>
        <cylinderBufferGeometry attach="geometry" args={basicArgs} />
        <meshStandardMaterial
          attach="material"
          side="DoubleSide"
          color={color}
        />
      </mesh>
    </group>
  );
};

softShadows();

function Axes() {
  return (
    <div className="AnimationTest">
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 2, 10], fov: 40 }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, -20]} intensity={0.5} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <pointLight position={[-10, -10, 0]} intensity={1.5} />
        <pointLight position={[10, 10, 0]} intensity={1.5} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
        </group>

        <AxisLine
          position={[0, 0, 0]}
          color="gray"
          color2="black"
          rotation={axisRotations.tblfbr}
        />
        <AxisLine
          position={[0, 0, 0]}
          color="gray"
          color2="black"
          rotation={axisRotations.tbrfbl}
        />
        <AxisLine
          position={[0, 0, 0]}
          color="gray"
          color2="black"
          rotation={axisRotations.bblftr}
        />
        <AxisLine
          position={[0, 0, 0]}
          color="gray"
          color2="black"
          rotation={axisRotations.bbrftl}
        />
        <AxisLine
          position={[0, 0, 0]}
          color="gray"
          color2="black"
          rotation={axisRotations.z}
        />
        <AxisLine
          position={[0, 0, 0]}
          color="gray"
          color2="black"
          rotation={axisRotations.x}
        />
        <AxisLine
          position={[0, 0, 0]}
          color="gray"
          color2="black"
          rotation={axisRotations.y}
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Axes;
