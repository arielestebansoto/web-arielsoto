import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls' 
import { camera } from '../camera'
import { renderer } from '../renderer'

export const pointerLockControls = new PointerLockControls(camera, renderer.domElement )

// let xdir = 0, zdir = 0

// document.addEventListener('keydown', e => {
//     switch(e.code) {
//         case 'KeyA':
//             xdir = -1
//         break
//         case 'KeyW':
//             zdir = 1
//         break
//         case 'KeyD':
//             xdir = 1
//         case 'KeyS':
//             zdir = -1
//         break
//         default: return
//     }
// })
// document.addEventListener('keyup', e => {
//     switch(e.code) {
//         case 'KeyA':
//             xdir = 0
//         break
//         case 'KeyW':
//             zdir = 0
//         break
//         case 'KeyD':
//             xdir = 0
//         case 'KeyS':
//             zdir = 0
//         break
//         default: return
//     }
// })
