import { Scene, PerspectiveCamera, WebGL1Renderer, Color, Mesh, BoxGeometry, MeshBasicMaterial, Fog, TextureLoader, CameraHelper, OrthographicCamera } from "three";

const scene = new Scene()
// scene.background = new Color(0x2a3b4c)
// scene.fog = new Fog(0xff00ff, 0.1, 8)
// const loader = new TextureLoader()

const camera = new PerspectiveCamera(
    75, 
    window.innerWidth/window.innerHeight,
    0.1,
    2000
    )
const newCamera = new OrthographicCamera(
    5,
    -5,
    5,
    -5,
    3,
    10
    )
const helper = new CameraHelper(newCamera)
scene.add(helper)

const renderer = new WebGL1Renderer()
renderer.setSize(window.innerWidth, window.innerHeight)

const geometry = new BoxGeometry()
const material = new MeshBasicMaterial({color: 'green', wireframe: true})
const cube = new Mesh(geometry, material)
cube.position.z = -3.2
scene.add(cube)

// camera.position.z = 3.2

let i = 0
export const animate = () => {
    requestAnimationFrame(animate)

    camera.lookAt(newCamera.position)
    camera.position.x = Math.cos(i) * 30
    camera.position.z = Math.sin(i) * 30

    i += 0.01
    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01
    
    renderer.render(scene, camera)
}

export const animationElement = renderer.domElement