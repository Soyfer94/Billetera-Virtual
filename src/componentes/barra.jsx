import React from 'react';
import './barra.scss';

const Navbar = () => {
  return (
    <header>
    <div className="container">
    <p className="logo">TuUNSTA</p>
    <nav>
        <a href="">Usá TuUNSTA</a>
        <a href="">Bancos asociados</a>
        <a href="">Cripto</a>
        <a href="">Promociones</a>
        <a href="">Ayuda</a>
    </nav>
</div>
</header>
  );
};
export default Navbar;