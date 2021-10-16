import { Scene, GridHelper } from 'three'

import { floor } from '../floor'

export const scene = new Scene()
scene.add(new GridHelper(50, 50))
scene.add(floor)
