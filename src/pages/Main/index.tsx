import { Outlet } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import { MyOrder } from '../../components/MyOrder';
import { Sidebar } from '../../components/Sidebar'
import { Container } from './styles'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} alt='logotipo' />
        <Outlet />
      </section>
      <MyOrder />
    </Container>
  );
}
