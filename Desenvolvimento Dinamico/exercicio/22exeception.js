    // Classe base Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        if (!nome || !idade || !cargo) {
            throw new Error("Todos os campos devem ser preenchidos!");
        }

        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando como ${this.cargo}.`;
    }
}

// Classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, departamento) {
        super(nome, idade, "Gerente");
        if (!departamento) {
            throw new Error("O departamento deve ser preenchido!");
        }
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, linguagem) {
        super(nome, idade, "Desenvolvedor");
        if (!linguagem) {
            throw new Error("A linguagem de programação deve ser preenchida!");
        }
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

// Função para exibir erros no DOM
function exibirErro(mensagem) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p style="color:red;">Erro: ${mensagem}</p>`;
}

// Função para cadastrar funcionário
function cadastrarFuncionario() {
    try {
        const nome = document.getElementById("nome").value;
        const idade = document.getElementById("idade").value;
        const cargo = document.getElementById("cargo").value;
        const departamento = document.getElementById("departamento").value;
        const linguagem = document.getElementById("linguagem").value;

        let funcionario;

        if (cargo === "Gerente") {
            funcionario = new Gerente(nome, idade, departamento);
        } else if (cargo === "Desenvolvedor") {
            funcionario = new Desenvolvedor(nome, idade, linguagem);
        }

        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = `
            <p>${funcionario.seApresentar()}</p>
            <p>${funcionario.trabalhar()}</p>
            ${funcionario instanceof Gerente ? `<p>${funcionario.gerenciar()}</p>` : ''}
            ${funcionario instanceof Desenvolvedor ? `<p>${funcionario.programar()}</p>` : ''}
        `;
    } catch (error) {
        exibirErro(error.message);
    }
}

// Alterar visibilidade dos campos com base no cargo selecionado
document.getElementById("cargo").addEventListener("change", function() {
    const cargo = this.value;
    const departamentoField = document.getElementById("departamento");
    const linguagemField = document.getElementById("linguagem");
    const departamentoLabel = document.getElementById("departamentoLabel");
    const linguagemLabel = document.getElementById("linguagemLabel");

    if (cargo === "Gerente") {
        departamentoField.style.display = "block";
        departamentoLabel.style.display = "block";
        linguagemField.style.display = "none";
        linguagemLabel.style.display = "none";
    } else if (cargo === "Desenvolvedor") {
        linguagemField.style.display = "block";
        linguagemLabel.style.display = "block";
        departamentoField.style.display = "none";
        departamentoLabel.style.display = "none";
    }
});
