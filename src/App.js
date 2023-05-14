import logo from './logo.svg';
import './App.css';
import QuizDetailScreen from './pages/QuizDetailScreen';
import QuizAttemptScreen from './pages/QuizAttemptScreen';
import QuizResultScreen from './pages/QuizResultScreen';
import { BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element = {<QuizDetailScreen/>} />
      <Route path='/quiz' element={<QuizAttemptScreen/>}/>
      <Route path='/result' element={<QuizResultScreen/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
