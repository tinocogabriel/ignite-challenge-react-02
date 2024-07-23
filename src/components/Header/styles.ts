import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
`

export const LocationAndCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  padding: 0.5rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
  span {
    color: ${(props) => props.theme['purple-dark']};
    font-size: 0.875rem;
    line-height: 1.3;
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  padding: 0.5rem;
  border: 0;
  cursor: pointer;
  position: relative;
  span {
    position: absolute;
    right: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    border-radius: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 0.875rem;
    line-height: 1.3;
  }
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
