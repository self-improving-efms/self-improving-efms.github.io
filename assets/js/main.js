document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('.nav');
    var navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            nav.classList.toggle('open');
        });
    }

    // Smooth scroll for in-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            try {
                if (targetId && targetId.length > 1) {
                    var el = document.querySelector(targetId);
                    if (el) {
                        e.preventDefault();
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        if (nav && nav.classList.contains('open')) nav.classList.remove('open');
                    }
                }
            } catch (_) { /* no-op */ }
        });
    });

    // (videos section removed)

    // Copy BibTeX
    var copyBtn = document.getElementById('copyBibtex');
    var bib = document.getElementById('bibtex');
    if (copyBtn && bib) {
        copyBtn.addEventListener('click', function () {
            var text = bib.innerText.trim();
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(function () {
                    copyBtn.innerText = 'Copied!';
                    setTimeout(function () { copyBtn.innerText = 'Copy BibTeX'; }, 1600);
                });
            } else {
                var area = document.createElement('textarea');
                area.value = text; document.body.appendChild(area); area.select();
                try { document.execCommand('copy'); } catch (_) { }
                document.body.removeChild(area);
                copyBtn.innerText = 'Copied!';
                setTimeout(function () { copyBtn.innerText = 'Copy BibTeX'; }, 1600);
            }
        });
    }

    // Year in footer
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
});


