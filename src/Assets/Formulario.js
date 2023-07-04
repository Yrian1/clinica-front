function Formulario({botao, eventoTeclado, eventoObj, cadastrar, obj, objAtt, cancelar, atualizarSend}){
    return(
        <form>
            {
                botao
                ?
                <div>	
                    <input type='text' value={obj.cpf} onChange={eventoTeclado} name='cpf' placeholder='cpf' className='form-control' />
                    <input type='text' value={obj.nome} onChange={eventoTeclado} name='nome' placeholder='nome'  className='form-control' />
                    <input type='text' value={obj.email} onChange={eventoTeclado} name='email' placeholder='email' className='form-control' />
                    <input type='text' value={obj.telefone} onChange={eventoTeclado} name='telefone' placeholder='telefone' className='form-control' />
                    <input type='text' value={obj.endereco} onChange={eventoTeclado} name='endereco' placeholder='endereco' className='form-control' />
                    <input type='button' value='cadastrar' onClick={cadastrar} className='btn btn-primary'/>
                </div>
                :
                <div>
                    <input type='text' value={obj.cpf} onChange={eventoTeclado} name='cpf' placeholder='cpf' className='form-control' />
                    <input type='text' value={objAtt.nome} onChange={eventoObj} name='nome' placeholder='nome'  className='form-control' />
                    <input type='text' value={objAtt.telefone} onChange={eventoObj} name='telefone' placeholder='telefone' className='form-control' />
                    <input type='text' value={objAtt.endereco} onChange={eventoObj} name='endereco' placeholder='endereco' className='form-control' />
                    <input type='button' onClick={atualizarSend} value='atualizar' className='btn btn-primary'/>
                    <input type='button' onClick={cancelar} value='cancelar' className='btn btn-primary'/>
                </div>
            }
            


        </form>
        
         
    )

}
export default Formulario;