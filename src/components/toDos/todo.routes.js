import { Router } from "express";
import {
  deleteTodos,
  getAllToDos,
  getToDosById,
  patchTodos,
  postTodos,
  putTodos,
} from "./todo.controllers.js";

const router = Router();

router.get("/todos", getAllToDos);
router.get("/todos/:id", getToDosById);
router.post("/todos", postTodos);
router.put("/todos/:id", putTodos);
router.patch("/todos/:id", patchTodos);
router.delete("/todos/:id", deleteTodos);

export default router;