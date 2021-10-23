import { Mesh, MeshPhongMaterial } from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { scene } from '../../../scene'

import { FONT_URL, FONT_HEIGHT, FONT_SIZE } from '../../../variables'
const loader = new FontLoader()

export const textSkills = () => {

    loader.load(FONT_URL, function ( font ) {

            const text = new TextGeometry(
                'skills',  
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

            textMesh.position.x = -5
            textMesh.position.z = -1

            textMesh.receiveShadow = true
            textMesh.castShadow = true
            scene.add(textMesh)
        })
}