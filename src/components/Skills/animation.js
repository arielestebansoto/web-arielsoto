import { Scene, PerspectiveCamera, WebGL1Renderer, Color, Mesh, BoxGeometry, MeshBasicMaterial, Fog, TextureLoader, CameraHelper, OrthographicCamera, CircleGeometry, ConeGeometry, CylinderGeometry, SphereGeometry, GridHelper } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' 
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { image } from "./image";

const scene = new Scene()
const camera = new PerspectiveCamera(
    75, 
    window.innerWidth/window.innerHeight,
    0.1,
    2000
    )
    
const renderer = new WebGL1Renderer()
renderer.setSize(window.innerWidth, window.innerHeight)
window.addEventListener('resize', redimencionar) 
    
const geometry = new BoxGeometry(2, 2, 2, 3, 4, 5)
const material = new MeshBasicMaterial(
    // {color: 'green', wireframe: true}
    )
    const cube = new Mesh(geometry, material)
    scene.add(cube)
    scene.add(new GridHelper(10, 20))
    
    camera.position.set(1, 1, 5)
    // camera.position.z = 10
    
    const oControl = new OrbitControls(camera, renderer.domElement)
    const tControl = new TransformControls(camera, renderer.domElement)
    
    tControl.addEventListener('mouseDown', e => {
        oControl.enabled = false
    })
    tControl.addEventListener('mouseUp', e => {
        oControl.enabled = true
    })

    tControl.attach(cube)
    scene.add(tControl)
    tControl.setMode('translate')
    // tControl.showX = false
    // tControl.showY = false
    // tControl.showZ = false
    // tControl.setMode('rotate')
    // tControl.setMode('scale')

    const dContrl = new DragControls(camera, domElement)
    
    
    function redimencionar() {
    camera.aspect = window.innerWidth/window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.render(scene, camera)
}

const loader = new TextureLoader()
loader.load(image, 
(texture) => material.map = texture )

export const animate = () => {
    requestAnimationFrame(animate)
    scene.traverse( object => {
        if (object.isMesh) {
            // object.rotation.x += 0.01
            // object.rotation.y += 0.01
        }
    })
    renderer.render(scene, camera)
}

export const animationElement = renderer.domElement