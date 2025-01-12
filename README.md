# Projeto Rick and Morty - Consumindo API

Este é um projeto simples que consome a API pública de **Rick and Morty** para buscar informações sobre personagens da série. O usuário insere um número (ID do personagem) e o sistema retorna as informações sobre o personagem correspondente.

## Tecnologias Usadas

- **HTML**: Para a estrutura da página web.
- **CSS**: Para o estilo da página.
- **JavaScript**: Para consumir a API e exibir os resultados.
- **API**: [Rick and Morty API](https://rickandmortyapi.com/) - API pública que fornece dados sobre a série.

## Funcionalidades

- O usuário digita um **ID** de personagem (um número).
- O sistema faz uma requisição para a **API do Rick and Morty**.
- As informações do personagem, como **nome**, **imagem** e **status** são exibidas na página.

## Como Usar

### Passo 1: Clonar o Repositório

Primeiro, clone o repositório para sua máquina local:

```bash
git clone https://github.com/usuario/rick-and-morty-api.git
cd rick-and-morty-api
```

### Passo 2: Abra o Projeto

Abra o arquivo `index.html` em seu navegador para ver a interface.

### Passo 3: Digitar o ID do Personagem

1. Na interface da página, você verá um campo para digitar um **número de ID** do personagem.
2. O número deve ser o ID de um personagem da série Rick and Morty. Por exemplo, o **ID 1** corresponde a **Rick Sanchez**.
3. Clique no botão **"Buscar Personagem"**.

### Passo 4: Exibição dos Dados

Após a requisição para a API, as informações sobre o personagem serão exibidas na tela, como:

- **Nome**
- **Imagem**
- **Espécie**
- **Status**
- **Tipo**

### Passo 5: Exemplos

- **ID 1**: Rick Sanchez
- **ID 2**: Morty Smith
- **ID 3**: Summer Smith
- **ID 4**: Beth Smith

