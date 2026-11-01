const express = require("express");
const app = express();
const PORT = 3030;

app.get("/", (req, res) => {
  res.send(`<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Catálogo de Heróis</title>
  </head>
  <body>
    <h1>Catálogo de Heróis</h1>
    <p>
      Seja muito bem vindo ao portal de super heróis! Explore os Universos da
      Marvel e da DC.
    </p>
    <nav>
      <ul>
        <li><a href="/marvel">Ir para Marvel Comics</a></li>
        <li><a href="/dc">Ir para DC Comics</a></li>
      </ul>
    </nav>
    <hr>
    <h2>Personagens em Destaque</h2>
    <ul>
      <li><a href="/personagem/marvel/Thor">Thor (Marvel)</a></li>
      <li><a href="/personagem/marvel/Spiderman">Spiderman (Marvel)</a></li>
      <li><a href="/personagem/dc/Superman">superman (DC)</a></li>
      <li><a href="/personagem/dc/Batman">Batman (DC)</a></li>
    </ul>
  </body>
</html>`);
});

//Empresas
//Marvel
app.get("/marvel", (req, res) => {
  res.send(`<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Marvel Comics</title>
  </head>
  <body>
    <h1>Marvel Comics</h1>
    <p>
      Marvel comics é uma renomada editora americana de história em quadrinhos,
      famos por criar heróis icônicos a grupos deles com Spiderman, Quarteto
      Fantástico, Cavaleiro Fantasma, Motoquiro Fantasma, X-Man, Vingadores
      entre outros.
    </p>

    <h2>Personagens Disponiveis</h2>
    <ul>
      <li><a href="/personagem/marvel/Thor">Thor</a></li>
      <li><a href="/personagem/marvel/Spiderman">Spiderman</a></li>
      <li><a href="/personagem/marvel/Wolverine">Wolverine</a></li>
    </ul>
    <br />
    <a href="/">← Voltar à Página Inicial</a>
  </body>
</html>`);
});

//DC
app.get("/dc", (req, res) => {
  res.send(`<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DC Comics</title>
  </head>
  <body>
    <h1>DC Comics</h1>
    <p>
      A DC comics é uma Das maiores e mais antigas Empresas americana de
      história em quadrinhos, lar da trindade: Batman, Superman e Woder Woman
      (Mulher Maravilha).
    </p>

    <h2>Personagens Disponiveis</h2>
    <ul>
      <li><a href="/personagem/dc/Superman">Superman</a></li>
      <li><a href="/personagem/dc/Batman">Batman</a></li>
      <li><a href="/personagem/dc/WoderWoman">Woder Woman</a></li>
    </ul>
    <br />
    <a href="/">← Voltar à Página Inicial</a>
  </body>
</html>`);
});

//E por fim a rota com parametros obrigatórios
app.get("/personagem/:empresa/:nome", (req, res) => {
  const { empresa, nome } = req.params;
  const empresaMaiuscula = empresa.toUpperCase();
  res.send(`<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Detalhes: ${nome}</title>
  </head>
  <body>
    <h1>Detalhes do personagem</h1>
    <p>
      Empresa:<strong>
        ${empresaMaiuscula}
      </strong>
    </p>
    <p>
      <strong>
        Nome do Personagem:
      </strong>${nome}
    </p>

    
    <br />
    <a href="/${empresa.toLowerCase()}">← Voltar para ${empresaMaiuscula}</a> | 
      <a href="/">← Voltar à Página Inicial</a>
  </body>
</html>`);
});

//testar e que se salvem quem puder
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
