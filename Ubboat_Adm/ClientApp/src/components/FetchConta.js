import React, { Component } from "react"
import { Link } from 'react-router-dom'

export class FetchContas extends Component {
    static displayName = "Contas";

    constructor() {
        super();
        this.state = { contas: [], loading: true}
    }

    componentDidMount() {
        this.populaContasData();
    }

    static handleEdit(id) {
        window.location.href = "/conta/edit/" + id;
    }

    static handleDelete(id) {
        if (!window.confirm("Certeza que irá apagar conta: " + id)) {
            return;
        } else {
            fetch('api/contas/' + id, { method: 'delete' })
                .then(json => {
                    window.location.href = "fetch-Contas";
                    alert('Excluido');
                })
        }
    }

    static renderContasTabela(contas) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>juros</th>
                        <th>Taxa</th>
                        <th>Valor Final</th>
                        <th>Dt. Venc.</th>
                        <th>Dt. Pag</th>
                        <th>Tipo</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {contas.map(cont =>
                        <tr key={cont.id}>
                            <td>{cont.descricao}</td>
                            <td>{cont.valor}</td>
                            <td>{cont.juros}</td>
                            <td>{cont.taxa}</td>
                            <td>{cont.valor_Final}</td>
                            <td>{cont.dt_Vencimento}</td>
                            <td>{cont.dt_Pagamento}</td>
                            <td>{cont.tipoId}</td>
                            <td>
                                <button className="btn btn-success" onClick={(id_ => this.handleEdit(cont.id))}> Editar </button> &nbsp;
                                <button className="btn btn-danger" onClick={(id_ => this.handleDelete(cont.id))}> Excluir </button>
                            </td>
       
                        </tr>
                    )}
                </tbody>
            </table>
        );

    }

    render() {
        let contens = this.state.loading
            ? <p><em> Carregando***** </em></p>
            : FetchContas.renderContasTabela(this.state.contas);

        return (
            <div>
                <h1 id="tabelLabel"> Contas</h1>
                <p> Relação de contas</p>
                <p>
                    <Link to="/AddConta"> Registrar nova conta </Link>
                </p>
                {contens}
            </div>
            );
    }

    async populaContasData() {
        const response = await fetch('api/Contas');
        const data = await response.json();
        this.setState({ contas: data, loading: false });
    }
}