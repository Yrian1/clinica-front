import './App.css';
import Formulario from '../../Assets/Formulario';
import Tabela from '../../Assets/Tabela';
import { useEffect, useState } from 'react';

function App() {

  const paciente = {
    cpf : '',
    nome : '',
    telefone: '',
    email: '',
    endereco: ''

  }

  const pacienteAtt = {
    nome : '',
    telefone: '',
    endereco: ''

  }

  const[pacientes, setPacientes] = useState([]);
  const [objPaciente, setObjPaciente] = useState(paciente);
  const [objPacienteAtt, setObjPacienteAtt] = useState(pacienteAtt);
  const [btnCadastrar, setBtnCadastrar] = useState(true);

  const aoDigitar = (e) => {
    setObjPaciente({...objPaciente, [e.target.name]:e.target.value});
  }
  const aoDigitarObj = (e) => {
    setObjPacienteAtt({...objPacienteAtt, [e.target.name]:e.target.value});
  }

  const cadastrar = () => {
    fetch("http://localhost:8080/pacientes",{
      method:'post',
      body:JSON.stringify(objPaciente),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(response => response.json())
    .then(response_convertido => {

      if (response_convertido.mensagem !== undefined){
        alert(response_convertido.mensagem);
      }else{
        setPacientes([...pacientes, response_convertido])
        alert('cadastro realizado');
        limparFormulario();
      }
    })
  }  
  const deletar = (id) => {
    fetch("http://localhost:8080/pacientes/" + id,{
      method:'delete',
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
  //  .then(response => response.json())
  //  .then(response_convertido => {
      //alert(response_convertido.mensagem);

      let vetorTempo = [...pacientes];

      let indice = vetorTempo.findIndex((p) => {
        return p.cpf === objPaciente.cpf;
      });

      vetorTempo.slice(indice, 1);

      setPacientes(vetorTempo)

      limparFormulario();
 //   })
  }  
 const atualizarSend = (id) => {
  setObjPaciente(pacientes.find(p => {
    return p.cpf === objPaciente.cpf;
  }))
  
    console.log(objPaciente);
  //setObjPacienteAtt();
  
    fetch("http://localhost:8080/pacientes/" + objPaciente.cpf ,{
      method:'put',
      body:JSON.stringify(objPacienteAtt),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })

    console.log(objPacienteAtt);
    //.then(response => response.json())
    //.then(response_convertido => {

    //  if (response_convertido.mensagem !== undefined){
       // alert(response_convertido.mensagem);
    //  }else{
        alert('Atualizacao feita');
        limparFormulario();
    //  }
   // })
 
  }  
  const atualizar = (id) => {
    objPaciente.cpf = id;
    setBtnCadastrar(false);
  }
  const cancelar = () => {
    limparFormulario();
  }

  useEffect(()=>{
    fetch("http://localhost:8080/pacientes")
    .then(lista => lista.json())
    .then(listJson => setPacientes(listJson));
  }, []);

  const limparFormulario = () => {
    setObjPaciente(paciente);
    setObjPacienteAtt(pacienteAtt);
    setBtnCadastrar(true);
  }


  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} eventoObj={aoDigitarObj} cadastrar={cadastrar} obj={objPaciente} objAtt={objPacienteAtt} cancelar={cancelar} atualizarSend={atualizarSend}/>
      <Tabela vetor={pacientes}  deletar={deletar} atualizar={atualizar} />
    </div>
  );
}

export default App;
