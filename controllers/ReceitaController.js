const db = require("../models");

class ReceitaController {
  static async criaReceita(req, res) {
    const novaReceita = req.body;

    try {
      const geraNovaReceita = await db.Receitas.create(novaReceita);
      return res.status(200).json(geraNovaReceita);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
  static async listaReceitas(req, res) {
    try {
      const todasAsReceitas = await db.Receitas.findAll();
      res.status(200).json(todasAsReceitas);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
  static async retornaReceitaPorId(req, res) {
    const { receitaId } = req.params;
    try {
      const trazReceita = await db.Receitas.findOne({
        where: { id: receitaId },
      });
      return res.status(200).json(trazReceita);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
  static async deletaReceita(req, res) {
    const { receitaId } = req.params;
    try {
      await db.Receitas.destroy({ where: { id: receitaId } });
      return res.status(200).json(`Receita de id ${receitaId} deletado!`);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
  static async atualizaReceita(req, res) {
    const { receitaId } = req.params;
    const body = req.body;
    try {
      await db.Receitas.update(body, { where: { id: receitaId } });
      const receitaAtualizada = await db.Receitas.findOne({
        where: { id: receitaId },
      });
      return res.status(200).json(receitaAtualizada);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = ReceitaController;
