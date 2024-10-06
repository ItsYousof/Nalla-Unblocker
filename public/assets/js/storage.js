let authentication = sessionStorage.setItem("auth", 'false');

function clockTab() {
    localStorage.setItem("tabname", document.getElementById("clockTab").value);

    document.getElementById("clockTabBtn").innerHTML = "<i class='fas fa-save'></i> Saved";

    document.getElementById("clockTabBtn").style.backgroundColor = "#4CAF50";

    setTimeout(function () {
        document.getElementById("clockTabBtn").innerHTML = "<i class='fas fa-save'></i> Save";
        document.getElementById("clockTabBtn").style.backgroundColor = "#282828";
    }, 1000);

    document.title = document.getElementById("clockTab").value;

    document.getElementById("clockTab").value = "";
}

function aboutBlank() { 
    let currentPage = window.location.href;
    console.log(currentPage);
    let aboutWindow = window.open("about:blank", "_blank");
    aboutWindow.document.write("<iframe src='" + currentPage + "'></iframe>");
    aboutWindow.document.write("<style>*{margin: 0; padding: 0; overflow: hidden} iframe{width: 100vw; height: 100vh;}</style>");
    aboutWindow.title = "Nalla Unblocker";
}

function clockTabIcon() {
    if (!document.getElementById("tabIcon").value == "") { 
        localStorage.setItem("tabicon", document.getElementById("tabIcon").value);
        document.getElementById("tabIconBtn").innerHTML = "<i class='fas fa-save'></i> Saved";
        document.getElementById("tabIconBtn").style.backgroundColor = "#4CAF50";

        setTimeout(function () {
            document.getElementById("tabIconBtn").innerHTML = "<i class='fas fa-save'></i> Save";
            document.getElementById("tabIconBtn").style.backgroundColor = "#282828";
        }, 1000);

        document.querySelector("link[rel*='icon']").href = document.getElementById("tabIcon").value;
    } else if (document.getElementById("tabIcon").value == "1") {
        localStorage.setItem("tabicon", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png");
        document.getElementById("tabIconBtn").innerHTML = "<i class='fas fa-save'></i> Saved";
        document.getElementById("tabIconBtn").style.backgroundColor = "#4CAF50";

        setTimeout(function () {
            document.getElementById("tabIconBtn").innerHTML = "<i class='fas fa-save'></i> Save";
            document.getElementById("tabIconBtn").style.backgroundColor = "#282828";
        }, 1000);

        document.querySelector("link[rel*='icon']").href = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png";
    } else {
        alert("Enter a valid link");
    }
}

function login() {
    document.getElementById("loginbtn").style.backgroundColor = "#4CAF50"
    document.getElementById("loginbtn").innerHTML = "<i class='fas fa-save'></i> Saved"

    setTimeout(() => {
        document.getElementById("loginbtn").style.backgroundColor = "#282828";
        document.getElementById("loginbtn").innerHTML = "<i class='fas fa-save'></i> Save & Enable"
    }, 1000);

    let username = localStorage.setItem("username", document.getElementById("username").value);
    let password = localStorage.setItem("password", document.getElementById("password").value);

    if (username == "" || password == "") {
        alert("Enter a valid username and password");
    } else {
        localStorage.setItem("login", 'true');
        location.reload();
    }
}

function setPanicKey() {
    let panicKeyPopup = document.getElementById("panic");
    panicKeyPopup.style.display = "block";

    document.getElementById("panicKey").focus();

    document.getElementById("panicKey").addEventListener("keydown", function (event) {
        event.preventDefault();
        console.log(event.key);
        localStorage.setItem("panicKey", event.key);
        panicKeyPopup.style.display = "none";
    });
}

function disablePanicKey() {
    localStorage.setItem("panicKey", "");
}


document.addEventListener('DOMContentLoaded', function () {
    let loginCheck = localStorage.getItem("login");
    document.title = localStorage.getItem("tabname");
    document.querySelector("link[rel*='icon']").href = localStorage.getItem("tabicon");

    if (window.location.href.includes("settings")) {
        document.getElementById("clockTab").value = localStorage.getItem("tabname");
        document.getElementById("clockTab").style.textAlign = "center";
        document.getElementById("clockTab").onfocus = function () {
            document.getElementById("clockTab").style.textAlign = "left";
        }
        document.getElementById("clockTab").onblur = function () {
            document.getElementById("clockTab").style.textAlign = "center";
        }
        document.getElementById("tabIcon").value = localStorage.getItem("tabicon");
        document.getElementById("tabIcon").style.textAlign = "center";
        document.getElementById("tabIcon").onfocus = function () {
            document.getElementById("tabIcon").style.textAlign = "left";
        }
        document.getElementById("tabIcon").onblur = function () {
            document.getElementById("tabIcon").style.textAlign = "center";
        }
    }

    if (!loginCheck == 'true') {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.zIndex = '999';

        // Create popup container
        const popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.padding = '20px';
        popup.style.backgroundColor = 'white';
        popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        popup.style.zIndex = '1000';
        popup.style.width = '300px';
        popup.style.borderRadius = '5px';

        // Create form elements
        const form = document.createElement('form');

        const title = document.createElement('h2');
        title.innerText = 'Login';
        title.style.textAlign = 'center';
        title.style.color = 'black';

        form.appendChild(title);

        const usernameLabel = document.createElement('label');
        usernameLabel.innerText = 'Username: ';
        usernameLabel.style.display = 'block';
        usernameLabel.style.marginBottom = '10px';
        usernameLabel.style.color = 'black';
        form.appendChild(usernameLabel);

        const usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        usernameInput.required = true;
        usernameInput.style.display = 'block';
        usernameInput.style.marginBottom = '10px';
        usernameInput.style.marginTop = '10px';
        usernameInput.style.width = '100%';
        usernameInput.style.padding = '10px';
        usernameInput.style.border = '1px solid #ccc';
        usernameInput.style.borderRadius = '5px';
        usernameInput.style.boxSizing = 'border-box';
        usernameInput.style.fontSize = '16px';
        usernameInput.style.color = 'black';
        usernameInput.style.outline = 'none';
        form.appendChild(usernameInput);

        const passwordLabel = document.createElement('label');
        passwordLabel.innerText = 'Password: ';
        passwordLabel.style.display = 'block';
        passwordLabel.style.marginBottom = '10px';
        passwordLabel.style.color = 'black';
        form.appendChild(passwordLabel);

        const passwordInput = document.createElement('input');
        passwordInput.type = 'password';
        passwordInput.required = true;
        passwordInput.style.display = 'block';
        passwordInput.style.marginBottom = '10px';
        passwordInput.style.marginTop = '10px';
        passwordInput.style.width = '100%';
        passwordInput.style.padding = '10px';
        passwordInput.style.border = '1px solid #ccc';
        passwordInput.style.borderRadius = '5px';
        passwordInput.style.boxSizing = 'border-box';
        passwordInput.style.fontSize = '16px';
        passwordInput.style.color = 'black';
        passwordInput.style.outline = 'none';
        form.appendChild(passwordInput);

        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.innerText = 'Login';
        submitButton.style.display = 'block';
        submitButton.style.marginTop = '10px';
        submitButton.style.display = 'flex';
        submitButton.style.justifyContent = 'center';
        submitButton.style.alignItems = 'center';
        submitButton.style.padding = '10px';
        submitButton.style.border = '1px solid #ccc';
        submitButton.style.borderRadius = '5px';
        submitButton.style.boxSizing = 'border-box';
        submitButton.style.fontSize = '16px';
        submitButton.style.color = 'black';
        submitButton.style.outline = 'none';
        submitButton.style.cursor = 'pointer';
        submitButton.style.width = '100%';

        form.appendChild(submitButton);

        // Append form to popup
        popup.appendChild(form);

        // Append overlay and popup to body
        document.body.appendChild(overlay);
        document.body.appendChild(popup);

        // Handle form submission
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            let username = usernameInput.value;
            let password = passwordInput.value;

            let savedUsername = localStorage.getItem("username");
            let savedPassword = localStorage.getItem("password");

            if (username == savedUsername && password == savedPassword) {
                document.body.removeChild(popup);
                document.body.removeChild(overlay);
                localStorage.setItem("auth", 'true');
            } else {
                alert('Invalid username or password');
            }
        });
    }

    // Call the function to show the popup
    if (localStorage.getItem("auth") == "false") {
        showPopup();
    }
});

let panicKey = localStorage.getItem("panicKey");
document.addEventListener('keydown', function (event) {
    if (event.key == panicKey) {
        console.log(panicKey)
        event.preventDefault();
        window.location.href = 'https://www.google.com';
    }
});