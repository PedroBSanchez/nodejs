const express = require("express");
const { use } = require("express/lib/application");
const UserModel = require("../src/models/user.model.js");

const app = express();
app.use(express.json());

//findAll
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//findById
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await UserModel.findById(id);
    res.status(201).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//create
app.post("/users", async (req, res) => {
  try {
    const users = await UserModel.create(req.body);
    res.status(201).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//update parcial
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//update total
app.put("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//delete
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await UserModel.findByIdAndRemove(id);
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}`));
