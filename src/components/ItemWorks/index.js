import React from 'react'

import { Li, Anchor } from './styles'

export const ItemWorks = ({ id, length, href, title}) => {
    const [ isVisibleList, setIsVisibleList ] = React.useState(false)

    React.useEffect( () => {
        const options = {
            rootMargin: '0px',
            threshold: .3
          }
        const observer = new IntersectionObserver(callback, options);
        const element = document.querySelector(`#item${id}`)
        observer.observe(element)

        function callback(entries, observer) {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setIsVisibleList(true)                    
                }
            });
        };
    }, [])



    return (
        <Li
            id={`item${id}`}
            isVisibleList={isVisibleList}
            length={length}
        > 
            <Anchor href={href} target="_blank">
                {title}
            </Anchor>
        </Li>
    )
}