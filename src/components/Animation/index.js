import { WebGLRenderer, Scene, GridHelper, Color, PerspectiveCamera, Mesh, MeshPhongMaterial, PlaneGeometry, DirectionalLight } from 'three'
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls' 
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'

import { FLOOR_COLOR, FLOOR_SIZE_X, FLOOR_SIZE_Y, FONT_URL, FONT_HEIGHT, FONT_SIZE, FONT_COLOR_PRIMARY, FONT_COLOR_SECONDARY, SCENE_BACKGROUND_COLOR } from './variables'


/* RENDERER */
const renderer = new WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)

renderer.shadowMap.enabled = true

window.addEventListener('resize', animationResize)

function animationResize () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    
    renderer.render(scene, camera)
}

/* CAMERA */
const fov = 75
const aspect = window.innerWidth / window.innerHeight
const near = 0.1
const far = 50

const camera = new PerspectiveCamera(fov, aspect, near, far)

camera.position.set(0, 1, 5)
camera.rotateX = Math.PI

/* SCENE */


const scene = new Scene()

scene.background = new Color(SCENE_BACKGROUND_COLOR) 
// scene.add(new GridHelper(50, 50))

/* POINTER LOCK CONTROLS */
const pointerLockControls = new PointerLockControls(camera, renderer.domElement )

let xdir = 0, zdir = 0
 
export const scrollAnimation = () => {
    const animation = document.querySelector('#animation')
    const coord = animation.getBoundingClientRect()
    const positionY = coord.top + scrollY
    window.scrollTo(0, positionY )  
}
export const playPointerLockControls = () => {
    scrollAnimation()
    pointerLockControls.lock()      
}

  function isScrolling(e) {
    if(['Spave', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) > -1) {
        e.preventDefault()
    }
  }
  
function pcKeyDown(e) {
    switch(e.code) {
        case 'KeyA':
            xdir = -1
        break
        case 'KeyW':
            zdir = 1
        break
        case 'KeyD':
            xdir = 1
        break
        case 'KeyS':
            zdir = -1
        break
        default: return
    }
}
function pcKeyUp(e) {
    switch(e.code) {
        case 'KeyA':
            xdir = 0
            break
        case 'KeyW':
            zdir = 0
            break
        case 'KeyD':
                xdir = 0
        case 'KeyS':
            zdir = 0
        break
        default: return
    }
}
pointerLockControls.addEventListener('lock', () => {
    window.addEventListener('keydown', isScrolling )
    document.addEventListener('keydown', pcKeyDown)    
    document.addEventListener('keyup', pcKeyUp)    
  })

pointerLockControls.addEventListener('unlock', () => {
    window.removeEventListener('keydown', isScrolling)
    document.removeEventListener('keydown', pcKeyDown)    
    document.removeEventListener('keyup', pcKeyUp)    
})

/* DIRECTIONAL LIGHT */
const directionalLight = new DirectionalLight(0xffffff, 1)
directionalLight.position.x = 10
directionalLight.position.y = 10
directionalLight.position.z = 10
directionalLight.castShadow = true
scene.add(directionalLight)

/* OBJECTS */
/* FLOOR */

const floor = new Mesh(
    new PlaneGeometry( FLOOR_SIZE_X, FLOOR_SIZE_Y),
    new MeshPhongMaterial({color: FLOOR_COLOR })
)
scene.add(floor)

floor.rotation.x = -  Math.PI  / 2
floor.receiveShadow = true

/* TEXTS */
const loader = new FontLoader()

loader.load(FONT_URL, function ( font ) {
        const textGeo= new TextGeometry(
            'skills',  
            {
                font: font,
                size: FONT_SIZE,
                height: FONT_HEIGHT,
            }
        )

        const text = new Mesh(textGeo, [
                new MeshPhongMaterial({ color: FONT_COLOR_PRIMARY }),
                new MeshPhongMaterial({ color: FONT_COLOR_SECONDARY })
            ])

        text.position.x = -5
        text.position.z = -1

        text.receiveShadow = true
        text.castShadow = true
        scene.add(text)
    })

let rot = 0

document.addEventListener('keydown', e => {
    switch (e.code) {
        case 'KeyQ':
            rot = 1
        break
        case 'KeyE':
            rot = -1
        break
        default: return
    }
})
document.addEventListener('keyup', e => {
    switch (e.code) {
        case 'KeyQ':
            rot = 0
        break
        case 'KeyE':
            rot = 0
        break
        default: return
    }
})

/* ANIMATION */
// let timeI = Date.now()
/* without time Variables */
let delta = 10

let vel = 0.005


function animate() {   
    // let timeF = Date.now()
    // let delta = ( timeF - timeI ) / 1000

    let xDir = xdir * vel * delta
    let zDir = zdir * vel * delta
    
    pointerLockControls.moveRight(xDir)
    pointerLockControls.moveForward(zDir)
    
    camera.rotateY(rot * vel * delta * 0.5 ) 
    
    renderer.render(scene, camera);
    
    requestAnimationFrame(animate);
}
animate()
export const animation = renderer.domElement
