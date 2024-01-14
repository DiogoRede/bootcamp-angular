# Introdução ao Ecossistema [Angular](https://angular.io/)

## Aprendizado ([Documentação](https://angular.io/docs))

- O que é o framework Angular (Definições, Estrategias):
    - SPAs.
    - Camadas.
- AngularJs x Angular

- Camadas de responsabilidade:
    - Camada 1: Componentes.

            Componente é um elemento visual, custonizével e reutilizável. Exemplo: Card de noticias.

    - Camada 2: Gerenciamento de estado.

            Refere-se à prática de controlar e manter os dados e o estado da aplicação de maneira organizada e eficiente. Exemplo: Verificar se um botão está disponivel ou indisponivel e mudar as cores, me lembrou um pouco o BLOC do Flutter.

    - Camada 3: Roteamento.

            Responsável pela forma de navegar fazendo a troca e URL sem recarregar a página. Exemplo: app/login | app/home

    - Camada 4: Renderização.

            Responsável por decidir a melhor maneira de acessar e entregar para o browser o componente pronto para ser desenhado sem complicações. 
            3 Tipos de estrategias:
                - 100% Server
                - Parte Server e parte Client
                - 100% Client
