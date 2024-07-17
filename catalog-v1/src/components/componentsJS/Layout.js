import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => (

  // Outlet Is what brings Player in
  <>
  <Header />
  <Outlet/>
  <Footer />
  </>

);

export default Layout