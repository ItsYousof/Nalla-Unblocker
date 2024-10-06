document // makes it so you can press enter to submit as opposed to just being able to press a button
    .getElementById("proxy_search")
    .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            let url = document.getElementById("proxy_search").value; // If no periods are detected in the input, search google instead
            let searchUrl = localStorage.getItem("engine");

            if (!url.includes(".")) {
                url = searchUrl + encodeURIComponent(url);
            } else {
                if (!url.startsWith("http://") && !url.startsWith("https://")) {
                    // if no http or https is detected, add https automatically
                    url = "https://" + url;
                }
            }

            window.location = __uv$config.prefix + __uv$config.encodeUrl(url);
            var win = window.open();
            var encUrl = `${__uv$config.prefix}${__uv$config.encodeUrl(url)}`;
            var iframe = win.document.createElement("iframe");
            iframe.style.position = "absolute";
            iframe.style.left = "0";
            iframe.style.top = "0";
            iframe.style.width = "100vw";
            iframe.style.height = "100vh";
            iframe.style.border = "none";
            iframe.style.margin = "0";
            iframe.style.padding = "0";
            iframe.src = encUrl;
            win.document.body.appendChild(iframe);
            win.document.body.style.overflow = "hidden";
        }
    });

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('proxy_search');
    const searchBtn = document.getElementById('search-btn');
    const engineSelect = document.getElementById('engineSelect');
    const enginePopup = document.getElementById('enginePopup');
    const closePopup = document.getElementById('closePopup');
    const engineButtons = document.querySelectorAll('.engine-btn');
    const iframeWindow = document.getElementById('iframeWindow');
    const overlay = document.querySelector('.overlay');

    const settingsBtn = document.getElementById('settingsBtn');
    const settingsPopup = document.getElementById('settingsPopup');
    const closeSettings = document.getElementById('closeSettings');
    const themeToggle = document.getElementById('themeToggle');
    const colorTheme = document.getElementById('colorTheme');

    // Set default search engine if not set
    if (!localStorage.getItem('engine')) {
        localStorage.setItem('engine', 'https://www.google.com/search?q=');
    }

    // Load saved settings
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedColorTheme = localStorage.getItem('colorTheme') || 'default';

    // Apply saved settings
    document.body.classList.add(savedTheme + '-theme');
    document.body.classList.add(savedColorTheme + '-theme');
    themeToggle.value = savedTheme;
    colorTheme.value = savedColorTheme;

    function performSearch() {
        let url = searchInput.value;
        let searchUrl = localStorage.getItem('engine');

        if (!url.includes('.')) {
            url = searchUrl + encodeURIComponent(url);
        } else if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }

        iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);
        overlay.style.display = 'none';
    }

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            performSearch();
        }
    });

    searchBtn.addEventListener('click', function(event) {
        event.preventDefault();
        performSearch();
    });

    engineSelect.addEventListener('click', function() {
        enginePopup.style.display = 'block';
    });

    closePopup.addEventListener('click', function() {
        enginePopup.style.display = 'none';
    });

    engineButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            localStorage.setItem('engine', this.getAttribute('data-engine'));
            enginePopup.style.display = 'none';
        });
    });

    settingsBtn.addEventListener('click', function() {
        settingsPopup.style.display = 'block';
    });

    closeSettings.addEventListener('click', function() {
        settingsPopup.style.display = 'none';
    });

    themeToggle.addEventListener('change', function() {
        document.body.classList.remove('dark-theme', 'light-theme');
        document.body.classList.add(this.value + '-theme');
        localStorage.setItem('theme', this.value);
    });

    colorTheme.addEventListener('change', function() {
        document.body.classList.remove('default-theme', 'ocean-theme', 'forest-theme', 'sunset-theme', 'lavender-theme');
        document.body.classList.add(this.value + '-theme');
        localStorage.setItem('colorTheme', this.value);
    });

    // Close popups when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === enginePopup) {
            enginePopup.style.display = 'none';
        }
        if (event.target === settingsPopup) {
            settingsPopup.style.display = 'none';
        }
    });
});

function playGame(url) {
    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
}