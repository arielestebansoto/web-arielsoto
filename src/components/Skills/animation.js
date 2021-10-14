import { Scene, PerspectiveCamera, WebGL1Renderer, Color, Mesh, BoxGeometry, MeshBasicMaterial, MeshLambertMaterial,GridHelper, Fog, HemisphereLight } from "three";
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls' 

const scene = new Scene()
scene.background = new Color(0xffffff)
scene.add(new GridHelper(10000, 1000))
scene.fog = new Fog(0xffffff, 0, 500)

const camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000 )
camera.position.y = 10

const renderer = new WebGL1Renderer({antialis: true})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)

const geometry = new BoxGeometry(10, 10, 10)
const material = new MeshLambertMaterial({color: 0x0000ff})
const cube = new Mesh(geometry, material)
cube.position.z = -50

scene.add(cube)
scene.add(new HemisphereLight(0xffffff))

export const pControl = new PointerLockControls(camera, renderer.domElement)

export const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}


export const animationElement = renderer.domElement