import React from 'react'

import { works } from './works'
import { WorksContainer, Title, UlContainer, Ul } from './styles'
import { AnimatedLetter } from '../AnimatedLetter'
import { ItemWorks } from '../ItemWorks'

export const Works = () => {
    const [ isVisible, setIsVisible ] = React.useState(false)
    const [ length, setLength ] = React.useState()
    const [ isAnimationEnded, setIsAnimationEnded ] = React.useState(false)

    React.useEffect(() => {
        const options = {
            rootMargin: '0px',
            threshold: 1.0
          }
    
        const observer = new IntersectionObserver(callback, options);
        const element = document.querySelector('#works')
        observer.observe(element)
        
        function callback(entries, observer) {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setIsVisible(true)
                    setLength(element.children.length)
                    const lastElement = element.children.item(element.children.length -1)
                    const lastElementStyles = window.getComputedStyle(lastElement)
                    
                    lastElement.addEventListener('animationend', () => {
                        setIsAnimationEnded(true)
                    })
                }
            });
        };
    }, [])

    return (
        <WorksContainer>
            <Title
                 id='works' 
                 isVisible={isVisible} 
                 length={length}
                 isAnimationEnded={isAnimationEnded}
            >
                <AnimatedLetter>w</AnimatedLetter>
                <AnimatedLetter>o</AnimatedLetter>
                <AnimatedLetter>r</AnimatedLetter>
                <AnimatedLetter>k</AnimatedLetter>
                <AnimatedLetter>s</AnimatedLetter>
            </Title>

            <UlContainer>
                <Ul >
                    {
                        works.map( (work, index) => {
                            return <ItemWorks 
                                key={index}
                                id={index}
                                href={work.href}
                                title={work.title}
                                length={works.length}
                            />
                        })
                    }
                </Ul>
            </UlContainer>
        </WorksContainer>
    )
}