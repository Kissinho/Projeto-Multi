# Projeto Multi

Bem vindo ao Projeto Multi! Este é o meu primeiro projeto pessoal e independente em Angular. A seguir descreverei as funcionalidades e passo a passo para rodar ele na sua máquina

## Funcionalidades

O Projeto Multi é uma aplicação em Angular multifuncional, que te permite:
* Usar uma calculadora simples
* Ver a cotação do dólar e euro em tempo real, e calcular a quantidade necessária em reais
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
json-server --watch db.json
este comando acima fará o seu computador rodar localmente o banco de dados simulado, necessário para a "lista de a fazeres" funcionar corretamente

Agora você precisa fazer a aplicação em Angular rodar, abra outro terminal, vá até a pasta raíz do projeto e digite o seguinte comando:
ng serve -o

Este comando fará o seu computador rodar e automaticamente abrirá o projeto em uma guia no seu navegador padrão.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
