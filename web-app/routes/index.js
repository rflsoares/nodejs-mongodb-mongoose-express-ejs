var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {

  const db = require("../db");
  const Users = db.Mongoose.model('users', db.UserSchema, 'users');

  //lean() retorna um JSON text-plain ao invés de objetos Mongoose complexos.
  //exec() executa a consulta em si
  const docs = await Users.find({}).lean().exec();
  res.render('index', { title: 'Listando usuários', docs });
});

module.exports = router;
