<h1>Family Budget API </h1>

## Descrição:

A presente aplicação é uma funcionalidade back-end em construção que administra receitas e despesas de orçamento familiar. Esta é uma API do tipo Rest, desenvolvida em JavaScript com NodeJS + Express em arquitetura MVC, tendo SQLite como banco de dados. Além disso, todas as operações do CRUD estão devidamente implementadas com os verbos HTTP condizentes.

Este projeto faz parte parte do Challenge Back End da Alura Educação.

## Status do Projeto

![Bagde](https://img.shields.io/badge/Status%20do%20Projeto-Em-Construção-red)

## Ferramentas Necessárias:

<p>Atenção nesta parte, pois para utilizar esta Api você precisará instalar algumas ferramentas fundamentais na sua máquina, como: <a href="https://www.gitkraken.com/download?utm_term=git&utm_campaign=1+%7C+1+GK+Git+GUI+-+Search&utm_source=adwords&utm_medium=ppc&hsa_acc=1130375851&hsa_cam=393455543&hsa_grp=23981425823&hsa_ad=550570964612&hsa_src=g&hsa_tgt=kwd-247385313&hsa_kw=git&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQiA-qGNBhD3ARIsAO_o7ym_H2X6ZGqwCZJqFF5FFzq4fVkZ1h6JujQY4yk9UI5bf2cnWf-Ez-EaAstwEALw_wcB">Git</a> e o JavaScript com <a href="https://nodejs.org/en/download/">NodeJS</a>, além do gerenciador de pacotes npm e a framework express. 
<strong>Observação</strong> é recomendável a utilização de um editor de código que tenha familiaridade, caso não tenha com nenhum, recomenda-se o <a href="https://code.visualstudio.com/download">VsCode</a> pela intuitividade do mecanismo.

# Dependências:

![Badge](https://img.shields.io/badge/"express"-"%5E4.17.1"-red)
![Badge](https://img.shields.io/badge/"sqlite3"-"%5E5.0.2"-red)
![Badge](https://img.shields.io/badge/"cors"-"%5E2.8.5"-red)
![Badge](https://img.shields.io/badge/"path"-"%5E2.8.5"-red)
![Badge](https://img.shields.io/badge/"moment"-"%5E2.8.5"-red)
![Badge](https://img.shields.io/badge/"sequelize"-"%5E2.8.5"-red)

# Dependências de desenvolvimento:

![Badge](https://img.shields.io/badge/"nodemon"-"%5E2.0.15"-red)
![Badge](https://img.shields.io/badge/"jest"-"%5E2.8.5"-red)
![Badge](https://img.shields.io/badge/"sequelize-cli"-"%5E2.8.5"-red)

## Iniciando passo a passo:

<ul> 
<li>Após a instalação das ferramentas, acesse o local em sua máquina onde deseja clonar o repositório, abra o terminal "Git Bash"
e rode o seguinte comando no terminal:</li>
<li> git clone https://github.com/LuthGom/familyBudget-API.git </li>
<li>Com o repositório aberto, instale as dependências necessárias com o seguinte comando no terminal:</li>
<li> npm install </li>
<li>Para instalar as dependências de desenvolvimento, rode o comando abaixo no terminal:</li>
<li> npm install nodemon jest sequelize-cli --save-dev</li>
<li>Para iniciar a aplicação basta rodar o comando abaixo via terminal:</li>
<li> npm start</li>
<li> O servidor iniciará na porta:3000 - acesse: http://localhost:3000/despesas e http://localhost:3000/despesas</li>
<li>Para gerar um novo database do SQLite, rode o comando abaixo:</li>
<li> npx sequelize-cli db:migrate </li>
</ul>

## Atenção:

<p>
<ol>
 <li>É essencial salientar que a versão do NodeJs utilizada para desenvolvimento é a v16.13.1 x LTS, ou seja, é pertinente a instalação de versão igual ou superior para a impecável execução da mesma.</li>
<li>Caso você por algum motivo venha a excluir o arquivo "database.sqlite3", que é o nosso banco de dados gerado com a ferramenta SQLite, rode o comando abaixo a fim de gerar outro banco de dados:</li>
<li> npx sequelize-cli db:migrate </li>
 </ol>
</p>

## Rotas (Despesas)

| Método | Rota | Descrição |
| ------ | ---- | --------- |
| **GET** | `/despesas` | Lista tods as despesas |
| **GET** | `/despesas{id}` | Busca a despesa pelo {id} |
| **POST** | `/despesas` | Adiciona uma nova despesa |
| **PATCH** | `/despesas/{id}` | Atualiza a despesa {id} |
| **DELETE** | `/despesas{id}` | Deleta a despesa pelo {id} |

## Rotas (Receitas)

| Método | Rota | Descrição |
| ------ | ---- | --------- |
| **GET** | `/receitas` | Lista tods as receitas |
| **GET** | `/receitas{id}` | Busca a despesa pelo {id} |
| **POST** | `/receitas` | Adiciona uma nova despesa |
| **PATCH** | `/receitas/{id}` | Atualiza a despesa {id} |
| **DELETE** | `/receitas{id}` | Deleta a despesa pelo {id} |


## Para cadastrar uma nova receita ou despesa:
<p> Operar o método HTTP Post no caminho da "url da API" + "despeas" ou "receitas" com todas as informações necessárias para preenchimento dos campos no banco de dados. Veja um exemplo da estrutura de um objeto para requisição </p>

```json
{
    "descricao": "string",
    "valor": float
}
```

## Para atualizar uma receita ou despesa:

<p>Operar o método HTTP Patch no caminho da "url da API" + "/receitas/id" ou "/receitas/id" contendo no corpo da requisição meramente os dados a serem alterados. Exemplo: supondo que apenas o campo senha será alterado: 

        "valor": int

Ou seja, não há necessidade de digitar todos os dados novamente.
</p>

## Autor 🌈

<img src="../midia/luth.jpeg" alt="Foto do autor, Luciano Mendes pardo, de cabelos chacheados e está de olhos fechados enconstado numa porta. Luciano está utilizando uma regata de crochê, baseada em granny squares, nas cores pretas, verde, roxo, azul, laranja, cinza e amarelo" width = 200px heigth= 200px>

<a href="https://www.linkedin.com/in/dev-luciano-mendes/">Luciano Mendes(Luth🌈) | Clique aqui para o meu Linkedin<a/>
<p>Um ex quase professor de Química!
Depois de 3 anos cursando a Licenciatura, abandonei a graduaçao antes que entrasse em moldes sociais rígidos
e perdesse o viés educacional presente em mim!</p>