(() => {
  'use strict';
  const links = window.HUSKY_LINKS || {};
  function publicHttpsUrl(value) {
    if (typeof value !== 'string' || !value.trim()) return null;
    try {
      const url = new URL(value);
      if (url.protocol !== 'https:' || url.username || url.password) return null;
      return url.href;
    } catch { return null; }
  }
  function enableLink(value, anchorId, pendingId) {
    const url = publicHttpsUrl(value);
    if (!url) return null;
    const anchor = document.getElementById(anchorId);
    anchor.href = url;
    anchor.hidden = false;
    document.getElementById(pendingId).hidden = true;
    return url;
  }
  enableLink(links.membershipUrl, 'join-link', 'join-pending');
  const signInUrl = enableLink(links.signInUrl, 'signin-link', 'signin-pending');
  if (signInUrl) document.getElementById('nav-signin').href = signInUrl;
})();
