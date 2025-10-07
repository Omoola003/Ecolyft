// server.js
require('dotenv').config();
const express = require('express');
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const ADMIN_WHATSAPP = process.env.ADMIN_WHATSAPP || '';
const RELAY_KEY = process.env.RELAY_KEY || '';

// Initialize WhatsApp client
const client = new Client({
  authStrategy: new LocalAuth({ dataPath: process.env.SESSION_DIR || './session' }),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  }
});

client.on('qr', (qr) => {
  console.log('--- QR for WhatsApp (scan with admin phone) ---');
  qrcode.generate(qr, { small: true });
});

client.on('authenticated', () => console.log('WhatsApp authenticated'));
client.on('auth_failure', (err) => console.error('Auth failure', err));
client.on('ready', () => console.log('WhatsApp client ready'));

// Helper: normalise phone number -> chat id
function toChatId(raw) {
  if (!raw) return null;
  const digits = raw.replace(/\D/g, '');          // remove +, spaces, etc
  return digits.endsWith('@c.us') ? digits : `${digits}@c.us`;
}

// Protected notify endpoint
app.post('/notify', async (req, res) => {
  try {
    const key = req.get('x-relay-key') || '';
    if (!RELAY_KEY || key !== RELAY_KEY) return res.status(401).json({ error: 'unauthorized' });

    const { name, organization, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'missing required fields' });
    }

    if (!client.info || !client.info.wid) {
      return res.status(503).json({ error: 'whatsapp client not ready' });
    }

    const adminChat = toChatId(ADMIN_WHATSAPP);
    if (!adminChat) return res.status(500).json({ error: 'admin number not configured' });

    const text = [
      '📩 *New Contact Form Submission*',
      `👤 Name: ${name}`,
      `🏢 Org: ${organization || '-'}`,
      `📧 Email: ${email}`,
      `📞 Phone: ${phone}`,
      `📝 Message:`,
      message
    ].join('\n');

    await client.sendMessage(adminChat, text);
    return res.json({ ok: true });
  } catch (err) {
    console.error('notify error', err);
    return res.status(500).json({ error: 'failed to send' });
  }
});

client.initialize();
app.listen(PORT, () => console.log(`Relay listening on ${PORT}`));
