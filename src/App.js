import HomePage from './pages/HomePage';
import NavigationBar from './components/NavigationBar';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <NavigationBar /> 
    </div>
  );
}

export default App;