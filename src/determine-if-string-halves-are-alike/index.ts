export function halvesAreAlike(s: string): boolean {
    const halfS = s.length / 2;
    const arrayString = Array.from({ length: s.length === 2 ? 2 : halfS }, _v => (_v = ''));

    for (let i = 0; i < s.length; i++) {
        if (i < halfS) {
            arrayString[0] += s[i];
            continue;
        }
        arrayString[1] += s[i];
    }
    return countVoewls(arrayString[0]) === countVoewls(arrayString[1]);
}

function countVoewls(sts: string): number {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;

    for (let i = 0; i < sts.length; i++) {
        if (vowels.has(sts[i].toLowerCase())) {
            count++;
        }
    }

    return count;
}
