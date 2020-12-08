# W2Bit-Bus-Station

Sistema  simplificado para preenchimento de vagas em uma estação de ônibus.

# Utilização


## Instalação do postgres

Crie a configuração do repositório de arquivos:

sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'


### Importar a chave de assinatura do repositório:

wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

### Atualize as listas de pacotes:

sudo apt-get update

### Instale a versão mais recente do PostgreSQL.Se você quiser uma versão específica, use 'postgresql-12' ou similar em vez de 'postgresql':

sudo apt-get -y install postgresql


### Sugerida a instalação do Pgadmin4 seguindo instalação no link:

https://www.pgadmin.org/download/pgadmin-4-apt/

### Configurar database localmente

    username: postgres,
    password: root,
    database: database_development,
    host: 127.0.0.1,
  
### Fazendo migração no código
 
Instalar dependências utilizando: 


npm install 


Após isso utilizar o comando sequelize-cli db:migrate 

### Running
 Por fim é possível utilizar a API localmente utilizando um dos comandos:

```Node
node app.js 
  
npm start


Para uso em produção a partir do Heroku seguir documentação:

https://docs.google.com/document/d/1s6m3XzH1DdY2mgORFeGGms-1dTj1oOXxvBDjiPppqAM/edit?usp=sharing


## License
[MIT](https://choosealicense.com/licenses/mit/)
