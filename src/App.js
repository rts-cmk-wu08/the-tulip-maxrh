import './App.scss';
import Hero from './components/Hero/Hero';
import Rooms from './components/Rooms/Rooms';
import Nav from './components/Nav/Nav';
import Services from './components/Services/Services';
import Spots from './components/Spots/Spots';

function App() {
    return (
        <>
            <header>
                <Nav />
            </header>

            <main>
                <Hero />
                <Rooms />
                <Services />
                <Spots />
            </main>

            <footer>
                here is the footer
            </footer>
        
        
        </>
    );
}

export default App;
