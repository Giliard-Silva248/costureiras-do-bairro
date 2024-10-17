import React from 'react';
import './styles/App.css'
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { CardList } from './components/CardsList/CardsList';
import { Footer } from './components/Footer/Footer';
import { Provider } from 'react-redux';
import store from './store'
import { Presentation } from './components/Presentation/Presentation';

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Banner/>
      <Presentation/>
      <CardList/>
      <Footer/>
    </Provider>
  );
}

export default App;
