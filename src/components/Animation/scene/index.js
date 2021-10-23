import { Scene, GridHelper } from 'three'
import { Color } from 'three' 

import { SCENE_BACKGROUND_COLOR } from '../variables'

export const scene = new Scene()

scene.background = new Color(SCENE_BACKGROUND_COLOR) 
// scene.add(new GridHelper(50, 50))
