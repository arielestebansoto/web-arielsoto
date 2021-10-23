import { PlaneGeometry, MeshPhongMaterial, Mesh } from 'three'  
import { scene } from '../scene'
import { FLOOR_COLOR, FLOOR_SIZE_X, FLOOR_SIZE_Y } from '../variables'

export const floor = new Mesh(
    new PlaneGeometry( FLOOR_SIZE_X, FLOOR_SIZE_Y),
    new MeshPhongMaterial({color: FLOOR_COLOR })
)
scene.add(floor)

floor.rotation.x = -  Math.PI  / 2
floor.receiveShadow = true