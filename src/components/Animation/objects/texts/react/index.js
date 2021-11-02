import { Mesh, MeshPhongMaterial } from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'

import { FONT_URL, FONT_HEIGHT, FONT_SIZE, FONT_COLOR_PRIMARY, FONT_COLOR_SECONDARY } from '../../../variables'
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
                    new MeshPhongMaterial({ color: FONT_COLOR_PRIMARY }),
                    new MeshPhongMaterial({ color: FONT_COLOR_SECONDARY })
                ])
            textMesh.position.x = 5
            textMesh.position.z = 1

            textMesh.receiveShadow = true
            textMesh.castShadow = true
            scene.add(textMesh)
        })
}