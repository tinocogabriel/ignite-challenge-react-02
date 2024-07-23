import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border-radius: 6px 36px;
  text-align: center;
  padding: 0 1rem 1rem 1rem;
`

export const CoffeeImage = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
`
export const CoffeeTags = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${(props) => props.theme['yellow-dark']};
  font-weight: bold;
  text-transform: uppercase;

  span {
    background-color: ${(props) => props.theme['yellow-light']};
    padding: 0.25rem 0.5rem;
    font-size: 0.625rem;
    line-height: 1.3;
    border-radius: 100px;
  }
`
export const CoffeeTitle = styled.strong`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  line-height: 1.3;
  font-weight: bold;
`
export const CoffeeDescription = styled.span`
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-label']};
`

export const CoffeeOrder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`
export const CoffeePrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  span:first-child {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
  span:last-child {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-text']};
  }
`

export const CoffeeAction = styled.div`
  display: flex;
  gap: 0.25rem;
`
export const CoffeeQuantity = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 6px;

  button {
    border: 0;
    background: transparent;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }

  span {
    color: ${(props) => props.theme['base-title']};
    line-height: 1.3;
  }
`
export const CoffeeAddCoffeeButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
`
