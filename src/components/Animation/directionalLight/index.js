import { DirectionalLight } from "three";
import { scene } from "../scene";

export const directionalLight = new DirectionalLight(0xffffff, 1)
directionalLight.position.x = 10
directionalLight.position.y = 10
directionalLight.position.z = 10
directionalLight.castShadow = true
scene.add(directionalLight)