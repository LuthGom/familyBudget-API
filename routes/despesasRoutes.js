const {Router} = require('express');
const router = Router();
const DespesasController = require('../controllers/DespesaController');

module.exports = 
router
.post("/despesas", DespesasController.criaDespesa)
.get("/despesas", DespesasController.listaDespesas)
.get("/despesas/:despesaId", DespesasController.retornaDespesaPorId)
.delete("/despesas/:despesaId", DespesasController.deletaDespesa)
.put("/despesas/:despesaId", DespesasController.atualizaDespesa)