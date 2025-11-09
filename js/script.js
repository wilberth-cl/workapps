
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
            // 1. Quitar la animación actual
            header.style.animation = 'none';
            // 2. Forzar un "reflow" para que el navegador aplique el cambio
            void header.offsetWidth;
            // 3. Volver a aplicar la animación para que se reinicie
            header.style.animation = 'gradientShift 5s ease';
            if (this.dark) {
                document.getElementById('myIcon').querySelector('circle').setAttribute('fill', 'blue');
            }
        }
    });

    Alpine.data('linkList', () => ({
        appswork: linksData.slice(0, 8).sort(() => Math.random() - 0.5),
        appspace: linksData.slice(8, 14).sort(() => Math.random() - 0.5),
        appothers: linksData.slice(14, linksData.length).sort(() => Math.random() - 0.5),
    }))

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
