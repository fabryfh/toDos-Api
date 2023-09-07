import ToDo from "../../models/toDos.model.js";

export const getAllToDos = async (req, res) => {
  try {
    const toDos = await ToDo.findAll();
    res.json(toDos);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getToDosById = async (req, res) => {
    try {
        const {id} = req.params;
        const toDo = await ToDo.findByPk(id);
        res.json(toDo);
      } catch (error) {
        res.status(400).json(error);
      }
};

export const postTodos = async (req, res) => {
    try {
        const { body } = req;
        const toDo = await ToDo.create(body);
        res.status(201).json(toDo);
      } catch (error) {
        res.status(400).json(error);
      }
};

export const putTodos = async (req, res) => {
    try {
        const {id} = req.params;
        const { body } = req;
        const toDo = await ToDo.update(body,{
          where: {id},  
        });
        res.status(204).end();
      } catch (error) {
        res.status(400).json(error);
      }
};

export const patchTodos = async (req, res) => {
    try {
        const {id} = req.params;
        const { body } = req;
        const toDo = await ToDo.update(body,{
          where: {id},  
        });
        res.status(204).end();
      } catch (error) {
        res.status(400).json(error);
      }
};

export const deleteTodos = async (req, res) => {
    try {
        const {id} = req.params;
        const toDo = await ToDo.destroy({
            where: {id},  
        });
        res.status(204).end();
      } catch (error) {
        res.status(400).json(error);
      }
};