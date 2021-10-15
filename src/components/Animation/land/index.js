import { PlaneGeometry, MeshBasicMaterial, Mesh } from 'three'  

export const land = new Mesh(
    new PlaneGeometry( 1, 1),
    new MeshBasicMaterial({color: 0x00ff00 })
)
