const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const fileUpload = require("express-fileupload");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(fileUpload());

app.use("/public", express.static(path.join(__dirname, "static")));

port = 1234;

app.post("/vis", (req, res) => {
  if (!req.files) {
    res.redirect("/");
  } else {
    const dataset = req.files.dataset;

    dataset.mv("./static/data/dataset.json", (e) => {
      if (e) {
        res.redirect("/");
      } else {
        try {
          if (fs.existsSync("./static/data/dataset.json")) {
            fs.readFile("static/data/dataset.json", (e, data) => {
              let json_chat = JSON.parse(data);
              let groups = [];
              let items = [];
              json_chat.forEach((jc, i) => {
                // bikin grup atau disebut juga nama kontak yang di json nya
                groups.push({
                  id: i,
                  content: jc.subject ? jc.subject : jc.contactName,
                });

                // bikin item buat isian grupnya
                items.push({
                  id: i,
                  content: `${new Date(
                    jc.messages[0].timestamp
                  ).toLocaleDateString()} - ${new Date(
                    jc.messages[jc.messages.length - 1].timestamp
                  ).toLocaleDateString()}`,
                  fullContent: JSON.stringify(jc.messages),
                  group: i,
                  start: new Date(jc.messages[0].timestamp),
                  end: new Date(jc.messages[jc.messages.length - 1].timestamp),
                });
              });
              res.render("visualisasi", {
                groups: groups,
                items: items,
              });
            });
          }
        } catch (error) {
          res.redirect("/");
        }
      }
    });
  }
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => console.log(`Server jalan di http://127.0.0.1:${port}`));
