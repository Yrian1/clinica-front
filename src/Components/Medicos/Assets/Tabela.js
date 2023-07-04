function Tabela({vetor, deletar, atualizar}){
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>crm</th>
                    <th>especialidade</th>
                </tr>
            </thead>

            <tbody>
                {
                    vetor.map((obj, indice) => (
                        <tr key ={indice}>
                            <td>{indice +1}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.email}</td>
                            <td>{obj.crm}</td>
                            <td>{obj.especialidade}</td>
                            <td><button onClick = {() => deletar(obj.crm)} className="btn btn-success">Deletar</button></td>
                            <td><button onClick={() => atualizar(obj.crm)} className="btn btn-success">Atualizar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )

}
export default Tabela;