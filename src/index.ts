import { calculatePayment } from "./payment";
import type { Payment, Task } from "./types";

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

const paymentPerTask: Payment = {
  type: "perTask",
  amount: 50,
};

const paymentPerHour: Payment = {
  type: "perHour",
  amount: 30,
};

console.log(
  "Pagamento por task:",
  calculatePayment(tasks, paymentPerTask),
);

console.log(
  "Pagamento por hora:",
  calculatePayment(tasks, paymentPerHour),
);