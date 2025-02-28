// Importar módulo/bibliotecas
const http = require("http");
const url = require("url");

// Configurações de acesso ao servidor
const localhost = "127.0.0.1";
const port = 3000;

// Configuração do servidor
const server = http.createServer((req, res) => {
  // Instruções de configuração do servidor (navegador)
  res.statusCode = 200; // status ok
  res.setHeader("Content-Type", "text/plain; charset=utf-8"); // tipo do conteúdo

  let q = url.parse(req.url, true).query; // Consultando a string da URL

  // Obtendo os parâmetros como números
  const num1 = Number(q.num1); // Primeiro número
  const num2 = Number(q.num2); // Segundo número

  // Montagem da mensagem de retorno (template string)
  soma = () => {
    return `Primeiro Número: ${num1}
    Segundo Número: ${num2}
    Resultado da Soma: ${num1 + num2}`
  };

  res.write(soma()); // Mensagem no <body> da página
  res.end(); // Final da resposta
});

// "Rodar" o servidor
server.listen(
  port, // Porta de acesso ao servidor
  localhost, // Endereço (IP) do servidor
  () => console.log("Servidor rodando em http://127.0.0.1:3000")
);
