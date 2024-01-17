import { Carrinho } from "./Carrinho";
import { IVendas } from "./IVendas";
import { Venda } from "./Vendas";




export class VendaCredito extends Venda implements IVendas {

    readonly desconto: number

    constructor(carrinho: Carrinho){
        super(carrinho)
        this.desconto = 0.05
    }




    aplicarDesconto(): void {
       if(this.total > 10000){
        this.total = this.total - (this.total * this.desconto)
       }
    }


    finalizarPedido(): string {
        return `Pedido Finalizado. Total R$ ${(this.total /100).toFixed(2)}`
    }


    

}