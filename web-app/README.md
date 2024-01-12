# Tutorial Node.js com MongoDB, Mongoose, Express e EJS

- Neste tutorial você vai aprender como criar uma aplicação web básica, apenas com listagem e cadastro, utilizando a stack Node.js, Express, EJS, Mongoose e MongoDB.

- https://www.luiztools.com.br/post/tutorial-nodejs-com-mongodb-mongoose-express-ejs/#3

- Repositório: *https://github.com/rflsoares/nodejs-mongodb-mongoose-express-ejs.git*

- Usando o mongodb em modo shell

```bash 
$ mongo //inicializa o banco
> use nome-do-banco //cria o banco de dados
> db.minha_colecao.insertOne({
    campo1: "valor1",
    campo2: "valor2",
    // outros campos e valores
}); //insere um registro

> db.users.find(); //lista os dados de users

> db.users.insertMany([
    { "username": "john_doe", "email": "john.doe@example.com", "firstName": "John", "lastName": "Doe" },
    { "username": "jane_smith", "email": "jane.smith@example.com", "firstName": "Jane", "lastName": "Smith" },
    { "username": "bob_jones", "email": "bob.jones@example.com", "firstName": "Bob", "lastName": "Jones" },
    { "username": "alice_wilson", "email": "alice.wilson@example.com", "firstName": "Alice", "lastName": "Wilson" },
    { "username": "charlie_brown", "email": "charlie.brown@example.com", "firstName": "Charlie", "lastName": "Brown" },
    { "username": "susan_miller", "email": "susan.miller@example.com", "firstName": "Susan", "lastName": "Miller" },
    { "username": "david_clark", "email": "david.clark@example.com", "firstName": "David", "lastName": "Clark" },
    { "username": "emily_taylor", "email": "emily.taylor@example.com", "firstName": "Emily", "lastName": "Taylor" },
    { "username": "michael_hall", "email": "michael.hall@example.com", "firstName": "Michael", "lastName": "Hall" },
    { "username": "olivia_white", "email": "olivia.white@example.com", "firstName": "Olivia", "lastName": "White" }
]); //Para inserir multiplos registros


```
