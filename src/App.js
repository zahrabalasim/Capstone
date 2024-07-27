import React from 'react';
import Navbar from './components/navbar/NavbarTemp';
import Hero from './components/hero/Hero'
import CardForm from './components/cardform/CardForm';
import Maincard from './components/maincard/Maincard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero  />
      <CardForm />
      {/* <Maincard />
      <Maincard />
      <Maincard />
      <Maincard />
      <Maincard />
      <Maincard /> */}
    </div>
  );
}

export default App;
