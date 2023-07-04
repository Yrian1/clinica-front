import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Pacientes from '../Components/pacientes/App';
import Medicos from '../Components/Medicos/App';



function Rotas() {
 return ( 
 <BrowserRouter>
    <Routes>
        <Route path="/pacientes" element={<Pacientes/>} />
        <Route path="/medicos" element={<Medicos/>} />
    </Routes>
 </BrowserRouter>);
 
} export default Rotas;