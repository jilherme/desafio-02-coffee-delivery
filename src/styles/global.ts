import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.purple};
    }

    body {
        background-color: ${(props) => props.theme.background};
        color: ${({ theme }) => theme.text};
        -webkit-font-smoothing: antialiased;
        height: 100dvh;
    }   

    h1 {
        font-family: 'Baloo 2', sans-serif;
    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    } 
`
