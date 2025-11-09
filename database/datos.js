const linksData = [
    {
        id: 'Tareas',
        href: 'https://tasks.google.com/tasks/',
        label: 'Tareas',
        img: '<img src="./images/Google_Tasks_2021.svg" alt="" class="spinY" >',
        text: 'Tareas',
        border: 'border-blue-500'
    },
    {
        id: 'keep',
        href: 'https://keep.google.com/',
        label: 'keep',
        img: '<img src="./images/Google_Keep_2020_Logo.svg" alt="" class="spinY" >',
        text: 'keep',
        border: 'border-yellow-400'
    },
    {
        id: 'Hojas de cálculo',
        href: 'https://docs.google.com/spreadsheets/u/0/',
        label: 'Hojas de cálculo',
        img: '<img src="./images/google-sheets-logo-icon.svg" alt="" class="spinY" >',
        text: 'Hojas de cálculo',
        border: 'border-green-600'
    },
    {
        id: 'Documentos',
        href: 'https://docs.google.com/document/u/0/',
        label: 'Documentos',
        img: '<img src="./images/google-docs-icon-2.svg" alt="" class="spinY" >',
        text: 'Documentos',
        border: 'border-blue-500'
    },
    {
        id: 'Presentaciones',
        href: 'https://docs.google.com/presentation/u/0/',
        label: 'Presentaciones',
        img: '<img src="./images/Google_Slides_2020_Logo.svg" alt="" class="spinY" >',
        text: 'Presentaciones',
        border: 'border-yellow-500'
    },
    {
        id: 'Calendario',
        href: 'https://calendar.google.com/calendar/u/0/r',
        label: 'Calendario',
        img: '<img src="./images/google-calendar-icon-2020-.svg" alt="" class="spinY" >',
        text: 'Calendario',
        border: 'border-blue-400'
    },
    {
        id: 'Google Save',
        href: 'https://www.google.com/interests/saved?authuser=0',
        label: 'Google Save',
        img: '<img src="./images/google-save-icon.png" alt="" class="spinY" >',
        text: 'Google Save',
        border: 'border-white-400'
    },
    {
        id: 'Google Dibujos',
        href: 'https://docs.google.com/drawings/',
        label: 'Google Dibujos',
        img: '<img src="./images/icons8-dibujo-google.svg" alt="" class="spinY" >',
        text: 'Google Dibujos',
        border: 'border-white-400'
    },
    {
        id: 'Drive',
        href: 'https://drive.google.com/drive/home',
        label: 'Drive',
        img: '<img src="./images/google-drive-icon-2020.svg" alt="" class="spinY" >',
        text: 'Drive',
        border: 'border-green-500'
    },
    {
        id: 'Traductor',
        href: 'https://translate.google.com/?sl=auto&tl=es&op=translate',
        label: 'Traductor',
        img: '<img src="./images/google-translate-logo.svg" alt="" class="spinY" >',
        text: 'Traductor',
        border: 'border-gray-500'
    },
    {
        id: 'Gmail',
        href: 'https://mail.google.com/mail/u/0/#inbox',
        label: 'Gmail',
        img: '<img src="./images/official-gmail-icon-2020-.svg" alt="" class="spinY" >',
        text: 'Gmail',
        border: 'border-red-500'
    },
    {
        id: 'Fotos',
        href: 'https://photos.google.com/',
        label: 'Fotos',
        img: '<img src="./images/google-photos-6.svg" alt="" class="spin" >',
        text: 'Fotos',
        border: 'border-yellow-300'
    },
    {
        id: 'Gemini',
        href: 'https://gemini.google.com/app',
        label: 'Gemini',
        img: '<img src="./images/Google_Gemini_icon_2025.svg" alt="" class="spinY" >',
        text: 'Gemini',
        border: 'border-purple-500'
    },
    {
        id: 'YouTube',
        href: 'https://www.youtube.com/',
        label: 'YouTube',
        img: '<img src="./images/YouTube_full-color_icon_2017.svg" alt="" class="spinY" >',
        text: 'YouTube',
        border: 'border-red-600'
    },
    {
        id: 'WhatsApp',
        href: 'https://web.whatsapp.com/',
        label: 'WhatsApp',
        img: '<img src="./images/whatsapp.svg" alt="" >',
        text: 'WhatsApp',
        border: 'border-green-600'
    },
    {
        id: 'Github Copilot',
        href: 'https://github.com/copilot/',
        label: 'Github Copilot',
        img: '<img src="./images/github.svg" alt="" >',
        text: 'Github Copilot',
        border: 'border-blue-600'
    },
    {
        id: 'Reddit',
        href: 'https://www.reddit.com/',
        label: 'Reddit',
        img: '<img src="./images/reddit.svg" alt="" >',
        text: 'Reddit',
        border: 'border-orange-600'
    },
    {
        id: 'Atlassian',
        href: 'https://id.atlassian.com/login',
        label: 'Atlassian',
        img: '<img src="./images/atlassian-svgrepo-com.svg" alt="" >',
        text: 'Atlassian Bitbucket Jira',
        border: 'border-blue-600'
    },
    {
        id: 'Microsoft Copilot',
        href: 'https://copilot.microsoft.com/',
        label: 'Microsoft Copilot',
        img: '<img src="./images/microsoft-copilot.svg" alt="" >',
        text: 'Microsoft Copilot',
        border: 'border-pink-500'
    },
    {
        id: 'ChatGPT',
        href: 'https://chatgpt.com/',
        label: 'ChatGPT',
        img: '<img src="./images/chatgpt.svg" alt="" >',
        text: 'ChatGPT',
        border: 'border-blue-600'
    },
    {
        id: 'Canva',
        href: 'https://www.canva.com/',
        label: 'Canva',
        img: '<img src="./images/Canva_Logo_0.svg" alt="" >',
        text: 'Canva',
        border: 'border-cyan-500'
    }
];


const linksButton = [
    {
        id: 'google',
        link: 'https://www.google.com.mx/index.html',
        text: 'Ir a Google &#10138;',
        class: ''
    },
    {
        id: 'googleia',
        link: 'https://www.google.com/search?q=&sca_esv=3aa3359d46e30aa6&sxsrf=AE3TifM5Tzp_S8ZNDFfp3SpI02iNn72N7Q%3A1760994213011&source=hp&ei=pKP2aKrQO5u4kPIP96Wh-Ag&iflsig=AOw8s4IAAAAAaPaxtR_llh9m4OcZ3PFvyJehslPKrh1K&aep=22&udm=50&ved=0ahUKEwiqspDU1rOQAxUbHEQIHfdSCI8QteYPCBE&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEByAEAmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcA&sclient=gws-wiz',
        text: 'Ir a Modo IA &#10138;',
        class: 'ml-2'
    },
    {
        id: 'ForoDev',
        link: 'https://web.niplito.com.mx:8443/intranet4/Intranet_index.php',
        text: 'Ir a ForoDev &#10138;',
        class: 'ml-2'
    },
    {
        id: 'Phpdocs',
        link: 'file:///var/docker/niplito-prod/php/laravel/docs/api/index.html',
        text: 'Ir a Phpdocs &#10138;',
        class: 'ml-2'
    },
    {
        id: 'Portal',
        link: 'https://webniplito.dyndns.org/login2/',
        text: 'Ir a Portal Niplito &#10138;',
        class: 'ml-2'
    }
];
