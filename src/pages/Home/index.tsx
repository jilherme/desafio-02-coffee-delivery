import { CoffeeMenu } from './CoffeeMenu'
import { HeroSection } from './HeroSection'

import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HeroSection />
      <CoffeeMenu />
    </HomeContainer>
  )
}
