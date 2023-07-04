import './App.css';
import Formulario from './Assets/Formulario';
import Tabela from './Assets/Tabela';
import { useEffect, useState } from 'react';


function Medicos() {

  const medico = {
    crm : '',
    nome : '',
    telefone: '',
    email: '',
    especialidade: '',
    endereco: ''

  }

  const medicoAtt = {
    nome : '',
    telefone: '',
    endereco: ''

  }

  const[medicos, setMedicos] = useState([]);
  const [objMedico, setObjMedico] = useState(medico);
  const [objMedicoAtt, setObjMedicoAtt] = useState(medicoAtt);
  const [btnCadastrar, setBtnCadastrar] = useState(true);

  const aoDigitar = (e) => {
    setObjMedico({...objMedico, [e.target.name]:e.target.value});
  }
  const aoDigitarObj = (e) => {
    setObjMedicoAtt({...objMedicoAtt, [e.target.name]:e.target.value});
  }

  const cadastrar = () => {
    fetch("http://localhost:8080/medicos",{
      method:'post',
      body:JSON.stringify(objMedico),
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
        setMedicos([...medicos, response_convertido])
        alert('cadastro realizado');
        limparFormulario();
      }
    })
  }  
  const deletar = (id) => {
    fetch("http://localhost:8080/medicos/" + id,{
      method:'delete',
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
  //  .then(response => response.json())
  //  .then(response_convertido => {
      //alert(response_convertido.mensagem);

      let vetorTempo = [...medicos];

      let indice = vetorTempo.findIndex((p) => {
        return p.cpf === objMedico.crm;
      });

      vetorTempo.slice(indice, 1);

      setMedicos(vetorTempo)

      limparFormulario();
 //   })
  }  
 const atualizarSend = (id) => {
  setObjMedico(medicos.find(p => {
    return p.cpf === objMedico.crm;
  }))
  
    console.log(objMedico);
  //setObjPacienteAtt();
  
    fetch("http://localhost:8080/medicos/" + objMedico.crm ,{
      method:'put',
      body:JSON.stringify(objMedicoAtt),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })

    console.log(objMedicoAtt);
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
    objMedico.crm = id;
    setBtnCadastrar(false);
  }
  const cancelar = () => {
    limparFormulario();
  }

  useEffect(()=>{
    fetch("http://localhost:8080/medicos")
    .then(lista => lista.json())
    .then(listJson => setMedicos(listJson));
  }, []);

  const limparFormulario = () => {
    setObjMedico(medico);
    setObjMedicoAtt(medicoAtt);
    setBtnCadastrar(true);
  }


  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} eventoObj={aoDigitarObj} cadastrar={cadastrar} obj={objMedico} objAtt={objMedicoAtt} cancelar={cancelar} atualizarSend={atualizarSend}/>
      <Tabela vetor={medicos}  deletar={deletar} atualizar={atualizar} />
    </div>
  );
}

export default Medicos;
