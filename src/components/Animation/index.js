import { renderer } from './renderer'
import { camera } from './camera'
import { scene } from './scene'

import { orbitControls } from './orbitControls'
import { pointerLockControls } from './pointerLookControls'
import { textSkills } from './objects/texts/skills'
import { textReact } from './objects/texts/react'

textSkills()
textReact()

export const animation = renderer.domElement
