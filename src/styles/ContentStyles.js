import styled from 'styled-components';

const Content = styled.div`

    
    display: grid;
    --offset: 4rem;
    grid-template-columns: minmax(var(--offset), 1fr) [center-start] repeat(8, minmax(min-content, 15rem)) [center-end] minmax(var(--offset), 1fr);
    div.grid-center{
      grid-column: center-start / center-end;
    }

    @media (max-width: 600px) {

      --offset: 2rem;
    }



`;


export default Content;