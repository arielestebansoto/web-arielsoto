import React from 'react'

import { HeroContainer, Title } from './styles'
import { AnimatedLetter } from '../AnimatedLetter'

export const Hero = () => {
    const [ isVisible, setIsVisible ] = React.useState(false)
    const [ length, setLength ] = React.useState()
    const [ isAnimationEnded, setIsAnimationEnded ] = React.useState(false)
    
    React.useEffect(() => {
        const options = {
            rootMargin: '0px',
            threshold: 1.0
          }
    
        const observer = new IntersectionObserver(callback, options);
        const element = document.querySelector('#element')
        observer.observe(element)
        
        function callback(entries, observer) {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setIsVisible(true)
                    setLength(element.children.length)
                    const lastElement = element.children.item(element.children.length -1)
                    const lastElementStyles = window.getComputedStyle(lastElement)
                    
                    lastElement.addEventListener('animationend', () => {
                        console.log('end')
                        console.log(isAnimationEnded)
                        setIsAnimationEnded(true)
                    })
                }
            });
        };
    }, [])

    return (
        <HeroContainer > 
        <Title 
            id='element' 
            isVisible={isVisible} 
            length={length}
            isAnimationEnded={isAnimationEnded}
            >
                <AnimatedLetter>H</AnimatedLetter>
                <AnimatedLetter>i</AnimatedLetter>
                <AnimatedLetter>,</AnimatedLetter>
                <br />
                <AnimatedLetter>I</AnimatedLetter>
                <AnimatedLetter>'</AnimatedLetter>
                <AnimatedLetter>m&nbsp;</AnimatedLetter>
                <AnimatedLetter>A</AnimatedLetter>
                <AnimatedLetter>r</AnimatedLetter>
                <AnimatedLetter>i</AnimatedLetter>
                <AnimatedLetter>e</AnimatedLetter>
                <AnimatedLetter>l</AnimatedLetter>
                <AnimatedLetter>,</AnimatedLetter>
                <br />
                <AnimatedLetter>w</AnimatedLetter>
                <AnimatedLetter>e</AnimatedLetter>
                <AnimatedLetter>b&nbsp;</AnimatedLetter>
                <AnimatedLetter>d</AnimatedLetter>
                <AnimatedLetter>e</AnimatedLetter>
                <AnimatedLetter>v</AnimatedLetter>
                <AnimatedLetter>e</AnimatedLetter>
                <AnimatedLetter>l</AnimatedLetter>
                <AnimatedLetter>o</AnimatedLetter>
                <AnimatedLetter>p</AnimatedLetter>
                <AnimatedLetter>e</AnimatedLetter>
                <AnimatedLetter>r</AnimatedLetter>
            </Title>
        </HeroContainer >
    )
}