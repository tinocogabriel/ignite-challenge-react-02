import { useFormContext } from 'react-hook-form'
import {
  AddressFormCEPInput,
  AddressFormRuaInput,
  AddressFormNumeroInput,
  AddressFormComplementoContainer,
  AddressFormComplementoInput,
  AddressFormBairroInput,
  AddressFormCidadeInput,
  AddressFormUFInput,
} from './styles'

// interface AddressFormProps {
//   errorMessage: string
// }

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <>
      <AddressFormCEPInput placeholder="CEP" {...register('cep')} />
      <AddressFormRuaInput placeholder="Rua" {...register('rua')} />
      <div>
        <AddressFormNumeroInput placeholder="Número" {...register('numero')} />
        <AddressFormComplementoContainer>
          <AddressFormComplementoInput
            placeholder="Complemento"
            {...register('complemento')}
          />
          <span>* Opcional</span>
        </AddressFormComplementoContainer>
      </div>
      <div>
        <AddressFormBairroInput placeholder="Bairro" {...register('bairro')} />
        <AddressFormCidadeInput placeholder="Cidade" {...register('cidade')} />
        <AddressFormUFInput placeholder="UF" {...register('uf')} />
      </div>
    </>
  )
}
