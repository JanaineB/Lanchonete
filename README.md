# Lanchonete ![buildstatus](https://travis-ci.org/JanaineB/Lanchonete.svg?branch=master)

Esta contido nesse repositório a API back-end de uma lanchonete, a qual devolve: Cardapio, preço dos lanches do cardapio, ingredientes e preço dos lanches personalizados para um client/front-end. 
<br/><br/>
## Sumário 

1. [Design do código](#1-Design-do-código)
2. [Tecnologias usadas](#2-tecnologias-usadas)
3. [Set-up do projeto](#3-set-up-do-projeto)

<br/><br/>
## `1. Design do código e escolhas tecnicas`

  Para este projeto foi escolhido seguir uma arquitetura desacoplada, o que resulta em menos complexidade do codigo, facilita a manutençao e sustentaçao do projeto pelo time de desenvolvimento, outros beneficios resultantes do desacoplamento back-end/front-end, esta na maior disponibilidade da aplicaçao, pois caso uma das partes fique indisponivel, a outra segue operando, mesmo que sem os dados como no caso do front-end.
  
  Para a comunicação com o front-end o back-end oferece uma API REST que segue o conceito modular com o mini-aplicativo router do express, deixando a estrutura do projeto mais simples de compreender para o desenvolvedor. A escolha da API REST para se comunicar com o seu client é feita levando em consideraçao que este pode servir qualquer client que necessite desses dados, dando maior independencia, para ambas as partes que podem se comunicar atraves de requisições REST.
   
   Em relaçao ao padrão usada para a formatação do código, foi feito uso do plugging ESLint seguindo a configuração Standart para node.js, entretando faço notar que para objetos dicionário\JSON, embora o recomendado seja: "dic.chave", foi usado "dic['chave']", pois chaves contendo espaco entre as palavras, como em: "ingredientes['Hamburguer de carne']", resultariam em um erro durante a interpretação.
   
  O teste unitário é elaborado durante o TDD (Test Driven Developemnt) para testar as regras de negocios da lanchonete, como as funções de calculo de preço, promoção e validação dos ingredientes, resultando em maior qualidade no desenvolvimento. A integração continua dos testes é feita atraves do serviço Trevis CI, o qual ira rodar o comando "npm test" descrito no package.json, a cada commit feito neste repositório e pode ser averificado na aba de commits com o icone ✓ na cor verde.

## `2. Tecnologias usadas`
Abaixo se encontra as tecnologias utilizadas neste projeto:

  1.  Codificaçao do back-end: Node.js;
  2.  API: Express;
  3.  Framework de testes: Mocha;
  4.  Lib de Asserts: Chai;
  5.  CI: Travis;
  6.  Formaçao do código: ESLint.

## `3. Set-up do projeto`
Requisitos minimos para rodar esse projeto é: 
Npm e node.js v10.16.3

Para rodar esse projeto localmente siga o passo-a-passo:
 1. Clone esse repositório, abra o CMD e digite: 
 ``` 
 git clone https://github.com/JanaineB/Lanchonete.git
```
 2. Instale as dependências do projeto, vá para "/Lanchonete" e digite:
```
npm i package.json  
```
3. Para subir a API em localhost:8080, ainda em "/lanchonete" digite:
```
node index.js
```
ou, para aqueles que possuem nodemon:
```
nodemon
```
4. Para rodar todos os testes localmente, em "/lanchonete" digite:
```
npm test
```
