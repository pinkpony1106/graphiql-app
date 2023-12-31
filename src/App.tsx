import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import GraphlPage from './Pages/GraphlPage/GraphlPage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { TranslateContextProvider } from './Context/Context';
import InvalidRoute from './Components/404/InvalidRoute';

function App() {
  return (
    <TranslateContextProvider>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/graph-ql" element={<GraphlPage />} />
          <Route path="/404" element={<InvalidRoute />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
      <Footer />
    </TranslateContextProvider>
  );
}

export default App;
