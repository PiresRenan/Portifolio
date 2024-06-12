# Portfólio

## Autor

* Renan Santos Pires
* Email: renan.sp.121@hotmail.com
* Telefone: +55 11 99359-7029
* [LinkedIn Profile](https://br.linkedin.com/in/renan-sp/)
* 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Este projeto é um portfólio fullstack que demonstra minhas habilidades em desenvolvimento web, utilizando tecnologias modernas e relevantes para o mercado. O projeto é dividido em três partes principais:

* **Frontend:** Desenvolvido com React e TypeScript, utilizando Material UI (ou Ant Design) para componentes e Redux Toolkit (ou Zustand) para gerenciamento de estado.
* **Backend (Autenticação):** Implementado em Java com Spring Boot Security, responsável pela autenticação de usuários, gerenciamento de perfis e autorização de acesso.
* **Backend (Dados e IA/ML):** Construído em Python com FastAPI, focado no processamento de dados, integração com modelos de IA/ML e disponibilização de APIs RESTful.

## Funcionalidades

* **Autenticação:**
    * Cadastro e login de usuários.
    * Recuperação de senha.
    * Geração e validação de tokens JWT.
* **Gerenciamento de Usuários:**
    * Edição de perfil.
    * Gerenciamento de permissões.
* **Processamento de Dados:**
    * APIs RESTful para receber e processar dados.
    * Integração com modelos de IA/ML (opcional).
* **Outras funcionalidades:**
    * (Descreva aqui outras funcionalidades relevantes do seu portfólio)

## Tecnologias Utilizadas

* **Frontend:** React, TypeScript, Material UI (ou Ant Design), Redux Toolkit (ou Zustand), React Router.
* **Backend (Autenticação):** Java, Spring Boot, Spring Security, JWT.
* **Backend (Dados e IA/ML):** Python, FastAPI, PostgreSQL (ou MySQL), NumPy, Pandas, Scikit-learn (ou TensorFlow/PyTorch).

## Como Executar o Projeto

1. **Pré-requisitos:**
    * Java JDK (versão X ou superior)
    * Python (versão X ou superior)
    * Node.js e npm (ou yarn)
    * PostgreSQL (ou MySQL)
    * Docker (opcional, para facilitar a execução dos backends)
2. **Clonar o Repositório:**
    ```bash
    git clone [URL inválido removido]
    ```
3. **Instalar Dependências:**
    ```bash
    # No diretório portfolio-frontend:
    npm install (ou yarn install)

    # No diretório auth-service:
    ./mvnw clean install

    # No diretório data-service:
    pip install -r requirements.txt
    ```
4. **Configurar o Ambiente:**
    * Criar um banco de dados PostgreSQL (ou MySQL) e atualizar as configurações de conexão nos arquivos de configuração dos backends.
    * (Outras configurações específicas do seu projeto)
5. **Executar as Aplicações:**
    ```bash
    # No diretório portfolio-frontend:
    npm start (ou yarn start)

    # No diretório auth-service:
    ./mvnw spring-boot:run (ou usar Docker)

    # No diretório data-service:
    uvicorn main:app --reload (ou usar Docker)
    ```

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

Copyright (c) 2023 Renan Santos Pires
