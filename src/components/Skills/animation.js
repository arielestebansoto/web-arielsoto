import { Scene, PerspectiveCamera, WebGL1Renderer, Color, Mesh, BoxGeometry, MeshBasicMaterial, Fog, TextureLoader, CameraHelper, OrthographicCamera, CircleGeometry, ConeGeometry, CylinderGeometry, SphereGeometry } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' 

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
// const newCamera = new OrthographicCamera( 5, -5, 5, -5, 3, 10 )
// const helper = new CameraHelper(newCamera)
// scene.add(helper)

const renderer = new WebGL1Renderer()
renderer.setSize(window.innerWidth, window.innerHeight)

const geometry = new BoxGeometry(2, 2, 2, 3, 4, 5)
const material = new MeshBasicMaterial({color: 'green', wireframe: true})
const cube = new Mesh(geometry, material)
scene.add(cube)

const circle = new Mesh( new CircleGeometry(2,32, 0, Math.PI), material)
scene.add(circle)
circle.position.x = 5

const cone = new Mesh( new ConeGeometry(1, 3, 32, 5, true, 0, Math.PI ), material)
scene.add(cone)
cone.position.x = -5

const cilinder = new Mesh( new CylinderGeometry(2, .5), material)
scene.add(cilinder)
cilinder.position.y = 5

const sphere = new Mesh( new SphereGeometry( 1, 32, 32, 0, Math.PI, 0, Math.PI / 2), material)
scene.add(sphere)
sphere.position.y = -5

camera.position.z = 10

const controls = new OrbitControls(camera, renderer.domElement)

controls.minDistance = 3
controls.maxDistance = 10
// controls.enableZoom = false
// controls.enableRotate = false

controls.enableDamping = true
controls.dampingFactor = .5
// controls.maxPolarAngle = Math.PI / 10

controls.screenSpacePanning = true

// let i = 0

window.addEventListener('resize', redimencionar) 

function redimencionar() {
    console.log('redimencionando')
    camera.aspect = window.innerWidth/window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.render(scene, camera)
}

export const animate = () => {
    requestAnimationFrame(animate)

    scene.traverse( object => {
        if (object.isMesh) {
            object.rotation.x += 0.01
            object.rotation.y += 0.01
        }
    })
    // camera.lookAt(newCamera.position)
    // camera.position.x = Math.cos(i) * 30
    // camera.position.z = Math.sin(i) * 30

    // i += 0.01
    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01
    
    renderer.render(scene, camera)
}

export const animationElement = renderer.domElement