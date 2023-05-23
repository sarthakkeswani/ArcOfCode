
import './App.css';
import ContData from './ContData/ContData';
import ContLanguage from './ContLanguage/ContLanguage';
import ContentAOC from './ContentAOC/ContentAOC';
import NavbarAoc from './NavbarAOC/NavbarAoc';
import Cpppage from './Pages/Cpppage/Cpppage';

function App() {
  return (
    <div >
    <NavbarAoc/>
    <ContentAOC/>
    <ContData/>
    <ContLanguage/>
    <Cpppage/>
    </div>
  );
}

export default App;
