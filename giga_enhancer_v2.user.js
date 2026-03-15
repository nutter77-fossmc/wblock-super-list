// ==UserScript==
// @name         GIGA Enhancer v2 (Dark Mode + Sponsor Skip + AI Hide)
// @namespace    charlie-giga
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    const observer = new MutationObserver(() => {
        document.querySelectorAll('button[aria-label*="Skip"], .ytp-ad-skip-button, .ytp-ad-overlay-close').forEach(btn => btn.click());
        document.querySelectorAll('[data-purpose="ai-generated"], [class*="sponsored"], [class*="promo"], .ytp-ce, ytd-promoted-video-renderer').forEach(el => el.style.display = 'none');
        if (!document.getElementById('giga-dark-mode')) {
            const style = document.createElement('style');
            style.id = 'giga-dark-mode';
            style.textContent = `
                html, body { filter: invert(1) hue-rotate(180deg) !important; background: #000 !important; }
                img, video, iframe, canvas { filter: invert(1) hue-rotate(180deg) !important; }
                .ytp-ad-progress { display: none !important; }
            `;
            document.head.appendChild(style);
        }
        if (window.location.href.includes('bit.ly') || window.location.href.includes('tinyurl')) {
            window.stop();
            window.location = 'about:blank';
        }
    });
    observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
})();
