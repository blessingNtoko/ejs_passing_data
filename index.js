import express from "express";


const app = express();
const port = 4177;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const { fName, lName } = req.body;
  res.render("index.ejs", {numOfLettersInName: fName.length + lName.length});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 
