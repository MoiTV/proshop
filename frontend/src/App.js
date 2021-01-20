import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header.component.jsx';
import Footer from './components/Footer.component.jsx';
import HomeScreen from './screens/HomeScreen.screen';
import ProductScreen from './screens/ProductScreen.screen';

const App = () => {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                <Container>
                    <Route exact path='/' component={HomeScreen} />
                    <Route path='/product/:id' component={ProductScreen} />
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
