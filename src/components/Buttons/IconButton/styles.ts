import styled from 'styled-components'
import { ButtonVariant } from '.'

type ButtonContainerProps = {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: inline-block;
  position: relative;

  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  line-height: 0;

  border: none;
  border-radius: 6px;

  background: ${({ theme, variant }) =>
    variant === 'purple' ? theme['purple-dark'] : theme['yellow-lighter']};

  cursor: pointer;

  .badge {
    display: flex;
    position: absolute;
    width: 20px;
    height: 20px;
    right: -8.35px;
    top: -8px;
    border-radius: 100%;

    background: red;
    color: white;
    background: ${({ theme }) => theme['yellow-dark']};
    color: ${({ theme }) => theme.white};

    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.5;

    span {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      letter-spacing: -0.06em;
    }
  }
`
