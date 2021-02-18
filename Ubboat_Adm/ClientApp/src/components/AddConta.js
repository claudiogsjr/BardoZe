import React, { Component } from "react"
export class Conta {
    constructor() {
        this.id = 0;
        this.descricao = "";
    }
}

export class AddConta extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", conta: new Conta(), loading: true };
        this.inicialize();
    }

    async inicialize() {
        var id = this.props.match.params["id"];
        if (id > 0) {
            const response = await fetch('api/Contas/' + id);
            const data = await response.json();
            this.setState({ title: "Edit", conta: data, loading: false });
        } else {
            this.setState({ title: "Create", conta: new Conta(), loading: false });
        }
    }

    render() {
        let contens = this.state.loading
            ? <p><em> Carregando***** </em></p>
            : this.renderCreateForm();

        return (
            <div>
                <h1> {this.state.title}</h1>
                <h1>Conta</h1>
                {contens}
            </div>
        );
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push("fetch-Conta");
    }

    handleSalvar(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        if (this.state.conta.id) {
            const response1 = fetch('api/Contas/' + this.state.conta.id, { method: "PUT", body: data });
            this.props.history.push("fetch-Conta");
        } else {
            const response1 = fetch('api/Contas/', { method: "POST", body: data });
            this.props.history.push("fetch-Conta");

        };
    }


    renderCreateForm() {
        return (
            <form onSubmit={this.handleSalvar}>
                <div className="form-group row">
                    <input type="hidden" name="id" value={this.state.conta.id} />
                </div>
                <div className="form-group row">
                    <div className="col-md-12">
                        <input className="form-control" type="text" name="Descricao" value={this.state.conta.descricao} required />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <input className="form-control" type="text" name="Valor" value={this.state.conta.valor} required />
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" type="text" name="Desconto" value={this.state.conta.desconto} />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Juros" value={this.state.conta.juros} />
                    </div>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Taxa" value={this.state.conta.taxa} />
                    </div>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Valor_Final" value={this.state.conta.valor_final} />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Dt_Vencimento" value={this.state.conta.dt_Vencimento} />
                    </div>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Dt_Pagamento" value={this.state.conta.dt_Pagamento} />
                    </div>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="TipoId" value={this.state.conta.tipoId} required />
                    </div>
                </div>
                <input type="submit" className="btn btn-success" value="Enviar" />
                <button type="submit" className="btn btn-success" value={this.state.conta.id}> Salvar </button>
                <button className="btn btn-danger" onClick={this.handleCancel}> Cancelar </button>
            </form>
        );
    }

}