import { Scene, PerspectiveCamera, WebGL1Renderer, Color, Mesh, BoxGeometry, MeshBasicMaterial } from "three";

const scene = new Scene()
scene.background = new Color('#0ff')
const camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight)
const renderer = new WebGL1Renderer()
renderer.setSize(window.innerWidth, window.innerHeight)

const geometry = new BoxGeometry()
const material = new MeshBasicMaterial({color: 'green', wireframe: true})
const cube = new Mesh(geometry, material)

scene.add(cube)

camera.position.z = 5

export const animate = () => {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    
    renderer.render(scene, camera)
}

export const animationElement = renderer.domElement