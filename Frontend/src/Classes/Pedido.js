class Pedido {
  constructor(codigo) {
    this._codigo = codigo;
    this._pratos = [];
    this._horaDoPedido = new Date().toLocaleString();
  }

  get codigo() {
    return this._codigo;
  }

  get pratos() {
    return this._pratos;
  }

  get requestValue() {
    console.log(this._pratos);
    const value = this._pratos.reduce((value, prato) => {
      return (Number(prato.prato.preco) * prato.quantidade) + value;
    }, 0)
    return value;
  }

  addPrato({ prato, quantidade }) {
    const novoPrato = {
      prato: prato,
      quantidade: quantidade,
    };

    const changingPrato = this._encontrarPrato(prato.id)

    if (changingPrato !== -1) {
      this._changePrato(changingPrato, quantidade)
    }else {
      this._pratos.push(novoPrato);
    }
  }

  removePrato(pratoId) {
    this._pratos = this._pratos.filter(prato => prato.prato.id !== pratoId)
  }
  
  // Metodos utilitáios
  _encontrarPrato(pratoId) {
    return this.pratos.findIndex(p => p.prato.id === pratoId);
  }

  _changePrato(index, quantidade) {
    this._pratos[index].quantidade = quantidade
  }

}

export default Pedido;