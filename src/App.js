import './App.scss';
import Hero from './components/Hero/Hero';
import Rooms from './components/Rooms/Rooms';
import Nav from './components/Nav/Nav';
import Services from './components/Services/Services';
import Spots from './components/Spots/Spots';
import Gallery from './components/Gallery/Gallery';
import Reviews from './components/Reviews/Reviews';

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
                here is the footer
            </footer>
        
        
        </>
    );
}

export default App;
