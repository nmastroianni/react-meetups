import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/new-meetup" element={<NewMeetup />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
