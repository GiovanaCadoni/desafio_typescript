export type TaskStatus =
| "a fazer"
| "em andamento"
| "concluída";

export type Task = {
    id: number;
    title: string;
    status: TaskStatus;
    hours: number;
};

export type Payment =
| {
    type: "perTask";
    amount: number;
}
| {
    type: "perHour";
    amount: number;
};