import type { Task } from "./types";

export function updateTask(
  tasks: Task[],
  id: number,
  changes: Omit<Partial<Task>, "id">,
): Task[] {
  const taskExists = tasks.some((task) => task.id === id);

  if (!taskExists) {
    throw new Error(`Task com id ${id} não encontrada`);
  }

  return tasks.map((task) =>
    task.id === id
      ? { ...task, ...changes }
      : task,
  );
}