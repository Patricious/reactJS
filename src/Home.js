import React from 'react'
import HeaderPage from './Header';
import Grid from './Grid';
import Cards from './Cards'
import Footer from './Footer';
import Form from './Form';
import DataFound from './data';
import Ribbon from './Ribon';





function Home() {
    return (
        <>
<HeaderPage/>
<Ribbon/>
<Grid/>

<Cards/>

<Form/>
<DataFound/>
<Footer/>

        </>
      );
  
}

export default Home;