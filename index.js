import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Bruno";
cliente1.cpf = 1112223309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 888223309;


const contaCorrenteBruno = new ContaCorrente();

contaCorrenteBruno.agencia = 1001;
contaCorrenteBruno.cliente = cliente1;
contaCorrenteBruno.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2
conta2.agencia = 1002;

let valor = 200;
contaCorrenteBruno.transferir(valor, conta2);

console.log(conta2);
console.log(contaCorrenteBruno)