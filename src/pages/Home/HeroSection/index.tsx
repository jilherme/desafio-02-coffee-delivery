import {
  Clock,
  ClockAfternoon,
  ClockClockwise,
  Coffee,
  Package,
  ShoppingCart,
  Timer,
} from 'phosphor-react'
import CoffeeHeroSection from '../../../assets/images/CoffeeHeroSection.webp'

import { HeroContainer, HeroItems } from './styles'

export function HeroSection() {
  return (
    <HeroContainer>
      <section>
        <div className="hero-headings">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <HeroItems>
          <div className="hero-item">
            <div className="cart">
              <ShoppingCart size={16} color="white" weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </div>

          <div className="hero-item">
            <div className="package">
              <Package size={16} color="white" weight="fill" />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </div>

          <div className="hero-item">
            <div className="timer">
              <Timer size={16} color="white" weight="fill" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </div>

          <div className="hero-item">
            <div className="coffee">
              <Coffee size={16} color="white" weight="fill" />
            </div>
            <span>O café chega fresquinho até você</span>
          </div>
        </HeroItems>
      </section>

      <aside>
        <img src={CoffeeHeroSection} alt="" width="100%" height="auto" />
      </aside>
    </HeroContainer>
  )
}
