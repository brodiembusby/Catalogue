import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = () => (

  // Outlet Is what brings Player in
  <>
  <Header />
  <Outlet/>
  <Footer />
  </>

);

export default Layout