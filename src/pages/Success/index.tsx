import {
  PainelContainer,
  ResumeContainer,
  ResumeOrderContainer,
  SuccessContainer,
} from './styles'

import motoboyImage from '../../assets/motoboy.png'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { useContext, useEffect } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { useNavigate } from 'react-router-dom'
export function Success() {
  const theme = useTheme()
  const { order } = useContext(CoffeeContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!order.address) {
      navigate('/')
    }
  }, [order])

  return (
    <>
      <SuccessContainer>
        <ResumeContainer>
          <div>
            <h1>Uhu! Pedido confirmado</h1>
            <span>Agora é só aguardar que logo o café chegará até você</span>
          </div>
          <ResumeOrderContainer>
            {order && order.address && (
              <PainelContainer>
                <div>
                  <MapPin
                    size={32}
                    weight="fill"
                    style={{ backgroundColor: theme.purple }}
                  />
                  <span>
                    Entrega em{' '}
                    <strong>
                      {order.address.rua}, {order.address.numero}
                    </strong>{' '}
                    {order.address.bairro} - {order.address.cidade},{' '}
                    {order.address.uf}
                  </span>
                </div>

                <div>
                  <Timer
                    size={32}
                    weight="fill"
                    style={{ backgroundColor: theme.yellow }}
                  />
                  <div>
                    <span>Previsão de entrega</span>
                    <strong>20 min - 30 min</strong>
                  </div>
                </div>

                <div>
                  <CurrencyDollar
                    size={32}
                    weight="fill"
                    style={{ backgroundColor: theme['yellow-dark'] }}
                  />
                  <div>
                    <span>Pagamento na entrega</span>
                    {order.payment === 'credito' && (
                      <strong>Cartão de Crédito</strong>
                    )}
                    {order.payment === 'debito' && (
                      <strong>Cartão de Crédito</strong>
                    )}
                    {order.payment === 'dinheiro' && (
                      <strong>Cartão de Crédito</strong>
                    )}
                  </div>
                </div>
              </PainelContainer>
            )}
          </ResumeOrderContainer>
        </ResumeContainer>
        <img
          src={motoboyImage}
          alt="Foto ilustrativa de um motoboy a caminho da residência"
        />
      </SuccessContainer>
    </>
  )
}
