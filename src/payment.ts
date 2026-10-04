import type { Payment, Task } from "./types";

export function calculatePayment(
  tasks: Task[],
  payment: Payment,
): number {
  const completedTasks = tasks.filter(
    (task) => task.status === "concluída",
  );

  switch (payment.type) {
    case "perTask":
      return completedTasks.length * payment.amount;

    case "perHour":
      return completedTasks.reduce(
        (total, task) => total + task.hours * payment.amount,
        0,
      );

    default: {
      const exhaustiveCheck: never = payment;
      return exhaustiveCheck;
    }
  }
}