import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --light-blue: #9EC4FF;
        --text-color: #363f5f;


    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: var(--background);
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
`;