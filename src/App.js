import { BrowserRouter } from 'react-router-dom'
import './Assets/CSS/App.css';
import Header from './Components/Header';
import Investment from './Components/Investment';
import Achievements from './Components/Achievements';
import Trusted from './Components/Trusted';
import FormSection from './Components/FormSection';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Investment />
        <Achievements />
        <Trusted />
        <FormSection />
        <Header className='bottom-header' />

      </div>
    </BrowserRouter>
  );
}

export default App;
