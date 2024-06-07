document // makes it so you can press enter to submit as opposed to just being able to press a button
    .getElementById("proxy_search")
    .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.stopPropagation();
            event.preventDefault();
            let url = document.getElementById("proxy_search").value; // if no periods are detected in the input, search google instead
            let searchUrl = "https://www.google.com/search?q=";

            if (!url.includes(".")) {
                url = searchUrl + encodeURIComponent(url);
            } else {
                if (!url.startsWith("http://") && !url.startsWith("https://")) { // if no http or https is detected, add https automatically
                    url = "https://" + url;
                }
            }

            document.querySelector("header").style.display = "none";

            iframeWindow.style.display = "block";
            iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);
        }
    });

