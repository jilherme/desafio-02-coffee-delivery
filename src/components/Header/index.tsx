import { MapPin } from 'phosphor-react'

import logoCoffeDelivery from '../../assets/Logo.svg'

import { HeaderContainer, Location, LogoContainer } from './styles'
import { IconButton } from '../Buttons/IconButton'

export function Header() {
  return (
    <HeaderContainer>
      <div className="wrapper">
        <LogoContainer>
          <img src={logoCoffeDelivery} alt="Logo" />
        </LogoContainer>

        <div className="header-right">
          <Location>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </Location>
          <IconButton variant="yellow" badgeNumber={3} />
        </div>
      </div>
    </HeaderContainer>
  )
}
