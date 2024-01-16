export function subArrayGiveSum(arr: number[], S: number): number[] {
    let soma_atual = 0;
    let inicio = 0;

    for (let fim = 0; fim < arr.length; fim++) {
        soma_atual += arr[fim];

        while (soma_atual > S && inicio < fim) {
            soma_atual -= arr[inicio];
            inicio++;
        }

        if (soma_atual === S) {
            return [inicio + 1, fim + 1];
        }
    }
    return [-1];
}
