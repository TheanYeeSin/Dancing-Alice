/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from "react";
import aliceScene from "../assets/Alice.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";

const Alice = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(aliceScene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Animation"].play();
  }, [actions]);

  return (
    <a.group ref={group} {...props}>
      <a.group name="Sketchfab_Scene">
        <a.group
          name="Sketchfab_model"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.064}
        >
          <a.group
            name="9d4c0c3fabbb455089f416014e7a5405fbx"
            rotation={[-Math.PI, 0, 0]}
            scale={0.01}
          >
            <a.group name="Object_2">
              <a.group name="RootNode">
                <a.group name="Mouth_open" />
                <a.group
                  name="Ring"
                  position={[0, 0, 334.539]}
                  rotation={[Math.PI / 2, 0, 0]}
                />
                <a.group name="EyeBrow001" />
                <a.group name="Hair" />
                <a.group name="_vacuum" scale={100} />
                <a.group name="Eye1" />
                <a.group name="Cheek" />
                <a.group name="HairHighLight" />
                <a.group name="EyeBrow" />
                <a.group name="Body" />
                <a.group
                  name="Mouth_close"
                  rotation={[2.634, -0.076, -0.006]}
                />
                <a.group name="Eye2" />
                <a.group name="Head" />
                <a.group name="root">
                  <a.group name="Object_18">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_20"
                      geometry={nodes.Object_20.geometry}
                      material={materials.vertexColor_Depth}
                      skeleton={nodes.Object_20.skeleton}
                    />
                    <skinnedMesh
                      name="Object_22"
                      geometry={nodes.Object_22.geometry}
                      material={materials.vertexColor}
                      skeleton={nodes.Object_22.skeleton}
                    />
                    <skinnedMesh
                      name="Object_24"
                      geometry={nodes.Object_24.geometry}
                      material={materials.vertexColor}
                      skeleton={nodes.Object_24.skeleton}
                    />
                    <skinnedMesh
                      name="Object_26"
                      geometry={nodes.Object_26.geometry}
                      material={materials.vertexColor}
                      skeleton={nodes.Object_26.skeleton}
                    />
                    <skinnedMesh
                      name="Object_27"
                      geometry={nodes.Object_27.geometry}
                      material={materials.Outline}
                      skeleton={nodes.Object_27.skeleton}
                    />
                    <skinnedMesh
                      name="Object_28"
                      geometry={nodes.Object_28.geometry}
                      material={materials.vertexColor_Depth}
                      skeleton={nodes.Object_28.skeleton}
                    />
                    <skinnedMesh
                      name="Object_29"
                      geometry={nodes.Object_29.geometry}
                      material={materials.vertexColor}
                      skeleton={nodes.Object_29.skeleton}
                    />
                    <skinnedMesh
                      name="Object_31"
                      geometry={nodes.Object_31.geometry}
                      material={materials.vertexColor}
                      skeleton={nodes.Object_31.skeleton}
                    />
                    <skinnedMesh
                      name="Object_32"
                      geometry={nodes.Object_32.geometry}
                      material={materials.vertexColor_Depth}
                      skeleton={nodes.Object_32.skeleton}
                    />
                    <skinnedMesh
                      name="Object_34"
                      geometry={nodes.Object_34.geometry}
                      material={materials.vertexColor}
                      skeleton={nodes.Object_34.skeleton}
                    />
                    <skinnedMesh
                      name="Object_35"
                      geometry={nodes.Object_35.geometry}
                      material={materials.Outline}
                      skeleton={nodes.Object_35.skeleton}
                    />
                    <skinnedMesh
                      name="Object_37"
                      geometry={nodes.Object_37.geometry}
                      material={materials.vertexColor_Depth}
                      skeleton={nodes.Object_37.skeleton}
                    />
                    <skinnedMesh
                      name="Object_38"
                      geometry={nodes.Object_38.geometry}
                      material={materials.vertexColor_Depth}
                      skeleton={nodes.Object_38.skeleton}
                    />
                    <skinnedMesh
                      name="Object_40"
                      geometry={nodes.Object_40.geometry}
                      material={materials.vertexColor}
                      skeleton={nodes.Object_40.skeleton}
                    />
                    <skinnedMesh
                      name="Object_41"
                      geometry={nodes.Object_41.geometry}
                      material={materials.Outline}
                      skeleton={nodes.Object_41.skeleton}
                    />
                    <a.group
                      name="Object_21"
                      position={[0, 0, 334.539]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <a.group name="Object_23" />
                    <a.group name="Object_25" />
                    <a.group name="Object_30" />
                    <a.group name="Object_33" />
                    <a.group
                      name="Object_36"
                      rotation={[2.634, -0.076, -0.006]}
                    />
                    <a.group name="Object_39" />
                  </a.group>
                </a.group>
                <a.group name="root__vacuum">
                  <a.group name="Object_133">
                    <primitive object={nodes._rootJoint_1} />
                    <skinnedMesh
                      name="Object_136"
                      geometry={nodes.Object_136.geometry}
                      material={materials.vertexColor}
                      skeleton={nodes.Object_136.skeleton}
                    />
                    <skinnedMesh
                      name="Object_137"
                      geometry={nodes.Object_137.geometry}
                      material={materials.Outline}
                      skeleton={nodes.Object_137.skeleton}
                    />
                    <a.group name="Object_135" scale={100} />
                  </a.group>
                </a.group>
              </a.group>
            </a.group>
          </a.group>
        </a.group>
      </a.group>
    </a.group>
  );
};

export default Alice;
