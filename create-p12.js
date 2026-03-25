/**
 * Конвертация .cer в .p12 для Codemagic
 * Запуск: node create-p12.js
 * 
 * Требуется: скачанный distribution.cer из Apple Developer
 * Переименуйте скачанный файл в distribution.cer и положите в эту папку
 */
const forge = require('node-forge');
const fs = require('fs');

let cerFile = process.argv[2];
if (cerFile && fs.existsSync(cerFile)) {
  convertCer(cerFile);
} else if (fs.existsSync('distribution.cer')) {
  convertCer('distribution.cer');
} else {
  cerFile = fs.readdirSync('.').find(f => f.endsWith('.cer'));
  if (cerFile) convertCer(cerFile);
  else {
    console.log('ERROR: Put the downloaded .cer file in this folder');
    console.log('Usage: node create-p12.js <filename.cer>');
    process.exit(1);
  }
}

function convertCer(cerFile) {
  const pki = forge.pki;
  
  const cerBuffer = fs.readFileSync(cerFile, 'binary');
  const cert = pki.certificateFromAsn1(forge.asn1.fromDer(cerBuffer));
  
  const keyPem = fs.readFileSync('private.key', 'utf8');
  const privateKey = pki.privateKeyFromPem(keyPem);
  
  const p12Asn1 = forge.pkcs12.toPkcs12Asn1(
    privateKey,
    [cert],
    'codemagic',  // пароль для .p12 - запомните!
    { algorithm: '3des', generateLocalKeyId: true }
  );
  
  const p12Der = forge.asn1.toDer(p12Asn1).getBytes();
  fs.writeFileSync('codemagic.p12', p12Der, { encoding: 'binary' });
  
  console.log('OK: Created codemagic.p12');
  console.log('');
  console.log('Password for .p12: codemagic');
  console.log('');
  console.log('Upload codemagic.p12 to Codemagic -> Code signing identities -> iOS certificates');
}
