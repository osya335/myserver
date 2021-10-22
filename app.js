const express = require("express");
const app  = express();
const port = 3000;
var ejs = require('ejs');
app.engine('ejs', ejs.renderFile);


// ルーティングの設定
/*
app.get("/", (req, res) =>{
  const data = {
    "message": "Hello world",
    "date": "2020-06-29"
  };

  res.json(data);
});
*/

app.get("/", (req, res) =>{
  res.sendFile(`${__dirname}/public/index.html`);
  console.log("/ へアクセスがありました");
});
/*
app.get("/", (req, res) =>{
  const name = req.query.name;
  res.send(`君の名は ${name}`);
  console.log("/ へアクセスがありました");
});
*/
app.get("/image/:file", (req, res) =>{
  const file = req.params.file;
  res.sendFile(`${__dirname}/public/image/${file}`);
  console.log(`/image/${file} へアクセスがありました`);
});


// POSTのクエリーを良い感じに処理する
app.use(express.urlencoded({extended: true}));

// ルーティングの設定
app.post("/detail", (req, res) =>{
  const oskind = req.body.oskind;
  const name = req.body.name;
  const date = req.body.date;
  

//  res.send(`OS: ${oskind}<br>名称: ${name}<br>登録日: ${date}`);

  res.render('TermDetail.ejs', {
    oskind: oskind,
    name: name,
    date: date
  });

  console.log("/ へアクセスがありました");
});






// HTTPサーバを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
