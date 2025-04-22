const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(bodyParser.json());

app.post('/api/leads', (req, res) => {
  const { email, wallet } = req.body;
  const log = `Lead: ${email} | Wallet: ${wallet}\n`;
  fs.appendFileSync('leads.txt', log);
  console.log('Novo lead capturado:', log.trim());
  res.status(200).json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🔥 Backend rodando na porta ${PORT}`));