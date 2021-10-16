import { Mesh, MeshPhongMaterial } from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { scene } from '../../../scene'
import helvertiker from 'three/examples/fonts/helvetiker_regular.typeface.json'

const loader = new FontLoader()

export const textSkills = () => {

    loader.load(helvertiker, function ( font ) {

            const text = new TextGeometry(
                'skills',  
                {
                    font: font,
                    size: 6,
                    height: 2,
                }
            )

            const textMesh = new Mesh(text, [
                    new MeshPhongMaterial({ color: 0xad4000 }),
                    new MeshPhongMaterial({ color: 0x5c2301 })
                ])

            scene.add(textMesh)
        })
}