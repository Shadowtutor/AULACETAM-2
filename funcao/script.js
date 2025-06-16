// AULA: O que é uma função?
// Uma função é um bloco de código que realiza uma tarefa específica.
// Ela pode receber "ingredientes" (parâmetros) e devolver um "prato pronto" (retorno).
// Isso ajuda a organizar e reutilizar o código.

//----------------------------------------------------------------------------------
// FUNÇÃO AUXILIAR: Validação de Campos
//----------------------------------------------------------------------------------
function validarInput(valor, elemento, nomeCampo) {
    if (valor === null || valor.trim() === "") {
        elemento.textContent = `Por favor, preencha o campo '${nomeCampo}'.`;
        return false;
    }
    return true;
}

//----------------------------------------------------------------------------------
// EXEMPLO 1: SOMAR
//----------------------------------------------------------------------------------
function calcularSoma() {
    const val1 = document.getElementById('soma-val1').value;
    const val2 = document.getElementById('soma-val2').value;
    const resultadoEl = document.getElementById('soma-resultado');

    if (!validarInput(val1, resultadoEl, 'Valor 1') || !validarInput(val2, resultadoEl, 'Valor 2')) {
        return;
    }

    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);
    const resultado = num1 + num2;

    resultadoEl.textContent = resultado;
    document.getElementById('soma-codigo').textContent = `function somar(valor1, valor2) {
  return valor1 + valor2;
}

// Executando a função com seus valores:
somar(${num1}, ${num2});

// Retorna: ${resultado}`;
}

//----------------------------------------------------------------------------------
// EXEMPLO 2: ÁREA DO RETÂNGULO
//----------------------------------------------------------------------------------
function calcularArea() {
    const largura = document.getElementById('area-largura').value;
    const comprimento = document.getElementById('area-comprimento').value;
    const resultadoEl = document.getElementById('area-resultado');

    if (!validarInput(largura, resultadoEl, 'Largura') || !validarInput(comprimento, resultadoEl, 'Comprimento')) {
        return;
    }

    const l = parseFloat(largura);
    const c = parseFloat(comprimento);
    const resultado = l * c;

    resultadoEl.textContent = `${resultado.toFixed(2)} m²`;
    document.getElementById('area-codigo').textContent = `function calcularArea(largura, comprimento) {
  return largura * comprimento;
}

// Executando a função com seus valores:
calcularArea(${l}, ${c});

// Retorna: ${resultado.toFixed(2)}`;
}

//----------------------------------------------------------------------------------
// EXEMPLO 3: VERIFICAR MAIORIDADE
//----------------------------------------------------------------------------------
function verificarIdade() {
    const idade = document.getElementById('idade-valor').value;
    const resultadoEl = document.getElementById('idade-resultado');

    if (!validarInput(idade, resultadoEl, 'Idade')) {
        return;
    }

    const i = parseInt(idade);
    let resultado;
    if (i >= 18) {
        resultado = "Pode tirar a CNH!";
    } else {
        resultado = "Ainda não pode dirigir.";
    }

    resultadoEl.textContent = resultado;
    document.getElementById('idade-codigo').textContent = `function verificarMaioridade(idade) {
  if (idade >= 18) {
    return "Pode tirar a CNH!";
  } else {
    return "Ainda não pode dirigir.";
  }
}

// Executando a função com seu valor:
verificarMaioridade(${i});

// Retorna: "${resultado}"`;
}

//----------------------------------------------------------------------------------
// EXEMPLO 4: CONVERTER TEMPERATURA
//----------------------------------------------------------------------------------
function converterTemperatura() {
    const celsius = document.getElementById('celsius-valor').value;
    const resultadoEl = document.getElementById('temp-resultado');

    if (!validarInput(celsius, resultadoEl, 'Temperatura')) {
        return;
    }

    const c = parseFloat(celsius);
    const resultado = (c * 9 / 5) + 32;

    resultadoEl.textContent = `${resultado.toFixed(1)} °F`;
    document.getElementById('temp-codigo').textContent = `function converterParaFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Executando a função com seu valor:
converterParaFahrenheit(${c});

// Retorna: ${resultado.toFixed(1)}`;
}

//----------------------------------------------------------------------------------
// EXEMPLO 5: NOME COMPLETO
//----------------------------------------------------------------------------------
function gerarNomeCompleto() {
    const nome = document.getElementById('nome-valor').value;
    const sobrenome = document.getElementById('sobrenome-valor').value;
    const resultadoEl = document.getElementById('nome-resultado');

    if (!validarInput(nome, resultadoEl, 'Nome') || !validarInput(sobrenome, resultadoEl, 'Sobrenome')) {
        return;
    }

    const resultado = `${nome} ${sobrenome}`;

    resultadoEl.textContent = resultado;
    document.getElementById('nome-codigo').textContent = `function juntarNomes(nome, sobrenome) {
  return nome + " " + sobrenome;
}

// Executando a função com seus valores:
juntarNomes("${nome}", "${sobrenome}");

// Retorna: "${resultado}"`;
}

