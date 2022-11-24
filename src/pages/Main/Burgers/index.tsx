import { Head } from '../../../components/Head'
import Snacks from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

export default function Burgers() {
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Mega Burger',
      description:
        'O artesanal tamanho família recheado com três carnes suculentas cobertas por queijo cheddar e deliciosas fatias de bacon caramelizado.',
      price: 35.9,
      image: 'https://i.imgur.com/upjIUnG.jpg',
    },
    {
      id: 2,
      snack: 'burger',
      name: 'Extra Bacon',
      description:
        'Pensado e criado para os amantes de Bacon, possui em todas as suas camadas muuuuito bacon bem passado, além de queijo e carne suculentos.',
      price: 32.9,
      image: 'https://i.imgur.com/B4J04AJ.jpg',
    },
  ]

  return (
    <>
      <Head title='Hambúrgueres' description='Nossos melhores burgers' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
