import styled from "styled-components";

export const Span = styled.span`
    display: inline-block;

    transition: all .2s ease-out;

    animation-duration: 1s;
    animation-fill-mode: both;
    animation-iteration-count: 1;

    &:hover {
        animation-name: rubberBand;
        animation-delay: 0s;
        transition-delay: 0s;
        color: #5ba0bf;
    }

    @keyframes rubberBand {
        from {
            transform: scale3d(1, 1, 1);
        }
        
        30% {
            transform: scale3d(1.25, 0.75, 1);
        }
        
        40% {
            transform: scale3d(0.75, 1.25, 1);
        }
        
        50% {
            transform: scale3d(1.15, 0.85, 1);
        }
        
        65% {
            transform: scale3d(.95, 1.05, 1);
        }
        
        75% {
            transform: scale3d(1.05, .95, 1);
        }
        
        to {
            transform: scale3d(1, 1, 1);
        }
    }
    }
`

