import styled from 'styled-components'

export const AddressFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    gap: 1rem;
  }
`

const AddressFormBaseInput = styled.input`
  border-radius: 4px;
  padding: 0.875rem;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
`

export const AddressFormCEPInput = styled(AddressFormBaseInput)`
  width: 50%;
`
export const AddressFormRuaInput = styled(AddressFormBaseInput)`
  flex: 1;
`

export const AddressFormNumeroInput = styled(AddressFormBaseInput)`
  width: 30%;
`

export const AddressFormComplementoContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;

  span {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    font-size: 0.875rem;
    font-style: italic;
    pointer-events: none;
    color: ${(props) => props.theme['base-label']};
  }
`

export const AddressFormComplementoInput = styled(AddressFormBaseInput)`
  flex: 1;
`

export const AddressFormBairroInput = styled(AddressFormBaseInput)`
  width: 30%;
`
export const AddressFormCidadeInput = styled(AddressFormBaseInput)`
  flex: 1;
`

export const AddressFormUFInput = styled(AddressFormBaseInput)`
  width: 10%;
`
