import './App.scss';
import Hero from './components/Hero/Hero';
import Rooms from './components/Rooms/Rooms';
import Nav from './components/Nav/Nav';
import Services from './components/Services/Services';
import Spots from './components/Spots/Spots';
import Gallery from './components/Gallery/Gallery';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <header className='page-header'>
                <Nav />
            </header>

            <main className='page-content container'>
                <Hero />
                <Rooms />
                <Services />
                <Spots />
                <Gallery />
                <Reviews />
            </main>

            <footer className='page-footer'>
                <Footer />
            </footer>
        
        
        </>
    );
}

export default App;
