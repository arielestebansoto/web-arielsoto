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

let xdir = 0
let zdir = 0

document.addEventListener('keydown', e => {
    switch (e.keyCode) {
        case 65:
            xdir -= 1
            break
        case 87:
            zdir += 1
            break
        case 68:
            xdir += 1
            break
        case 83:
            zdir -= 1
            break
    }
} )

document.addEventListener('keyup', e => {
    switch (e.keyCode) {
        case 65:
            xdir = 0
            break
        case 87:
            zdir = 0
            break
        case 68:
            xdir = 0
            break
        case 83:
            zdir = 0
            break
    }    
} )

let tiempoI, tiempoF, vel, delta

tiempoI = Date.now()
vel = 25

export const animate = () => {
    requestAnimationFrame(animate)

    if (pControl.isLocked) {
        tiempoF = Date.now()
    
        delta = (tiempoF - tiempoI) / 1000
    
        let xDis = xdir * vel * delta
        let zDis = zdir * vel * delta
    
        pControl.moveRight(xDis)
        pControl.moveForward(zDis)
    
        tiempoI = tiempoF
    }
    renderer.render(scene, camera)
}


export const animationElement = renderer.domElement