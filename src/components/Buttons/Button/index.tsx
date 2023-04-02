import { ReactNode } from 'react'
import { ButtonContainer, ButtonVariant } from './styles'

interface ButtonProps {
  children: ReactNode
}

export function Button({ children }: ButtonProps) {
  return <ButtonContainer>{children}</ButtonContainer>
}
