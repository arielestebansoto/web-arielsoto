import React from 'react'

import { ContactContainer, Ul, Li, Title, Anchor } from './styles'
import { AiFillLinkedin, AiFillInstagram, AiOutlineGithub } from 'react-icons/ai'
import { AnimatedLetter } from '../AnimatedLetter'

export const Contact = () => {
    const [ isVisible, setIsVisible ] = React.useState(false)
    const [ length, setLength ] = React.useState()
    const [ isAnimationEnded, setIsAnimationEnded ] = React.useState(false)
    
    React.useEffect(() => {
        const options = {
            rootMargin: '0px',
            threshold: 1.0
          }
    
        const observer = new IntersectionObserver(callback, options);
        const element = document.querySelector('#contact')
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
        <ContactContainer>
        <Title
            id='contact' 
            isVisible={isVisible} 
            length={length}
            isAnimationEnded={isAnimationEnded}
            >
                <AnimatedLetter>m</AnimatedLetter>
                <AnimatedLetter>e</AnimatedLetter>
                <AnimatedLetter>d</AnimatedLetter>
                <AnimatedLetter>i</AnimatedLetter>
                <AnimatedLetter>a</AnimatedLetter>
            </Title>
            <Ul>
                <Li><Anchor href="https://ar.linkedin.com/in/ariel-esteban-soto" target="_blank">{<AiFillLinkedin/>}</Anchor></Li>
                <Li><Anchor href="https://www.instagram.com/arielestebansoto/" target="_blank">{<AiFillInstagram/>}</Anchor></Li>
                <Li><Anchor href="https://github.com/arielestebansoto" target="_blank">{<AiOutlineGithub/>}</Anchor></Li>
            </Ul>
        </ContactContainer>
    )
}