import React, { Component } from "react";

export class Conta {
    constructor() {
        this.id = 0;
        this.descricao = "";
        this.valor = 0;
        this.desconto = 0;
        this.juros = 0;
        this.taxa = 0;
        this.valor_Final = 0;
        this.dt_Vencimento = "";
        this.dt_Pagamento = "";
        this.tipoId = 0;

    }
}

export class AddConta extends Component {
    constructor(props) {
        super(props);        
        this.state = { title: "", conta: new Conta(), loading: true };
        this.inicialize();
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSalvar = this.handleSalvar.bind(this);

    }
    
    async inicialize() {
        var id = this.props.match.params["id"];
        if (id) {
            const response = await fetch('api/Contas/' + id);
            const data = await response.json();
            this.setState({ title: "", conta: data, loading: false });
        } else {
            this.state = { title: "Novo Resgistro", conta: new Conta(), loading: false };
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
        this.props.history.push("/fetch-Contas");
    }

    handleSalvar(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        if (this.state.conta.id > 0) {
            const response1 = fetch('api/Contas/' + this.state.conta.id, { method: "PUT", body: data });
            window.location.href = "fetch-Contas";
        } else {
            const response2 = fetch('api/Contas/', { method: "POST", body: data });
            window.location.href = "fetch-Contas";

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
                        <label>Descrição</label>
                        <input className="form-control" type="text" name="descricao" defaultValue={this.state.conta.descricao} required />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <label>Valor</label>
                        <input className="form-control" type="text" name="valor" defaultValue={this.state.conta.valor}  />
                    </div>
                    <div className="col-md-6">
                        <label>Desconto</label>
                        <input className="form-control" type="text" name="desconto" defaultValue={this.state.conta.desconto} />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-4">
                        <label>Juros</label>
                        <input className="form-control" type="text" name="juros" defaultValue={this.state.conta.juros} />
                    </div>
                    <div className="col-md-4">
                        <label>Taxa</label>
                        <input className="form-control" type="text" name="taxa" defaultValue={this.state.conta.taxa} />
                    </div>
                    <div className="col-md-4">
                        <label>Valor Final</label>
                        <input className="form-control" type="text" name="valor_Final" defaultValue={this.state.conta.valor_Final} />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-4">
                        <label>Data Vencimento</label>
                        <input className="form-control" type="text" name="dt_Vencimento" defaultValue={this.state.conta.dt_Vencimento} />
                    </div>
                    <div className="col-md-4">
                        <label>Data Pagamento</label>
                        <input className="form-control" type="text" name="dt_Pagamento" defaultValue={this.state.conta.dt_Pagamento} />
                    </div>
                    <div className="col-md-4">
                        <label>Tipo</label>
                        <input className="form-control" type="text" name="tipoId" defaultValue={this.state.conta.tipoId} />
                    </div>
                </div>
                <input type="submit" className="btn btn-success" value="Enviar" />
                <button className="btn btn-danger" onClick={this.handleCancel}> Cancelar </button>
            </form>
        );
    }

}