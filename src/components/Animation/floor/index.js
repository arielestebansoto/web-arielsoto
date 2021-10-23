import { PlaneGeometry, MeshPhongMaterial, Mesh } from 'three'  

export const floor = new Mesh(
    new PlaneGeometry( 50, 50),
    new MeshPhongMaterial({color: 0x00ff00 })
)

floor.rotation.x = -  Math.PI  / 2

floor.receiveShadow = true