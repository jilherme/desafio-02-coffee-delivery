import { TCoffee, TCoffeeTags } from '../@types/coffee'
import {
  Americano,
  Arabe,
  CafeComLeite,
  CafeGelado,
  Cappuccino,
  ChocolateQuente,
  Cubano,
  ExpressoCremoso,
  Havaiano,
  Irlandes,
  Latte,
  Macchiato,
  Mochaccino,
  Tradicional,
} from '../assets/images/coffees'

export interface CoffeeCardProps {
  title: TCoffee
  description: string
  tags: TCoffeeTags[]
  price: number
  image: string
}

export const coffeeList: CoffeeCardProps[] = [
  {
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['TRADICIONAL'],
    price: 990,
    image: Tradicional,
  },
  {
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['TRADICIONAL'],
    price: 990,
    image: Americano,
  },
  {
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['TRADICIONAL'],
    price: 990,
    image: ExpressoCremoso,
  },
  {
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['TRADICIONAL', 'GELADO'],
    price: 990,
    image: CafeGelado,
  },
  {
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: 990,
    image: CafeComLeite,
  },
  {
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: 990,
    image: Latte,
  },
  {
    title: 'Capuccino',

    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: 990,
    image: Cappuccino,
  },
  {
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: 990,
    image: Macchiato,
  },
  {
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: 990,
    image: Mochaccino,
  },
  {
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['ESPECIAL', 'COM LEITE'],
    price: 990,
    image: ChocolateQuente,
  },

  {
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    price: 990,
    image: Cubano,
  },
  {
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['ESPECIAL'],
    price: 990,
    image: Havaiano,
  },
  {
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['ESPECIAL'],
    price: 990,
    image: Arabe,
  },
  {
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['ALCOÓLICO', 'COM LEITE'],
    price: 990,
    image: Irlandes,
  },
]
