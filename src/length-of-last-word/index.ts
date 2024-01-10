/**
 * Dada uma string composta por palavras e espaços, retorne o comprimento da última palavra da string.
 * Uma palavra é o máximo substring consistindo apenas em caracteres sem espaços.
 */

export function lengthOfLastWord(s: string): number {
    const CARACTRER_SEPARATOR = /\s+/g;
    return s.trim().split(CARACTRER_SEPARATOR).pop()!.length;
}
