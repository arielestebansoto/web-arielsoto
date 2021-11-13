import React from 'react'

import { HeroContainer, Title } from './style'

export const Hero = () => {
    const [ isVisible, setIsVisible ] = React.useState(false)
    const [ length, setLength ] = React.useState()

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
                }
            });
          };
    })

    return (
        <HeroContainer > 
        <Title id='element' isVisible={isVisible} length={length}>
                <span>H</span>
                <span>i</span>
                <span>,</span>
                <br />
                <span>I</span>
                <span>'</span>
                <span>m&nbsp;</span>
                <span>A</span>
                <span>r</span>
                <span>i</span>
                <span>e</span>
                <span>l</span>
                <span>,</span>
                <br />
                <span>w</span>
                <span>e</span>
                <span>b&nbsp;</span>
                <span>d</span>
                <span>e</span>
                <span>v</span>
                <span>e</span>
                <span>l</span>
                <span>o</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>
            </Title>
        </HeroContainer >
    )
}