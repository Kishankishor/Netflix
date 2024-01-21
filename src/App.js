
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Banner } from './components/banner/Banner';
import { Rawpost } from './components/RawPost/Rawpost';
import {actions,originals,comedy, horror, Romance, Documentaries} from './url'


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Rawpost url ={originals} title='Netflix Originals'/>
     <Rawpost url={actions} title='Action Movies' isSmall/>
     <Rawpost url={comedy} title='Comedy Movies' isSmall/>
     <Rawpost url={horror} title='Horror Movies' isSmall/>
     <Rawpost url={Romance} title='Romance Movies' isSmall/>
     <Rawpost url={Documentaries} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
