import { Carrinho } from "./Carrinho";
import { IVendas } from "./IVendas";
import { Venda } from "./Vendas";


export class VendaDebito extends Venda implements IVendas {

    readonly desconto: number;

    constructor(carrinho: Carrinho){
        super(carrinho)
        this.desconto = 0.07
    }


    aplicarDesconto(): void {
        this.total = this.total + (this.total * this.desconto)
    }


    finalizarPedido(): string {
        return `Pedido Finalizado: R$ ${(this.total /100).toFixed(2)}`
    }
    
    

}