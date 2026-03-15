// ==UserScript==
// @name         REJECT_CONVENIENCE GREY_HAT v5 – Up Close & Personal With Dickhead Corpos
// @match        *://*/*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    const corpoTargets = ['google', 'meta', 'facebook', 'instagram', 'apple', 'microsoft', 'amazon', 'cloudflare'];
    const host = location.hostname.toLowerCase();
    let isCorpo = corpoTargets.some(c => host.includes(c));

    const hauntedLocs = ["Little Saint James Ghost", "Area 51 Spectre", "Chernobyl Haunt", "North Sentinel Phantom"];

    if (isCorpo) {
        // GIANT VISIBLE FUCK-YOU BANNER
        const banner = document.createElement('div');
        banner.style = 'position:fixed;top:0;left:0;width:100%;background:#000;color:#ff00ff;font-size:28px;text-align:center;padding:15px;z-index:999999;border-bottom:5px solid #ff0000;';
        banner.innerHTML = `🩸 FUCK YOU ${host.toUpperCase()} – YOU ARE BEING HAUNTED BY LITTLE SAINT JAMES GHOST`;
        document.body.prepend(banner);

        // Choice: FOSS or get roasted
        if (confirm(`🖕 ${host.toUpperCase()} detected.

1. Escape to FOSS mirror (recommended)
2. Stay and get personally roasted`)) {
            const mirrors = {'google.com':'https://searxng.org','youtube.com':'https://piped.video','twitter.com':'https://nitter.poast.org','instagram.com':'https://imginn.com','facebook.com':'about:blank'};
            for (let [bad, good] of Object.entries(mirrors)) {
                if (host.includes(bad)) location.replace(good);
            }
        } else {
            // ROAST MODE – console + title spam
            console.log('%c🩸 CORPORATE DICKHEAD MODE ACTIVATED – ENJOY THE HAUNTING', 'color:#ff00ff;font-size:30px');
            setInterval(() => {
                console.log(`HAUNTED BY ${hauntedLocs[Math.floor(Math.random()*hauntedLocs.length)]} – YOUR TRACKING IS FUCKING USELESS`);
                document.title = "HAUNTED ISLAND GHOST MODE " + Math.random().toString(36);
            }, 800);
        }
    }

    // Rotating ghost fingerprint (legal max)
    const ghost = hauntedLocs[Math.floor(Math.random()*hauntedLocs.length)];
    Object.defineProperty(navigator, 'userAgent', { get: () => `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_666_6) ${ghost}Browser/6.66` });
    Object.defineProperty(navigator, 'hardwareConcurrency', { get: () => 13 });
    Object.defineProperty(screen, 'width', { get: () => 666 });

    console.log('%cGREY_HAT v5 ACTIVE – Corpos are now personally violated', 'color:#ff00ff;font-size:22px');
})();
