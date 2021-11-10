import styled from "styled-components";

import { sectionMarginBottom } from "../../globalStyles";

export const PresentationContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-block-end: ${sectionMarginBottom}px;
`

export const PresentationContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 80%;
    text-align: center;
`