import { PerspectiveCamera} from 'three'
const fov = 75
const aspect = window.innerWidth / window.innerHeight
const near = 0.1
const far = 50

export const camera = new PerspectiveCamera(fov, aspect, near, far)

camera.position.set(0, 1, 5)
camera.rotateX = Math.PI