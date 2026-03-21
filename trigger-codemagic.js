#!/usr/bin/env node
/**
 * Запуск сборки Codemagic
 * Использование: CODEMAGIC_TOKEN=xxx CODEMAGIC_APP_ID=xxx CODEMAGIC_WORKFLOW_ID=xxx node trigger-codemagic.js
 * Токен: Codemagic → Settings → Integrations → Codemagic API
 * App ID и Workflow ID: Codemagic → ваше приложение → Workflows
 */
const https = require('https');

const token = process.env.CODEMAGIC_TOKEN || process.env.CODEMAGIC_API_TOKEN;
const appId = process.env.CODEMAGIC_APP_ID;
const workflowId = process.env.CODEMAGIC_WORKFLOW_ID || 'ios-workflow';

if (!token || !appId) {
  console.log('Нужны переменные: CODEMAGIC_TOKEN, CODEMAGIC_APP_ID');
  console.log('Workflow ID по умолчанию: ios-workflow');
  process.exit(1);
}

const body = JSON.stringify({ appId, workflowId, branch: 'main' });
const req = https.request({
  hostname: 'api.codemagic.io',
  path: '/builds',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-auth-token': token,
    'Content-Length': Buffer.byteLength(body),
  },
}, (res) => {
  let data = '';
  res.on('data', (ch) => data += ch);
  res.on('end', () => {
    if (res.statusCode === 200) {
      const json = JSON.parse(data);
      console.log('Сборка запущена:', json.buildId);
      console.log('Статус: https://codemagic.io/apps/' + appId + '/builds');
    } else {
      console.error('Ошибка', res.statusCode, data);
    }
  });
});
req.on('error', (e) => console.error(e.message));
req.write(body);
req.end();
