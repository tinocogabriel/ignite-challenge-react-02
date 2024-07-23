import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 10rem;
  gap: 3rem;
`
export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  > div {
    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 2rem;
      line-height: 1.3;
      font-weight: 800;
      color: ${(props) => props.theme['yellow-dark']};
    }

    span {
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const ResumeOrderContainer = styled.section`
  border: 1px solid;
  width: 100%;
  border-radius: 6px 36px;
  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.yellow}, ${theme.purple})`};
`

export const PainelContainer = styled.div`
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.white};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  font-size: 1rem;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme.purple};
      border-radius: 100%;
      padding: 0.5rem;
    }
    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
      span {
        display: block;
      }
    }
  }
`
