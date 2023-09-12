class Cliente{
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor<= 0)
        {
         return;
        }    
        this._saldo += valor;
    }
}


const cliente1 = new Cliente();
cliente1.nome = "Bruno";
cliente1.cpf = 1112223309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 888223309;


const contaCorrenteBruno = new ContaCorrente();

contaCorrenteBruno.agencia = 1001;


contaCorrenteBruno.depositar(-100);
contaCorrenteBruno.depositar(100);
contaCorrenteBruno.depositar(100);

const valorSacado = contaCorrenteBruno.sacar(50);
console.log(valorSacado)

console.log(contaCorrenteBruno)