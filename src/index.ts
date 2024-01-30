import { Carrinho } from "./Carrinho";
import { VendaCredito } from "./VendaCredito";
import { VendaDebito } from "./VendaDebito";


const carrinhoTauam = new Carrinho()


carrinhoTauam.adicionarProduto({
    id: 1,
    descricao: 'abacaxi',
    categoria: 'frutas',
    valor: 850 ,
    quantidade: 12
})


carrinhoTauam.adicionarProduto({
    id: 2,
    descricao: 'uva',
    categoria: 'frutas',
    valor: 400 ,
    quantidade: 6
})

carrinhoTauam.adicionarProduto({
    id: 3,
    descricao: 'maça',
    categoria: 'frutas',
    valor: 900 ,
    quantidade: 8
})



// console.log(carrinhoTauam.resumo());

// console.log(carrinhoTauam.alterarQuantidadeProduto(3,15));
console.log(carrinhoTauam.removerProduto(2));
console.log(carrinhoTauam.resumo());


// const vendaTauam = new VendaCredito(carrinhoTauam)

// vendaTauam.aplicarDesconto()

const vendaDebitoTauam = new VendaDebito(carrinhoTauam)

vendaDebitoTauam.aplicarDesconto()

console.log(vendaDebitoTauam.finalizarPedido());









