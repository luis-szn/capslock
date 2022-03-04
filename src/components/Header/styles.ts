import styled from 'styled-components'

export const Container = styled.header `
    background: var(--light-blue);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    max-width: 1120px;
    height: 3rem;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 1.5rem;
        color: var(--text-color);
    }
`;