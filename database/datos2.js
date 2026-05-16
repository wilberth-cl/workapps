var linksButton = (typeof window !== 'undefined' && window.linksButton) ? window.linksButton : [
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

if (typeof window !== 'undefined') {
    window.linksButton = linksButton;
}
