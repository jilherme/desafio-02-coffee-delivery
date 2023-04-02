import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;

  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.yellow};

  :hover {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }

  border-radius: 6px;
  border: none;
`
