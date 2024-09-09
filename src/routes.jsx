import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home.jsx';
import { Header } from './components/layout/Header.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { Contatos } from './components/pages/Contatos.jsx';


export function Rotas(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contatos' element={<Contatos />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}