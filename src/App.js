// third party imports
import React, {  } from 'react';

//in app imports-presentational
import { Header, Main, Footer } from './components/Layout'


//in app imports-logical


function App() {
  return (
    < >
      <Header></Header>
      <Main></Main>
      <Footer>
        Copyright {new Date().getFullYear()} &#169; SKYE IT SOLUTIONS
      </Footer>
    </>
  );
}

export default App;
