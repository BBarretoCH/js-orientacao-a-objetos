class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Bruno";
cliente1.cpf = 1112223309;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 123456789;

cliente2.nome = "Alice";
cliente2.cpf = 888223309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

const cliente3Nome = "Alice";
const cliente3CPF = 888223309;
const cliente3Agencia = 1001;
const cliente3Saldo = 0;

console.log(cliente1);
console.log(cliente2);