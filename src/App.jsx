import { Footer } from "./home-sections";
import Nav from "./components/nav";
import { Home, Games } from "./pages";
import { Route, Routes } from "react-router-dom";
const App = () => (
  <main className="relative">
    <Nav />
    {/* Routing, adds multipage functionality*/}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<Games />} />
    </Routes>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
