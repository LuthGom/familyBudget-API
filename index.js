const express = require("express");
const routes = require("./routes");
const app = express();
const cors = require('cors')

const port = process.env.PORT || 3000;

app.use(cors());

routes(app);
app.listen(port, () => console.log(`Servidor rodando corretamente na porta ${port}`));

module.exports = app;