import { defaultTheme } from '../../../styles/themes/default'
import { ButtonContainer } from './styles'
import { ShoppingCart, ShoppingCartSimple } from 'phosphor-react'

export type ButtonVariant = 'purple' | 'yellow'

interface ButtonProps {
  variant: ButtonVariant
  badgeNumber?: number
}

export function IconButton({ variant = 'purple', badgeNumber }: ButtonProps) {
  return (
    <ButtonContainer variant={variant}>
      {variant === 'purple' && (
        <ShoppingCartSimple
          color={defaultTheme.white}
          size={22}
          weight="fill"
        />
      )}
      {variant === 'yellow' && (
        <ShoppingCart
          color={defaultTheme['yellow-dark']}
          size={22}
          weight="fill"
        />
      )}
      {badgeNumber && (
        <div className="badge">
          <span>{badgeNumber}</span>
        </div>
      )}
    </ButtonContainer>
  )
}
