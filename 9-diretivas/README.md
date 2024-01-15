# Single Page Application com [Angular](https://angular.io/)

## Aprendizado ([Documentação](https://angular.io/docs))

- Angular CLI (command line interface - ng).

- [Ciclo de vida de componente](https://angular.io/guide/lifecycle-hooks).
    - Hooks.
        - OnInit (Criação do componente).
        - OnChanges (Sempre que acontece alguma alteração).
        - DoCheck (Temos mais 4 eventos {(init | checked) checked -> content -> view}).
        - OnDestroy (Destruir componente).

## Comandos usados

`npm install -g @angular/cli@14.1.2` (essa é a versão usada no bootcamp)

`ng new life-cycle` (criar projeto Angular)

    Observações: caso ao instalar ele não reconhecer o comando ng, mudar a politica de segurança do usuario no PowerShell, pois o comando ng executa scripts (win bloqueia).

`ng generate component nome-componente || ng g c nome-componente` (Cria um componente as configurações necessarias para o uso)