# Projeto Multi

Bem vindo ao Projeto Multi! Este é o meu primeiro projeto pessoal e independente em Angular. A seguir descreverei as funcionalidades e passo a passo para rodar ele na sua máquina

## Funcionalidades

O Projeto Multi é uma aplicação em Angular multifuncional, que te permite:
* Usar uma calculadora simples
* Ver a cotação do dólar e euro em tempo real, e calcular a quantidade necessária em reais
* Observação: Para consultar o dólar e euro em tempo real, foi consumida uma API
* https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL
* Calcular seu IMC e obter imediatamente um feedback
* Lista de a fazeres, conectada a um "banco de dados" simulado com JSON SERVER

## O que é necessário para rodar na minha máquina?

* Você precisa ter o Node instalado
https://nodejs.org/en/download/
* Entre no site acima e faça o download

* Após instalar o Node, é necessário que você instale o Angular, para isso abra o seu terminal e digite o seguinte comando
* npm install @angular/cli

* Por fim, para poder rodar o banco de dados simulado, você precisa instalar o JSON SERVER, para isso, digite o seguinte comando no seu terminal
* npm install -g json-server

* Pronto! Você já tem as dependências necessárias para rodar o projeto.

## Rodando o projeto

Use seu terminal para chegar na pasta raíz do projeto, e execute o seguinte comando:
* json-server --watch db.json
* este comando acima fará o seu computador rodar localmente o banco de dados simulado, necessário para a "lista de a fazeres" funcionar corretamente

* Agora você precisa fazer a aplicação em Angular rodar, abra outro terminal, vá até a pasta raíz do projeto e digite o seguinte comando:
* ng serve -o

* Este comando fará o seu computador rodar e automaticamente abrirá o projeto em uma guia no seu navegador padrão.

## Tecnologias utilizadas no projeto

Neste projeto, foram utilizadas as seguintes tecnologias

* Angular
* JavaScript
* TypeScript
* SASS
* Bootstrap
* Google Fonts

## Conceitos de Angular utilizados

* Rotas
* Componentes
* Services
* Interpolação
* ngClass
* HttpClient
* ngFor
* ngForm
* Variáveis de template
* Event Binding
* Pipes

## Gostou? Teve alguma dúvida? Que tal me seguir ou me contatar no meu LinkedIn?

https://www.linkedin.com/in/rickson-queiroz/
