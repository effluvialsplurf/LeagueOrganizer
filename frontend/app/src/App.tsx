import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Layout from "./Layout.tsx";
import NotFound from "./NotFound.tsx";
import Bracket from "./pages/Bracket.tsx";
import League from "./pages/League.tsx";
import Settings from "./pages/Settings.tsx";
import Standings from "./pages/Standings.tsx";
import Stats from "./pages/Stats.tsx";

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bracket" element={<Bracket />} />
          <Route path="league" element={<League />} />
          <Route path="standings" element={<Standings />} />
          <Route path="stats" element={<Stats />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  )
}
