
document.addEventListener('alpine:init', () => {

    if (window.localStorage.getItem('isLocked') === null) {
        window.localStorage.setItem('isLocked', 'true');
    }

    Alpine.store('theme', {
        dark: window.localStorage.getItem('dark') === 'true',
        toggle() {
            this.dark = !this.dark;
            window.localStorage.setItem('dark', this.dark);
            // Forzar el reinicio de la animación del encabezado
            const header = document.querySelector('header');
            if (header) {
                // 1. Quitar la animación actual
                header.style.animation = 'none';
                // 2. Forzar un "reflow" para que el navegador aplique el cambio
                void header.offsetWidth;
                // 3. Volver a aplicar la animación para que se reinicie
                header.style.animation = 'gradientShift 5s ease';
            }

            if (this.dark) {
                const iconCircle = document.querySelector('#myIcon circle');
                if (iconCircle) {
                    iconCircle.setAttribute('fill', 'blue');
                }
            }
        }
    });

    Alpine.data('companyTabs', () => ({
        aiLinks: [],
        links: [],

        init() {
            const uniqueLinks = [];
            const seen = new Set();

            for (const link of linksData) {
                const hrefKey = String(link?.href || '').trim().toLowerCase();
                const idKey = String(link?.id || '').trim().toLowerCase();
                const key = hrefKey || `id:${idKey}`;

                if (!key || seen.has(key)) {
                    continue;
                }

                seen.add(key);
                uniqueLinks.push(link);
            }

            this.aiLinks = uniqueLinks.filter((link) => String(link.type || '').toLowerCase() === 'ai');
            this.links = uniqueLinks.filter((link) => String(link.type || '').toLowerCase() !== 'ai');
        },

        hostname(url) {
            try {
                const parsed = new URL(url, window.location.href);
                return parsed.hostname || parsed.pathname;
            } catch (error) {
                return url;
            }
        }
    }));

    Alpine.data('buttonList', () => ({
        buttonsgoogle: linksButton.slice(0, 2),
        buttonsdev: linksButton.slice(2, 5),
    }));

    Alpine.data('inactivity', () => ({
        isLocked: window.localStorage.getItem('isLocked') === 'true',
        inactivityTimer: null,
        correctCode: '2025',
        inputCode: '2025',
        errorMessage: '',
        
        init() {
            this.resetTimer();
            window.addEventListener('mousemove', () => this.resetTimer());
            window.addEventListener('keydown', () => this.resetTimer());
            window.addEventListener('click', () => this.resetTimer());
            window.addEventListener('scroll', () => this.resetTimer());
            this.$nextTick(() => {
                if (this.$refs.codeInput) {
                    this.$refs.codeInput.focus();
                }
            });
        },

        lockPage() {
            window.localStorage.setItem('isLocked', 'true');
            this.isLocked = true;
            this.inputCode = '';
            this.errorMessage = '';
            this.$nextTick(() => {
                if (this.$refs.codeInput) {
                    this.$refs.codeInput.focus();
                }
            });
        },

        unlockPage() {
            if (this.inputCode === this.correctCode) {
                window.localStorage.setItem('isLocked', 'false');
                this.isLocked = false;
                this.errorMessage = '';
                this.resetTimer();
            } else {
                this.errorMessage = 'Código incorrecto. Inténtalo de nuevo.';
                this.inputCode = '';
            }
        },

        resetTimer() {
            if (this.isLocked) return;
            clearTimeout(this.inactivityTimer);
            this.inactivityTimer = setTimeout(() => {
                this.lockPage();
            }, 120000); // 2 minutos
        }
    }));

});
