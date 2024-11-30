import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ExamplePage from './pages/ExamplePage.jsx';
import LoginExamplePage from './pages/LoginExamplePage.jsx';
import CardsExamplePage from './pages/CardsExamplePage.jsx';

const linkStyle = {
  // 예제를 위한 임의의 CSS
  // 이 예제와 같이 JS의 객체로 CSS를 정의하는 것은 권장하지 않음.
  // module.css 파일을 만들어 CSS를 정의하는 것을 권장함.
  display: 'block',
  margin: '16px 12px',
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Link to="/example" style={linkStyle}>
              예제 페이지 보기
            </Link>
            <Link to="/login-example" style={linkStyle}>
              로그인 예제 페이지 보기
            </Link>
            <Link to="/cards-example" style={linkStyle}>
              카드들 예제 페이지 보기
            </Link>
          </>
        }
      />
      <Route path="/example" element={<ExamplePage />} />
      <Route path="/login-example" element={<LoginExamplePage />} />
      <Route path="/cards-example" element={<CardsExamplePage />} />
    </Routes>
  );
}

export default App;
