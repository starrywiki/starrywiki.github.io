const wechatButton = document.querySelector('.wechat-copy');
const wechatFeedback = document.getElementById('wechat-copy-feedback');
let wechatFeedbackTimer;

function copyWechatFallback(value) {
  const field = document.createElement('textarea');
  field.value = value;
  field.readOnly = true;
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.append(field);
  field.select();
  const copied = document.execCommand('copy');
  field.remove();
  wechatButton.focus({ preventScroll: true });
  if (!copied) throw new Error('Copy unavailable');
}

function showWechatFeedback(message) {
  clearTimeout(wechatFeedbackTimer);
  wechatFeedback.textContent = message;
  wechatFeedback.hidden = false;
  const anchor = wechatButton.getBoundingClientRect();
  wechatFeedback.style.left = `${Math.max(12, Math.min(anchor.right + 10, innerWidth - wechatFeedback.offsetWidth - 12))}px`;
  wechatFeedback.style.top = `${Math.max(12, Math.min(anchor.top + (anchor.height - wechatFeedback.offsetHeight) / 2, innerHeight - wechatFeedback.offsetHeight - 12))}px`;
  wechatFeedbackTimer = setTimeout(() => { wechatFeedback.hidden = true; }, 2400);
}

wechatButton?.addEventListener('click', async () => {
  const value = wechatButton.dataset.wechat;
  try {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(value);
    } catch {
      copyWechatFallback(value);
    }
    showWechatFeedback(`${value} · Copied!`);
  } catch {
    showWechatFeedback(`WeChat: ${value}`);
  }
});
