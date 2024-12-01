import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TestPage from './pages/TestPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import MyInfoPage from './pages/MyInfoPage.jsx';
import FeedbackPage from './pages/FeedbackPage.jsx';
import SuggestPage from './pages/SuggestPage.jsx';

const linkStyle = {
  // 예제를 위한 임의의 CSS
  margin: '5px',
  color: 'blue',
  textDecoration: 'underline',
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<SignupPage />}
      />
      <Route path="/test" element={<TestPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/info-page" element={<MyInfoPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/suggest-page" element={<SuggestPage />} />
    </Routes>
  );
}

export default App;
