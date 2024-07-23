import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from '@phosphor-icons/react'
import {
  AddressContainer,
  AddressFormContainer,
  AddressTitle,
  CheckoutContainer,
  CoffeeQuantity,
  ConfirmButton,
  Divider,
  ErrorMessage,
  PaymentContainer,
  PaymentForm,
  PaymentTitle,
  RemoveItemButton,
  ResumeOrderContainer,
  SelectedCoffee,
  SelectedCoffeeAction,
  Total,
  TotalContainer,
} from './styles'
import { useContext, useEffect, useState } from 'react'
import { Coffee, CoffeeContext } from '../../contexts/CoffeeContext'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { AddressForm } from './AddressForm'

const AddressFormValidantionSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  rua: zod.string().min(1, 'Informe a Rua'),
  numero: zod.string().min(1, 'Informe o Número'),
  complemento: zod.string().optional().default(''),
  bairro: zod.string().min(1, 'Informe o Bairro'),
  cidade: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
})

type AddressFormData = zod.infer<typeof AddressFormValidantionSchema>

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [addressErrorMessage, setAddressErrorMessagem] = useState('')
  const [paymentErrorMessage, setPaymentErrorMessagem] = useState('')

  const {
    coffeeInCart,
    removeFromCart,
    addQuantityOfCoffeeInCart,
    decreaseQuantityOfCoffeeInCart,
    newOrder,
    cleanCoffeeInCart,
  } = useContext(CoffeeContext)

  const addressFormHook = useForm<AddressFormData>({
    resolver: zodResolver(AddressFormValidantionSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
  })

  const {
    handleSubmit,
    formState: { errors },
  } = addressFormHook

  const navigate = useNavigate()

  useEffect(() => {
    if (coffeeInCart.length === 0) {
      navigate('/')
    }
  }, [coffeeInCart])

  function handleOrder(data: AddressFormData) {
    setAddressErrorMessagem('')

    if (paymentMethod === '') {
      setPaymentErrorMessagem('Preencha o meio de pagamento')
      return
    }

    const order = {
      address: data,
      payment: paymentMethod,
      items: coffeeInCart,
    }
    newOrder(order)

    cleanCoffeeInCart()

    navigate('/success')
  }

  function handleRemoveCoffee(id: string) {
    removeFromCart(id)
  }

  function handleAddCoffee(id: string) {
    addQuantityOfCoffeeInCart(id)
  }
  function handleDecreaseCoffee(id: string) {
    decreaseQuantityOfCoffeeInCart(id)
  }

  function calcTotalItem(item: Coffee) {
    const itemQuantity = item.quantity ? item.quantity : 0
    const totalItem = item.price * itemQuantity
    return totalItem.toFixed(2)
  }

  function calcTotalCompra() {
    const totalCoffee = coffeeInCart.reduce((acc, item) => {
      const itemQuantity = item.quantity ? item.quantity : 0
      return acc + item.price * itemQuantity
    }, 0)
    return totalCoffee.toFixed(2)
  }

  function calcTotalCompraComFrete() {
    const totalCoffee = coffeeInCart.reduce((acc, item) => {
      const itemQuantity = item.quantity ? item.quantity : 0
      return acc + item.price * itemQuantity
    }, 0)
    const totalCoffeeWithDelivery = totalCoffee + 3.5
    return totalCoffeeWithDelivery.toFixed(2)
  }

  function onError() {
    const keys = Object.keys(errors)
    const attr = keys[0]
    setAddressErrorMessagem(errors[attr].message)
  }

  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>

        <AddressContainer>
          <AddressTitle>
            <MapPinLine size={22} />
            <div>
              <strong>Endereço de Entrega</strong>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </AddressTitle>
          <FormProvider {...addressFormHook}>
            <AddressFormContainer
              id="order"
              onSubmit={handleSubmit(handleOrder, onError)}
            >
              <AddressForm />
            </AddressFormContainer>
          </FormProvider>
          {addressErrorMessage !== '' && (
            <ErrorMessage>{addressErrorMessage}</ErrorMessage>
          )}
        </AddressContainer>
        <PaymentContainer>
          <PaymentTitle>
            <CurrencyDollar size={22} />
            <div>
              <strong>Pagamento</strong>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </PaymentTitle>
          <PaymentForm>
            <label
              data-state={paymentMethod === 'credito'}
              onClick={() => {
                setPaymentMethod('credito')
                setPaymentErrorMessagem('')
              }}
            >
              <CreditCard size={16} />
              Cartão de Crédito
            </label>
            <label
              data-state={paymentMethod === 'debito'}
              onClick={() => {
                setPaymentMethod('debito')
                setPaymentErrorMessagem('')
              }}
            >
              <Bank size={16} />
              Cartão de Débito
            </label>
            <label
              htmlFor="dinheiro"
              data-state={paymentMethod === 'dinheiro'}
              onClick={() => {
                setPaymentMethod('dinheiro')
                setPaymentErrorMessagem('')
              }}
            >
              <Money size={16} />
              Dinheiro
            </label>
          </PaymentForm>
          {paymentErrorMessage !== '' && (
            <ErrorMessage>Preencha o meio de pagamento!</ErrorMessage>
          )}
        </PaymentContainer>
      </section>
      <section>
        <h2>Cafés selecionados</h2>
        <ResumeOrderContainer>
          <div>
            {coffeeInCart.map((item) => {
              return (
                <div key={item.id}>
                  <SelectedCoffee>
                    <img src={item.image} alt="" />
                    <SelectedCoffeeAction>
                      <span>{item.title}</span>
                      <div>
                        <CoffeeQuantity>
                          <button
                            onClick={() => {
                              handleDecreaseCoffee(item.id)
                            }}
                          >
                            <Minus size={14} weight="bold" />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => {
                              handleAddCoffee(item.id)
                            }}
                          >
                            <Plus size={14} weight="bold" />
                          </button>
                        </CoffeeQuantity>
                        <RemoveItemButton
                          onClick={() => {
                            handleRemoveCoffee(item.id)
                          }}
                        >
                          <Trash size={16} />
                          Remover
                        </RemoveItemButton>
                      </div>
                    </SelectedCoffeeAction>
                    <strong>R$ {calcTotalItem(item)}</strong>
                  </SelectedCoffee>
                  <Divider />
                </div>
              )
            })}
          </div>
          <TotalContainer>
            <div>
              <span>Total de itens</span>
              <span>R$ {calcTotalCompra()}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3.50</span>
            </div>
            <div>
              <Total>Total</Total>
              <Total>R$ {calcTotalCompraComFrete()}</Total>
            </div>
          </TotalContainer>
          <ConfirmButton type="submit" form="order">
            Confirmar Pedido
          </ConfirmButton>
        </ResumeOrderContainer>
      </section>
    </CheckoutContainer>
  )
}
