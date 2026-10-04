import { describe, expect, it } from "vitest";
import { calculatePayment } from "../src/payment";
import type { Payment, Task } from "../src/types";

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
    status: "concluída",
    hours: 3,
  },
  {
    id: 3,
    title: "Criar tela de perfil",
    status: "em andamento",
    hours: 5,
  },
];

describe("calculatePayment", () => {
  it("deve calcular o pagamento por task concluída", () => {
    const payment: Payment = {
      type: "perTask",
      amount: 50,
    };

    expect(calculatePayment(tasks, payment)).toBe(100);
  });

  it("deve calcular o pagamento por hora das tasks concluídas", () => {
    const payment: Payment = {
      type: "perHour",
      amount: 30,
    };

    expect(calculatePayment(tasks, payment)).toBe(210);
  });
});