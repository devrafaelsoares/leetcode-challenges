export type Case<T> = {
    id: number;
    description: string;
    input: T;
    output: any;
};
