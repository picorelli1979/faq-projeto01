import React from 'react';
import Logo from './componentes/imagens/01.JPG';
import Header from './componentes/Header';
import Section from './componentes/Section';
import Footer from './componentes/Footer';
import Dados from './componentes/Dados';
import Main from './componentes/Main';


function App () {

  return (
    <>
     <Header/> 
     <Section/>
     <Main/>     
     <Dados 
     Instagram ={"https://www.instagram.com/7consultoriaimoveis/"}     
     Facebook = {"https://www.facebook.com/profile.php?id=100007235895211"}
     />
     <Footer/>
    </>
  );

}

export default App