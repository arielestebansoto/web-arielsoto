import { Mesh, MeshPhongMaterial } from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { scene } from '../../../scene'

const loader = new FontLoader()

export const textSkills = () => {

    loader.load('https://dl.dropboxusercontent.com/s/wjnohcz26odo5ak/Azonix_Regular.json?dl=0', function ( font ) {

            const text = new TextGeometry(
                'skills',  
                {
                    font: font,
                    size: 2,
                    height: .5,
                }
            )

            const textMesh = new Mesh(text, [
                    new MeshPhongMaterial({ color: 0xad4000 }),
                    new MeshPhongMaterial({ color: 0x5c2301 })
                ])

            scene.add(textMesh)
        })
}