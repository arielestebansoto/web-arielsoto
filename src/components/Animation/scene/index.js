import { Scene, GridHelper } from 'three'

export const scene = new Scene()
scene.add(new GridHelper(10, 20))
