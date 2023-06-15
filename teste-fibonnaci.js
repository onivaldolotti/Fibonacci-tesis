const fibonacci = 'AcaRQoYjlSlByityzQhvjnCNVpsaLeQPtGajQHVzbgabJuAiMHDxwfkcCwIGmZCTInlSiKvRKxAGzJsgmPeUBAReDamLzqgJgrXobzfoWiwvRPdFgJzIkSoJscWtVdEbuIRYhXOdHkayBdFIbHSyzIJtmGMhJTiFBaDIzrngCngdSnngUHFWpQpCwElHxunYWsiXKvFOkntcAHiXopTgIKkeovoLrBlPTtMfqTTAgrejUPgKeBsolCtAAjNtKBjfcAHiXopTgIKkeovoLrBlPTtMfqTTAgrejUPgKeBsolCtAAjNtKBjfcAHiXopTgIKkeovoLrBlPTtMfqTTAgrejUPgKeBsolCtAAjNtKBjfcAHiXopTgIKkeoviLrBlPTtMfqTTAgrejUPgKeBsolCtAAjNtKBjfcAHiXopTgIKkeovoLrBlPTtMfqTTAgrejUPgKeBsolCtAAjNtKBjfcAHiXopTgIKkeovoLrBlPTtMfqTTAgrejUPgKeBsolCtAAjNtKBjfcAHiXopTgIKkeovoLrBlPTtMfqTTAgrejUPgKeBsolCtAAjNtKBjfcAHiXopTgIlkeovoLrBlPTtMfqTTlgrejUPgleBsolCtAAjNtKBjfcAHiXopTgIKkeovoLrBlPTtMfqTTAgrejUPgKeBsolCtAAjNtKBjfcAHiXopTgIKkeovoLrBlPTtMfqTTAgrejUPgKeBsolCtAAjNtKBjf';
let n1 = 0, n2 = 1, nextTerm, prefixo = fibonacci[1];

for (let i = 2; i <= 14; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    prefixo+= fibonacci[n1 + n2];
    //posição da letra
    console.log(fibonacci[n1 + n2]);
    //numero da sequencia de fibonacci
    console.log(nextTerm);
}
prefixo = prefixo.toLocaleLowerCase();
prefixo = `${prefixo.substring(0,8)}.${prefixo.substring(8)}`;