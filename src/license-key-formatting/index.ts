/**
 * Você recebe uma chave de licença representada como uma string s que consiste apenas em
 * caracteres alfanuméricos e travessões. A string é separada em n + 1 grupos por n travessões.
 * Você também recebe um número inteiro k.
 * 
 * Queremos reformatar a string s de modo que cada grupo contenha exatamente k caracteres, exceto
 * o primeiro grupo, que pode ser menor que k, mas ainda assim deve conter pelo menos um caractere.
 * Além disso, deve haver um travessão inserido entre dois grupos, e você deve converter todas as
 * letras minúsculas em maiúsculas.
 * Devolva a chave de licença reformatada.
 * 
    Example 1:

    Input: s = "5F3Z-2e-9-w", k = 4
    Output: "5F3Z-2E9W"
    Explanation: The string s has been split into two parts, each part has 4 characters.
    Note that the two extra dashes are not needed and can be removed.

    Example 2:

    Input: s = "2-5g-3-J", k = 2
    Output: "2-5G-3J"
    Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.

 */

export function licenseKeyFormatting(s: string, k: number): string {
    const licenseKey = {
        caracterSeparator: '-',
        result: '',
        count: 0,
    };

    s = s.toUpperCase();

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === licenseKey.caracterSeparator) continue;

        if (licenseKey.count === k) {
            licenseKey.result = licenseKey.caracterSeparator + licenseKey.result;
            licenseKey.count = 0;
        }

        licenseKey.result = s[i] + licenseKey.result;
        licenseKey.count++;
    }

    return licenseKey.result;
}
