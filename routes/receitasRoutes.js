const {Router} = require('express');
const router = Router();
const ReceitasController = require('../controllers/ReceitaController');

module.exports = 
router
.post("/receitas", ReceitasController.criaReceita)
.get("/receitas", ReceitasController.listaReceitas)
.get("/receitas/:receitaId", ReceitasController.retornaReceitaPorId)
.delete("/receitas/:receitaId", ReceitasController.deletaReceita)
.put("/receitas/:receitaId", ReceitasController.atualizaReceita)