/**
 * Создание Certificate Signing Request (CSR) для Apple Developer
 * Запуск: node create-csr.js
 */
const forge = require('node-forge');
const fs = require('fs');

const pki = forge.pki;

// Генерация ключевой пары
const keys = pki.rsa.generateKeyPair(2048);

// Создание CSR
const csr = pki.createCertificationRequest();
csr.publicKey = keys.publicKey;
csr.setSubject([
  { name: 'commonName', value: 'Dmitriy Yenin' },
  { name: 'organizationName', value: 'MAM4Z2RUY2' },
  { name: 'countryName', value: 'RU' }
]);
csr.sign(keys.privateKey, forge.md.sha256.create());

const csrPem = pki.certificationRequestToPem(csr);
const keyPem = pki.privateKeyToPem(keys.privateKey);

fs.writeFileSync('request.csr', csrPem);
fs.writeFileSync('private.key', keyPem);

console.log('OK: Created request.csr and private.key');
console.log('');
console.log('Next steps:');
console.log('1. Go to Apple Developer -> Create Certificate');
console.log('2. Choose File -> select request.csr');
console.log('3. Continue -> Download the .cer file');
console.log('4. KEEP private.key safe - needed for Codemagic .p12 export');
