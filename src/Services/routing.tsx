import { Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
import SignIn from '../Components/SignIn/SignIn';
import SignUp from '../Components/SignUp/SignUp';
import GraphlPage from '../Pages/GraphlPage/GraphlPage';

function RoutingApp() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/graph-ql" element={<GraphlPage />} />
      <Route path="*" element={<p>not found</p>} />
    </Routes>
  );
}
export default RoutingApp;
