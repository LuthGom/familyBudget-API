const db = require("../models");
const sequelize = require('sequelize')
class DespesaController {
  static async criaDespesa(req, res) {
    try {
      const novaDespesa = req.body;
      // if(novaDespesa.descricao === await db.Despesas.findAll({where:{ descricao: novaDespesa.descricao}}){
      //   if(novaDespesa.data === await db.Despesas.findAll({where:{ descricao: novaDespesa.data}}))
      // }
      const geraNovaDespesa = await db.Despesas.create(novaDespesa);
      return res.status(200).json(geraNovaDespesa);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
  static async listaDespesas(req, res) {
    try {
      const todasAsDespesas = await db.Despesas.findAll();
      res.status(200).json(todasAsDespesas);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
  static async retornaDespesaPorId(req, res) {
    const { despesaId } = req.params;
    try {
      const trazDespesa = await db.Despesas.findOne({
        where: { id: despesaId },
      });
      return res.status(200).json(trazDespesa);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
  static async deletaDespesa(req, res) {
    const { despesaId } = req.params;
    try {
      await db.Despesas.destroy({ where: { id: despesaId } });
      return res.status(200).json(`Despesa de id ${despesaId} deletado!`);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
  static async atualizaDespesa(req, res) {
    const { despesaId } = req.params;
    const body = req.body;
    try {
      await db.Despesas.update(body, { where: { id: despesaId } });
      const despesaAtualizada = await db.Despesas.findOne({
        where: { id: despesaId },
      });
      return res.status(200).json(despesaAtualizada);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = DespesaController;
