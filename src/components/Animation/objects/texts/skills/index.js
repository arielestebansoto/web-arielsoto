import { Mesh, MeshPhongMaterial } from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { scene } from '../../../scene'

const loader = new FontLoader()

// export const text = loader.load('', function ( font ) {
//     console.log('creating')
//     const textSkills = new TextGeometry(
//         'skills',  
//         {
//             font: font,
//             size: 6,
//             height: 2,
//         }
//     )
//     const textMesh = new Mesh(textSkills, [
//         new MeshPhongMaterial({ color: 0xad4000 }),
//         new MeshPhongMaterial({ color: 0x5c2301 })
//     ])
//     scene.add(textMesh)
// })