# Primeira Aplicação React

## Sobre o projeto

Este projeto consiste em uma primeira aplicação desenvolvida com React e Vite, com o objetivo de praticar os conceitos fundamentais de JSX, componentização, propriedades (props) e renderização dinâmica de listas.

## Tecnologias utilizadas

- React
- JavaScript
- Vite
- CSS

## Estrutura do projeto

src/
├── Components/
│   │   └── Card.jsx
│   │   └── Footer.jsx
│   │   └── Header.jsx
│       └── Lista.jsx
├── App.jsx
├── index.css
└── main.jsx


## Componentes desenvolvidos

- **Header:** apresenta o título da aplicação.
- **Footer:** apresenta o texto do rodapé.
- **Card:** recebe título e descrição por meio de props.
- **Lista:** recebe um array de strings e renderiza seus elementos utilizando o método `map()`, com a propriedade `key`.
- **App:** integra e organiza os componentes da aplicação.

## Conceitos aplicados

- **JSX:** permite escrever estruturas semelhantes ao HTML dentro do JavaScript.
- **Componentização:** divide a interface em componentes independentes e reutilizáveis.
- **Props:** permitem transmitir informações de um componente pai para um componente filho.
- **map():** percorre arrays e permite renderizar listas dinamicamente.
- **Key:** identifica individualmente os elementos de uma lista.
- **Fragment:** permite agrupar múltiplos elementos sem adicionar um elemento HTML extra ao DOM.

## Reflexão

### 1. Explique a diferença entre a abordagem imperativa (JavaScript puro/manipulação do DOM) e a declarativa (React).

A abordagem imperativa consiste em descrever passo a passo como uma operação deve ser realizada, manipulando diretamente os elementos do DOM por meio do JavaScript. Já a abordagem declarativa consiste em definir como a interface deve ser apresentada, deixando que o React gerencie as atualizações conforme os dados e estados da aplicação.

### 2. Por que o Virtual DOM otimiza a performance?

O Virtual DOM é uma representação da interface mantida pelo React. Quando ocorre uma atualização, o React compara a nova representação com a anterior, identifica as diferenças e aplica as alterações necessárias no DOM real. Esse processo evita manipulações desnecessárias e torna a atualização da interface mais eficiente.


Desenvolvido como atividade prática de introdução ao React.
