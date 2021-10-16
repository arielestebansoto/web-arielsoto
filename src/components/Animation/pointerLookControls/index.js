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
  