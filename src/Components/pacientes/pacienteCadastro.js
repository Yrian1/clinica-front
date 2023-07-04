function pacienteCadastro(){

const paciente = {
    cpf : 0,
    nome : '',
    telefone: '',
    email: '',
    endereco: {
      cep : '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: ''}

    }
    
  const [objPaciente, setPaciente] = useState(paciente);
}

export default pacienteCadastro;