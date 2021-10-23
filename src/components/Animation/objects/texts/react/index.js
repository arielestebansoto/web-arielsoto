import { Mesh, MeshPhongMaterial } from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { scene } from '../../../scene'

import { FONT_URL, FONT_HEIGHT, FONT_SIZE } from '../../../variables'
const loader = new FontLoader()

export const textReact = () => {

    loader.load(FONT_URL, function ( font ) {

            const text = new TextGeometry(
                'react',  
                {
                    font: font,
                    size: FONT_SIZE,
                    height: FONT_HEIGHT,
                }
            )

            const textMesh = new Mesh(text, [
                    new MeshPhongMaterial({ color: 0xad4000 }),
                    new MeshPhongMaterial({ color: 0x5c2301 })
                ])
            console.log(textMesh)
            textMesh.position.x = 5
            textMesh.position.y = 1
            textMesh.position.z = 1
            scene.add(textMesh)
        })
}