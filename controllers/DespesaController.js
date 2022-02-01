const db = require("../models");
class DespesaController {
  static async criaDespesa(req, res) {
    try {
      const novaDespesa = req.body;
      const testeDuplicidade = await db.Despesas.findOne({
        where: {
          descricao: novaDespesa.descricao,
          // mes: novaDespesa.mes
        }
      })
      // console.log(novaDespesa.mes.Date.getMonth().toString());
      if (!testeDuplicidade) {
        const geraNovaDespesa = await db.Despesas.create(novaDespesa);
        return res.status(200).json(geraNovaDespesa);
      } else {
        return res.status(400).json(`Receita já cadastrada neste mês!`)
      }
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
      console.log(trazDespesa.month(trazDespesa.data));
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
