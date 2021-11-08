const angleFront = Math.PI * 2
const angleBack = Math.PI
const angleRight = Math.PI * 1.5  
const angleLeft = Math.PI * 0.5

export const texts = [ 
    {
        title: 'skills', 
        position: { x: 0, y: 0, z: -1 },
        rotation: { x: 0, y: angleFront, z: 0 },
    }, 
    {
        title: 'react', 
        position: { x: 0, y: 0, z: -4 },
        rotation: { x: 0, y: angleFront, z: 0},
    },
    {
        title: 'redux', 
        position: { x: 0, y: 0, z: -8 },
        rotation: { x: 0, y: angleFront, z: 0 },
    },
    {
        title: 'react-router', 
        position: { x: 0, y: 0, z: -12 },
        rotation: { x: 0, y: angleFront, z: 0 },
    },
    {
        title: 'github', 
        position: { x: 0, y: 0, z: -14},
        rotation: { x: 0, y: angleFront, z: 0 },
    },
    {
        title: 'nodejs', 
        position: { x: 0, y: 0, z: 10},
        rotation: { x: 0, y: angleBack, z: 0 }
    },
    {
        title: 'styled-components', 
        position: { x: -10, y: 0, z: -5 },
        rotation: { x: 0, y: angleLeft, z: 0 },
    },
    {
        title: 'materialize', 
        position: { x:  -15, y: 0, z: 0 },
        rotation: { x: 0, y: angleLeft, z: 0 },
    },
    {
        title: 'bootsrap', 
        position: { x: -20, y: 0, z: 5},
        rotation: { x: 0, y: angleLeft, z: 0 },
    },
    {
        title: 'sass', 
        position: { x: -10, y: 0, z: 5 },
        rotation: { x: 0, y: angleLeft, z: 0 },
    },
    {
        title: 'html css js', 
        position: { x:  -20, y: 0, z: -20 },
        rotation: { x: 0, y: angleLeft, z: 0 },
    },
    {
        title: 'threeJS', 
        position: { x:  20, y: 0, z: 0 },
        rotation: { x: 0, y: angleRight, z: 0 },
    }
]