//----------------------------------------------------------------------------------
// EXEMPLO 6: CALCULAR DESCONTO
//----------------------------------------------------------------------------------
function calcularDesconto() {
    const preco = document.getElementById('preco-original').value;
    const desconto = document.getElementById('percentual-desconto').value;
    const resultadoEl = document.getElementById('desconto-resultado');

    if (!validarInput(preco, resultadoEl, 'Preço') || !validarInput(desconto, resultadoEl, 'Desconto')) {
        return;
    }

    const p = parseFloat(preco);
    const d = parseFloat(desconto);
    const valorDesconto = p * (d / 100);
    const resultado = p - valorDesconto;

    resultadoEl.textContent = `R$ ${resultado.toFixed(2)}`;
    document.getElementById('desconto-codigo').textContent = `function calcularPrecoFinal(preco, desconto) {
  const valorDesconto = preco * (desconto / 100);
  return preco - valorDesconto;
}

// Executando a função com seus valores:
calcularPrecoFinal(${p}, ${d});

// Retorna: ${resultado.toFixed(2)}`;
}

//----------------------------------------------------------------------------------
// EXEMPLO 7: PAR OU ÍMPAR
//----------------------------------------------------------------------------------
function verificarParImpar() {
    const valor = document.getElementById('parimpar-valor').value;
    const resultadoEl = document.getElementById('parimpar-resultado');

    if (!validarInput(valor, resultadoEl, 'Número')) {
        return;
    }

    const num = parseInt(valor);
    const resultado = (num % 2 === 0) ? "É Par" : "É Ímpar";

    resultadoEl.textContent = resultado;
    document.getElementById('parimpar-codigo').textContent = `function checarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "É Par";
  } else {
    return "É Ímpar";
  }
}

// Executando a função com seu valor:
checarParOuImpar(${num});

// Retorna: "${resultado}"`;
}

//----------------------------------------------------------------------------------
// EXEMPLO 8: CONTAR CARACTERES
//----------------------------------------------------------------------------------
function contarCaracteres() {
    const texto = document.getElementById('texto-valor').value;
    const resultadoEl = document.getElementById('texto-resultado');

    const resultado = texto.length;

    resultadoEl.textContent = `${resultado} caracteres`;
    document.getElementById('texto-codigo').textContent = `function contarLetras(texto) {
  return texto.length;
}

// Executando a função com seu valor:
contarLetras("${texto}");

// Retorna: ${resultado}`;
}

//----------------------------------------------------------------------------------
// EXEMPLO 9: MÉDIA ESCOLAR
//----------------------------------------------------------------------------------
function calcularMedia() {
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const nota3 = document.getElementById('nota3').value;
    const resultadoEl = document.getElementById('media-resultado');

    if (!validarInput(nota1, resultadoEl, 'Nota 1') || !validarInput(nota2, resultadoEl, 'Nota 2') || !validarInput(nota3, resultadoEl, 'Nota 3')) {
        return;
    }

    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const n3 = parseFloat(nota3);
    const media = (n1 + n2 + n3) / 3;
    const situacao = media >= 7 ? `Aprovado com média ${media.toFixed(1)}` : `Reprovado com média ${media.toFixed(1)}`;

    resultadoEl.textContent = situacao;
    document.getElementById('media-codigo').textContent = `function calcularMedia(n1, n2, n3) {
  const media = (n1 + n2 + n3) / 3;
  if (media >= 7) {
    return \`Aprovado com média \${media.toFixed(1)}\`;
  } else {
    return \`Reprovado com média \${media.toFixed(1)}\`;
  }
}

// Executando a função com seus valores:
calcularMedia(${n1}, ${n2}, ${n3});

// Retorna: "${situacao}"`;
}

//----------------------------------------------------------------------------------
// EXEMPLO 10: CÁLCULO DE IMC
//----------------------------------------------------------------------------------
function calcularIMC() {
    const peso = document.getElementById('imc-peso').value;
    const altura = document.getElementById('imc-altura').value;
    const resultadoEl = document.getElementById('imc-resultado');

    if (!validarInput(peso, resultadoEl, 'Peso') || !validarInput(altura, resultadoEl, 'Altura')) {
        return;
    }

    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (a <= 0) {
        resultadoEl.textContent = "A altura deve ser maior que zero.";
        return;
    }

    const imc = p / Math.pow(a, 2);
    const resultado = `Seu IMC é ${imc.toFixed(2)}`;

    resultadoEl.textContent = resultado;
    document.getElementById('imc-codigo').textContent = `function calcularIMC(peso, altura) {
  // Math.pow(altura, 2) é o mesmo que altura * altura
  const imc = peso / Math.pow(altura, 2);
  return \`Seu IMC é \${imc.toFixed(2)}\`;
}

// Executando a função com seus valores:
calcularIMC(${p}, ${a});

// Retorna: "${resultado}"`;
}
