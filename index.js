import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Bruno", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteBruno = new ContaCorrente(cliente1, 1001);
contaCorrenteBruno.depositar(500);

const conta2 = new ContaCorrente(cliente2, 1002);

let valor = 200;
contaCorrenteBruno.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);