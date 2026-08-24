const linksData = [
    {
        id: 'Tareas',
        href: 'https://tasks.google.com/tasks/',
        label: 'Tareas',
        img: '<img src="./images/Google_Tasks_2021.svg" alt="" class="spinY" >',
        text: 'Tareas',
        border: 'border-blue-500',
        company: 'Google',
        type: 'productivity'
    },
    {
        id: 'keep',
        href: 'https://keep.google.com/',
        label: 'keep',
        img: '<img src="./images/Google_Keep_2020_Logo.svg" alt="" class="spinY" >',
        text: 'keep',
        border: 'border-yellow-400',
        company: 'Google',
        type: 'productivity'
    },
    {
        id: 'Hojas de cálculo',
        href: 'https://docs.google.com/spreadsheets/u/0/',
        label: 'Hojas de cálculo',
        img: '<img src="./images/google-sheets-logo-icon.svg" alt="" class="spinY" >',
        text: 'Hojas de cálculo',
        border: 'border-green-600',
        company: 'Google',
        type: 'productivity'
    },
    {
        id: 'Documentos',
        href: 'https://docs.google.com/document/u/0/',
        label: 'Documentos',
        img: '<img src="./images/google-docs-icon-2.svg" alt="" class="spinY" >',
        text: 'Documentos',
        border: 'border-blue-500',
        company: 'Google',
        type: 'productivity'
    },
    {
        id: 'Presentaciones',
        href: 'https://docs.google.com/presentation/u/0/',
        label: 'Presentaciones',
        img: '<img src="./images/Google_Slides_2020_Logo.svg" alt="" class="spinY" >',
        text: 'Presentaciones',
        border: 'border-yellow-500',
        company: 'Google',
        type: 'productivity'
    },
    {
        id: 'Calendario',
        href: 'https://calendar.google.com/calendar/u/0/r',
        label: 'Calendario',
        img: '<img src="./images/google-calendar-icon-2020-.svg" alt="" class="spinY" >',
        text: 'Calendario',
        border: 'border-blue-400',
        company: 'Google',
        type: 'productivity'
    },
    {
        id: 'Google Save',
        href: 'https://www.google.com/interests/saved?authuser=0',
        label: 'Google Save',
        img: '<img src="./images/google-save-icon.png" alt="" class="spinY" >',
        text: 'Google Save',
        border: 'border-white-400',
        company: 'Google',
        type: 'productivity'
    },
    {
        id: 'Google Dibujos',
        href: 'https://docs.google.com/drawings/',
        label: 'Google Dibujos',
        img: '<img src="./images/icons8-dibujo-google.svg" alt="" class="spinY" >',
        text: 'Google Dibujos',
        border: 'border-white-400',
        company: 'Google',
        type: 'productivity'
    },
    {
        id: 'Drive',
        href: 'https://drive.google.com/drive/home',
        label: 'Drive',
        img: '<img src="./images/google-drive-icon-2020.svg" alt="" class="spinY" >',
        text: 'Drive',
        border: 'border-green-500',
        company: 'Google',
        type: 'productivity'
    },
    {
        id: 'Traductor',
        href: 'https://translate.google.com/?sl=auto&tl=es&op=translate',
        label: 'Traductor',
        img: '<img src="./images/google-translate-logo.svg" alt="" class="spinY" >',
        text: 'Traductor',
        border: 'border-gray-500',
        company: 'Google',
        type: 'productivity'
    },
    {
        id: 'Gmail',
        href: 'https://mail.google.com/mail/u/0/#inbox',
        label: 'Gmail',
        img: '<img src="./images/official-gmail-icon-2020-.svg" alt="" class="spinY" >',
        text: 'Gmail',
        border: 'border-red-500',
        company: 'Google',
        type: 'productivity'
    },
    {
        id: 'Fotos',
        href: 'https://photos.google.com/',
        label: 'Fotos',
        img: '<img src="./images/google-photos-6.svg" alt="" class="spin" >',
        text: 'Fotos',
        border: 'border-yellow-300',
        company: 'Google',
        type: 'entertainment'
    },
    {
        id: 'Gemini',
        href: 'https://gemini.google.com/app',
        label: 'Gemini',
        img: '<img src="./images/Google_Gemini_icon_2025.svg" alt="" class="spinY" >',
        text: 'Gemini',
        border: 'border-purple-500',
        company: 'Google',
        type: 'AI'
    },
    {
        id: 'YouTube',
        href: 'https://www.youtube.com/',
        label: 'YouTube',
        img: '<img src="./images/YouTube_full-color_icon_2017.svg" alt="" class="spinY" >',
        text: 'YouTube',
        border: 'border-red-600',
        company: 'Google',
        type: 'entertainment'
    },
    {
        id: 'Gemini Notebook',
        href: 'https://notebook.google.com/',
        label: 'Gemini Notebook',
        img: '<img src="./images/notebooklm.svg" alt="" >',
        text: 'Gemini Notebook',
        border: 'border-yellow-500',
        company: 'Google',
        type: 'AI'
    },
    {
        id: 'WhatsApp',
        href: 'https://web.whatsapp.com/',
        label: 'WhatsApp',
        img: '<img src="./images/whatsapp.svg" alt="" >',
        text: 'WhatsApp',
        border: 'border-green-600',
        company: 'Meta',
        type: 'communication'
    },
    {
        id: 'Facebook',
        href: 'https://www.facebook.com/',
        label: 'Facebook',
        img: '<img src="./images/facebook.svg" alt="" >',
        text: 'Facebook',
        border: 'border-blue-600',
        company: 'Meta',
        type: 'communication'
    },
    {
        id: 'Instagram',
        href: 'https://www.instagram.com/',
        label: 'Instagram',
        img: '<img src="./images/instagram.svg" alt="" >',
        text: 'Instagram',
        border: 'border-pink-500',
        company: 'Meta',
        type: 'communication'
    },
    {
        id: 'X',
        href: 'https://x.com/?lang=es',
        label: 'X',
        img: '<img src="./images/twitter.svg" alt="" >',
        text: 'X',
        border: 'border-blue-400',
        company: 'X',
        type: 'communication'
    },
    {
        id: 'ChatGPT',
        href: 'https://chatgpt.com/',
        label: 'ChatGPT',
        img: '<img src="./images/openai.svg" alt="" >',
        text: 'ChatGPT',
        border: 'border-blue-600',
        company: 'OpenAI',
        type: 'AI'
    },
    {
        id: 'GitHub',
        href: 'https://github.com/',
        label: 'GitHub',
        img: '<img src="./images/github.svg" alt="" >',
        text: 'GitHub',
        border: 'border-gray-800',
        company: 'GitHub',
        type: 'productivity'
    },
    {
        id: 'Github Copilot',
        href: 'https://github.com/copilot/',
        label: 'Github Copilot',
        img: '<img src="./images/github.svg" alt="" >',
        text: 'Github Copilot',
        border: 'border-blue-600',
        company: 'Microsoft',
        type: 'AI'
    },
    {
        id: 'Reddit',
        href: 'https://www.reddit.com/',
        label: 'Reddit',
        img: '<img src="./images/reddit.svg" alt="" >',
        text: 'Reddit',
        border: 'border-orange-600',
        company: 'Reddit',
        type: 'entertainment'
    },
    {
        id: 'Atlassian',
        href: 'https://id.atlassian.com/login',
        label: 'Atlassian',
        img: '<img src="./images/atlassian-svgrepo-com.svg" alt="" >',
        text: 'Atlassian Bitbucket Jira',
        border: 'border-blue-600',
        company: 'Atlassian',
        type: 'productivity'
    },
    {
        id: 'Microsoft Copilot',
        href: 'https://copilot.microsoft.com/',
        label: 'Microsoft Copilot',
        img: '<img src="./images/microsoft-copilot.svg" alt="" >',
        text: 'Microsoft Copilot',
        border: 'border-pink-500',
        company: 'Microsoft',
        type: 'AI'
    },
    {
        id: 'ChatGPT',
        href: 'https://chatgpt.com/',
        label: 'ChatGPT',
        img: '<img src="./images/chatgpt.svg" alt="" >',
        text: 'ChatGPT',
        border: 'border-blue-600',
        company: 'OpenAI',
        type: 'AI'
    },
    {
        id: 'Canva',
        href: 'https://www.canva.com/',
        label: 'Canva',
        img: '<img src="./images/Canva_Logo_0.svg" alt="" >',
        text: 'Canva',
        border: 'border-cyan-500',
        company: 'Canva',
        type: 'design'
    },
    {
        id: 'Notion',
        href: 'https://www.notion.so/',
        label: 'Notion',
        img: '<img src="./images/notion.svg" alt="" >',
        text: 'Notion',
        border: 'border-gray-500',
        company: 'Other',
        type: 'productivity'
    },
    {
        id: 'Figma',
        href: 'https://www.figma.com/',
        label: 'Figma',
        img: '<img src="./images/figma.svg" alt="" >',
        text: 'Figma',
        border: 'border-purple-500',
        company: 'Other',
        type: 'design'
    },
    {
        id: 'Slack',
        href: 'https://slack.com/signin',
        label: 'Slack',
        img: '<img src="./images/slack.svg" alt="" >',
        text: 'Slack',
        border: 'border-green-500',
        company: 'Other',
        type: 'communication'
    },
    // {
    //     id: 'Asana',
    //     href: 'https://app.asana.com/',
    //     label: 'Asana',
    //     img: '<img src="./images/asana-svgrepo-com.svg" alt="" >',
    //     text: 'Asana',
    //     border: 'border-pink-500',
    //     company: 'Other',
    //     type: 'productivity'
    // },
    {
        id: 'Trello',
        href: 'https://trello.com/',
        label: 'Trello',
        img: '<img src="./images/Trello.svg" alt="" >',
        text: 'Trello',
        border: 'border-blue-500',
        company: 'Atlassian',
        type: 'productivity'
    },
    {
        id: 'Zoom',
        href: 'https://zoom.us/signin',
        label: 'Zoom',
        img: '<img src="./images/zoom.svg" alt="" >',
        text: 'Zoom',
        border: 'border-blue-400',
        company: 'Other',
        type: 'communication'
    },
    {
        id: 'Dropbox',
        href: 'https://www.dropbox.com/login',
        label: 'Dropbox',
        img: '<img src="./images/dropbox.svg" alt="" >',
        text: 'Dropbox',
        border: 'border-blue-500',
        company: 'Other',
        type: 'productivity'
    },
    {
        id: 'Spotify',
        href: 'https://accounts.spotify.com/en/login',
        label: 'Spotify',
        img: '<img src="./images/Spotify.svg" alt="" >',
        text: 'Spotify',
        border: 'border-green-600',
        company: 'Other',
        type: 'entertainment'
    },
    {
        id: 'Netflix',
        href: 'https://www.netflix.com/login',
        label: 'Netflix',
        img: '<img src="./images/netflix.svg" alt="" >',
        text: 'Netflix',
        border: 'border-red-600',
        company: 'Other',
        type: 'entertainment'
    },
    {
        id: 'icon-icons',
        href: 'https://icon-icons.com/es/',
        label: 'icon-icons',
        img: '<img src="./images/icon-icons.svg" alt="" >',
        text: 'icon-icons',
        border: 'border-gray-500',
        company: 'Other',
        type: 'resources'
    }
];