import { WebGLRenderer } from 'three'
import { scene } from '../scene'
import { camera } from '../camera'

export const renderer = new WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)

renderer.shadowMap.enabled = true

window.addEventListener('resize', animationResize)
function animationResize () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    
    renderer.render(scene, camera)
}


