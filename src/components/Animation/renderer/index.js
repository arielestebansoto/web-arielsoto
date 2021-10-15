import { WebGLRenderer } from 'three'
import { scene } from '../scene'
import { camera } from '../camera'

export const renderer = new WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)

window.addEventListener('resize', animationResize)

function animationResize () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    
    renderer.render(scene, camera)
}

let timeI = Date.now()
let vel = 10

animate()

function animate() {   

  renderer.render(scene, camera);

  // let timeF = Date.now()
  
  // let delta = ( timeF - timeI ) / 1000
  
  // let xDis = xdir * vel * delta
  // let zDis = zdir * vel * delta

  // pointerLockControls.moveRight(xDis)
  // pointerLockControls.moveForward(zDis)
  
  requestAnimationFrame(animate);
  }
  
