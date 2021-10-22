import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls' 
import { camera } from '../camera'
import { renderer } from '../renderer'
import { scene } from '../scene'

export const pointerLockControls = new PointerLockControls(camera, renderer.domElement )

let xdir = 0, zdir = 0

document.addEventListener('keydown', e => {
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
})
document.addEventListener('keyup', e => {
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
    })
    
export const movePositionCamera = (e) => {
    switch(e.target.id) {
        case 'control-1':
            xdir = -1
            zdir = 1
            break
        case 'control-2':
            zdir = 1
            break
        case 'control-3':
            xdir = 1
            zdir = 1
            break
        case 'control-4':
            xdir = -1
            break
        case 'control-5':
            return
            break
        case 'control-6':
            xdir = 1
            break
        case 'control-7':
            xdir = -1
            zdir = -1
            break
        case 'control-8':
            zdir = -1
            break
        case 'control-9':
            xdir = 1
            zdir = -1
            break
        default: return
    }          
}
export const stopPositionCamera = (e) => {
    switch(e.target.id) {
        case 'control-1':
            xdir = 0
            zdir = 0
            break
        case 'control-2':
            zdir = 0
            break
        case 'control-3':
            xdir = 0
            zdir = 0
            break
        case 'control-4':
            xdir = 0
            break
        case 'control-5':
            return
            break
        case 'control-6':
            xdir = 0
            break
        case 'control-7':
            xdir = 0
            zdir = 0
            break
        case 'control-8':
            zdir = 0
            break
        case 'control-9':
            xdir = 0
            zdir = 0
            break
        default: return
    }
}
let timeI = Date.now()
let vel = 0.005

animate()

function animate() {   
    
    let timeF = Date.now()
    
    let delta = ( timeF - timeI ) / 1000
    
    let xDir = xdir * vel * delta
    let zDir = zdir * vel * delta
    
    pointerLockControls.moveRight(xDir)
    pointerLockControls.moveForward(zDir)
    
    renderer.render(scene, camera);

  requestAnimationFrame(animate);
  }
  
  export const playPointerLockControls = (e) => {
        const animation = document.querySelector('#animation')
        const coord = animation.getBoundingClientRect()
        const positionY = coord.top + scrollY
        window.scrollTo(0, positionY )  

        pointerLockControls.lock()      
  }

  function isScrolling(e) {
    if(['Spave', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) > -1) {
        e.preventDefault()
    }
  }
  
  pointerLockControls.addEventListener('lock', () => {
      window.addEventListener('keydown', isScrolling )    
  })

    pointerLockControls.addEventListener('unlock', () => {
     window.removeEventListener('keydown', isScrolling)
  })
