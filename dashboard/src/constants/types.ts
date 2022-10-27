export type TicketType = FormInputs & {
    taskId: number;
}

export type FormInputs = {
    taskName: string;
    taskDesc: string;
    taskStatus: string;
}