import styled from 'styled-components'
import backgroundImage from '../../assets/background-intro.png'

export const IntroductionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 3rem 10rem;
  background-image: url(${backgroundImage});
  background-size: cover;
`

export const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 37.5rem;
`

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    display: block;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
  }
`

export const ItensContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 1.25rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      color: ${(props) => props.theme.background};
      padding: 0.5rem;
      border-radius: 100%;
    }
  }
`

export const CoffeeList = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3.375rem 10rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 3.375rem;
  }
`
