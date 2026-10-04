import type { Payment, Task } from "./types";

const task: Task = {
    id: 1,
    title: "Criar tela de login",
    status: "em andamento",
    hours: 4,
};

const payment: Payment = {
    type: "perHour",
    amount: 30,
};

console.log(task);
console.log(payment);