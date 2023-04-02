import styled from 'styled-components'

import HeroBackground from '../../../assets/images/HeroBackground.svg'

export const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.5rem;

  padding: 2.5rem 0;
  @media (min-width: 48rem) {
    padding: 5.75rem 0;
  }

  > section {
    max-width: 36.75rem;
  }

  .hero-headings {
    display: flex;
    flex-direction: column;
    max-width: 36.75rem;
    margin-bottom: 4.125rem;

    h1 {
      color: ${({ theme }) => theme.title};
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 3rem;
      line-height: 130%;
    }
    > p {
      color: ${({ theme }) => theme.subtitle};
      font-stretch: 100;
      font-size: 1.25rem;
      line-height: 130%;
    }
  }
`
export const HeroItems = styled.div`
  display: grid;
  justify-content: center;

  @media (min-width: 30rem) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.25rem;
  width: 100%;

  .hero-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > div {
      display: flex;
      padding: 0.5rem;
      border-radius: 100%;
      align-content: center;
      justify-content: center;
    }

    .cart {
      background: ${({ theme }) => theme['yellow-dark']};
    }

    .package {
      background: ${({ theme }) => theme.text};
    }

    .timer {
      background: ${({ theme }) => theme['yellow-lighter']};
    }

    .coffee {
      background: ${({ theme }) => theme.purple};
    }
  }
`
