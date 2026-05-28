/**
 * Cloudflare Pages Function: nhận lead form và bắn tin nhắn vào Telegram.
 * Endpoint: POST /api/submit-lead
 *
 * Cần Environment Variables trên Cloudflare Pages:
 *   - TELEGRAM_TOKEN   : bot token (vd 1234567:ABC...)
 *   - TELEGRAM_CHAT_ID : chat_id nhận tin (vd 8012962415 hoặc -100... cho group)
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.TELEGRAM_TOKEN || !env.TELEGRAM_CHAT_ID) {
    return json({ ok: false, error: 'Missing TELEGRAM_TOKEN or TELEGRAM_CHAT_ID env vars' }, 500);
  }

  let data;
  try {
    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      data = await request.json();
    } else {
      const fd = await request.formData();
      data = Object.fromEntries(fd.entries());
    }
  } catch (e) {
    return json({ ok: false, error: 'Cannot parse form data: ' + e.message }, 400);
  }

  const name = clean(data.parent_name) || '(không điền)';
  const phone = clean(data.phone) || '(không điền)';
  const age = clean(data.child_age) || '(không điền)';
  const classInterest = clean(data.class_interest) || '(không chọn)';
  const source = clean(data.source) || '(không rõ)';

  // Honeypot anti-spam: nếu field "website" có giá trị → bot, trả về OK nhưng không gửi.
  if (clean(data.website)) {
    return json({ ok: true, spam: true });
  }

  // Validate số điện thoại tối thiểu
  if (!phone || phone === '(không điền)' || phone.replace(/\D/g, '').length < 8) {
    return json({ ok: false, error: 'Số điện thoại không hợp lệ' }, 400);
  }

  const vnTime = new Intl.DateTimeFormat('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date());

  const message =
    `🥋 <b>LEAD MỚI — Vovinam Lạng Sơn</b>\n\n` +
    `👤 <b>Tên:</b> ${escapeHtml(name)}\n` +
    `📞 <b>SĐT:</b> ${escapeHtml(phone)}\n` +
    `👶 <b>Tuổi con:</b> ${escapeHtml(age)}\n` +
    `📚 <b>Lớp quan tâm:</b> ${escapeHtml(classInterest)}\n` +
    `🔗 <b>Nguồn:</b> ${escapeHtml(source)}\n` +
    `⏰ ${vnTime}`;

  const telegramUrl = `https://api.telegram.org/bot${env.TELEGRAM_TOKEN}/sendMessage`;
  const tgResp = await fetch(telegramUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: env.TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  });

  if (!tgResp.ok) {
    const errText = await tgResp.text();
    return json({ ok: false, error: 'Telegram API failed', detail: errText }, 502);
  }

  return json({ ok: true });
}

function clean(v) {
  if (v == null) return '';
  return String(v).trim().slice(0, 200);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
