import styled from 'styled-components'

export const HeaderContainer = styled.header`
  .wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 2rem 0;

    .header-right {
      display: flex;
      gap: 0.5rem;
      @media (min-width: 30rem) {
        gap: 0.75rem;
      }
    }
  }
`

export const LogoContainer = styled.div``

export const Location = styled.div`
  display: flex;

  align-items: center;

  background: ${({ theme }) => theme['purple-lighter']};

  padding: 8px;
  gap: 4px;
  border-radius: 6px;

  svg {
    color: ${({ theme }) => theme.purple};
  }
  span {
    color: ${({ theme }) => theme['purple-dark']};
  }
`
