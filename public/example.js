if (window.location.href.includes('tabs')) {
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
}

document.addEventListener('keydown', function (event) {
    if (event.altKey && event.key === "e") { // Check if Alt key and 'e' key are pressed together
        var enginePopup = document.getElementById("engine_popup");
        if (enginePopup.style.display === "block") {
            enginePopup.style.display = "none";
        } else {
            enginePopup.style.display = "block";
        }
    }
});

document.addEventListener('keydown', function (event) {
    var enginePopup = document.getElementById("engine_popup");

    // Check for Windows/Linux (Alt + E) or macOS (Command + E)
    if ((event.altKey && event.key === "e") || (event.metaKey && event.key === "e")) {
        if (enginePopup.style.display === "block") {
            enginePopup.style.display = "none";
        } else {
            enginePopup.style.display = "block";
        }
    }
});



function playGame(url) {
    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
}

function getPassword(folder) {
    let password = prompt("Please Enter the game password");

    if (password != "game24") {
        alert("You may not use this game since you do not have the correct password for entry.");
    } else {
        window.location.href = './assets/games/' + folder;
    }
}