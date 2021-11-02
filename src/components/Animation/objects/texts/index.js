import { Mesh, MeshPhongMaterial } from 'three'
import { scene } from '../../index'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { FONT_URL, FONT_HEIGHT, FONT_SIZE, FONT_COLOR_PRIMARY, FONT_COLOR_SECONDARY } from '../../variables'

import { texts } from './texts'

const loader = new FontLoader()

const meshPhongMaterialPrimary =  new MeshPhongMaterial({ color: FONT_COLOR_PRIMARY })
const meshPhongMaterialSecondary =  new MeshPhongMaterial({ color: FONT_COLOR_SECONDARY })

export const createText = () => {

    texts.map( text => {
        loader.load(FONT_URL, function ( font ) {
            const textGeo= new TextGeometry(
                text.title,  
                {
                    font: font,
                    size: FONT_SIZE,
                    height: FONT_HEIGHT,
                }
            )
        
            const textMesh = new Mesh(textGeo, [
                    meshPhongMaterialPrimary,
                    meshPhongMaterialSecondary
                ])
                
            scene.add(textMesh)
            console.log(textMesh)
            
            textMesh.position.x = text.position.x
            textMesh.position.z = text.position.z
            textMesh.rotation.y = text.rotation.y
        
            textMesh.receiveShadow = true
            textMesh.castShadow = true
        })

    })

}

