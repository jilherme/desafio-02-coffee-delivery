import { Tradicional } from '../../../assets/images/coffees'
import { IconButton } from '../../../components/Buttons/IconButton'

import { CoffeeList, Container } from './styles'

export function CoffeeMenu() {
  return (
    <Container>
      <h2>Nossos cafés</h2>
      <CoffeeList>
        <div>
          <img src={Tradicional} alt="Café" />
          <span>Tradicional</span>
          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <footer>
            <div>
              <span>R$</span>
              <span>9,90</span>
            </div>

            <button type="button">
              <span>Adicionar</span>
            </button>

            <IconButton variant="purple" />
          </footer>
        </div>
      </CoffeeList>
    </Container>
  )
}
