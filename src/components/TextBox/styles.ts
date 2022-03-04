import styled from 'styled-components' 
 
 export const Container = styled.main`
   
 `;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: var(--text-color);

`;

export const TextInputArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 20rem;
    p, input{
        margin-bottom: 1rem;
    }

    form textarea{
        height: 15rem;
        width: 20rem;
        outline: none;
        text-align: start;
        padding: 1rem;
        border: 2px solid var(--light-blue);
        border-radius: 0.25rem;
    }
    

    button{
        height: 2.5rem;
        width: 7rem;
        background: #FFFFFF;
    }
`;