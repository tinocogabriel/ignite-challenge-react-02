import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 2rem 10rem;
  gap: 3rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.125rem;
      line-height: 1.3;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  }
`
export const AddressContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AddressTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: normal;
      line-height: 1.3;
    }
    span {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.875rem;
      line-height: 1.3;
    }
  }
`

export const PaymentContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const PaymentTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: normal;
      line-height: 1.3;
    }
    span {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.875rem;
      line-height: 1.3;
    }
  }
`

export const PaymentForm = styled.div`
  display: flex;
  gap: 0.875rem;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-transform: uppercase;
    border-radius: 6px;
    cursor: pointer;
    background-color: ${(props) => props.theme['base-button']};
    padding: 1rem;

    svg {
      color: ${(props) => props.theme.purple};
    }

    input {
      display: none;
    }

    &:last-child {
      flex: 1;
    }

    &:hover {
      background-color: ${({ theme }) => theme['base-hover']};
    }

    &[data-state='true'] {
      background-color: ${({ theme }) => theme['purple-light']};
      border-color: ${({ theme }) => theme.purple};
    }
  }
`
export const ResumeOrderContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const SelectedCoffee = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
  strong {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
    font-weight: bold;
    min-width: 100px;
  }
`

export const SelectedCoffeeAction = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    line-height: 1.3;
  }
  div {
    display: flex;
    gap: 0.25rem;
  }
`
export const RemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  text-transform: uppercase;
  padding: 0 0.5rem;
  border: 0;
  font-size: 0.75rem;
  line-height: 1.6;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CoffeeQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 6px;
  text-align: center;

  button {
    border: 0;
    background: transparent;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }

  span {
    color: ${(props) => props.theme['base-title']};
    line-height: 1.3;
    min-width: 20px;
  }
`
export const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  margin: 1.5rem 0;
`

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme['base-text']};
  margin-top: -2rem;

  div {
    display: flex;
    justify-content: space-between;

    span:first-child {
      font-size: 0.875rem;
      line-height: 1.3;
    }

    span:last-child {
      font-size: 1rem;
      line-height: 1.3;
    }
  }
`

export const Total = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
  font-weight: bold;
  font-size: 1.25rem !important;
`

export const ConfirmButton = styled.button`
  text-align: center;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  border: 0;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.75rem;
  cursor: pointer;
`
export const AddressFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    gap: 1rem;
  }
`
export const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
`
