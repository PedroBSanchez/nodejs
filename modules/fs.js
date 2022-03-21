const fs = require("fs");
const path = require("path");

// Criar uma pasta
/*
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }
  console.log("Pastar criada com sucesso!");
});
*/

// Criar um arquivo
/*
fs.writeFile(
  //                   pasta     arquivo
  path.join(__dirname, "/test", "test.txt"),
  "hello node",
  (error) => {
    if (error) {
      console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso");
  }
);
*/

// Adicionar à um arquivo
/*
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello My Friend",
  (error) => {
    if (error) {
      console.log("Erro: ", error);
    }
    console.log(`Arquivo alterado com sucesso`);
  }
);
*/

// Ler Arquivos

fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      console.log("Erro: ", error);
    }
    console.log(data);
  }
);
