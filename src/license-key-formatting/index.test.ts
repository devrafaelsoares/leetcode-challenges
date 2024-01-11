import { licenseKeyFormatting } from '.';
import { Case } from '../types/case';

type LicenseKeyFormatting = {
    s: string;
    k: number;
};

interface LicenseKeyFormattinCase extends Case {
    input: LicenseKeyFormatting;
}

const cases: LicenseKeyFormattinCase[] = [
    {
        id: 1,
        description: 'should return 5F3Z-2E9W when entering 5F3Z-2e-9-w with the group of 4 caracteres',
        input: { s: '5F3Z-2e-9-w', k: 4 },
        output: '5F3Z-2E9W',
    },
    {
        id: 2,
        description: 'should return 2-5G-3J when entering 2-5g-3-J with the group of 2 caracteres',
        input: { s: '2-5g-3-J', k: 2 },
        output: '2-5G-3J',
    },
];

describe('License Key Fornatting', () => {
    it.each<LicenseKeyFormattinCase>(cases)('Case: #$id - Description: $description', ({ input, output }) => {
        expect(licenseKeyFormatting(input.s, input.k)).toBe(output);
    });
});
