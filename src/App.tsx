import Labs from "./Labs";
import Kambaz from "./Kambaz";
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
export default function App() {
 return (
  <HashRouter>
   <div>
   <a href="https://github.com/BupeshKumarR/kambaz-react-web-app.git" id="wd-github">Github - BupeshKumarR</a>
    <Routes>
     <Route path="/" element={<Navigate to="Kambaz"/>}/>
     <Route path="/Labs/*" element={<Labs />} />
     <Route path="/Kambaz/*" element={<Kambaz />} />

    </Routes>
   </div>
  </HashRouter>
);}
