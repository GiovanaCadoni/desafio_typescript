import { describe, expect, it } from "vitest";
import { updateTask } from "../src/updateTask";
import type { Task } from "../src/types";

const tasks: Task[] = [
  {
    id: 1,
    title: "Criar tela de login",
    status: "concluída",
    hours: 4,
  },
  {
    id: 2,
    title: "Criar tela de cadastro",
    status: "em andamento",
    hours: 3,
  },
];

describe("updateTask", () => {
  it("deve atualizar uma tarefa sem modificar a lista original", () => {
    const updatedTasks = updateTask(tasks, 1, {
      title: "Atualizar tela de login",
      hours: 6,
    });

    expect(updatedTasks[0]).toEqual({
      id: 1,
      title: "Atualizar tela de login",
      status: "concluída",
      hours: 6,
    });

    expect(tasks[0]).toEqual({
      id: 1,
      title: "Criar tela de login",
      status: "concluída",
      hours: 4,
    });
  });

  it("deve lançar erro quando a tarefa não existe", () => {
    expect(() =>
      updateTask(tasks, 999, {
        title: "Tarefa inexistente",
      }),
    ).toThrow("Task com id 999 não encontrada");
  });
});