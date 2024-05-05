import { Canvas } from "@react-three/fiber";
import { Box, FirstPersonControls } from '@react-three/drei'
function ThreeScene() {
    return (<div id="canvas-container">
        <Canvas>
            <>
                <FirstPersonControls
                    activeLook
                    enabled
                    heightCoef={1}
                    heightMax={1}
                    heightMin={0}
                    lookSpeed={0.05}
                    lookVertical
                    movementSpeed={1}
                    verticalMax={3.141592653589793}
                    verticalMin={0}
                />
                <Box>
                    <meshBasicMaterial wireframe />
                </Box>
            </>
        </Canvas>
    </div>);
}

export default ThreeScene;