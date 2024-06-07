document.getElementById("clockTabBtn").onclick = function () {
    let tabName = document.getElementById("clockTab").value;   
    localStorage.setItem("tabName", tabName);
    document.title = tabName;
}

document.addEventListener("DOMContentLoaded", function () {
    let tabName = localStorage.getItem("tabName");
    if (tabName) {
        document.getElementById("clockTab").value = tabName;
        document.title = tabName;
    }
});

function aboutBlank() { 
    let windowOld = window.open('about:blank', '_self');
    windowOld.location.href = 'https://google.com';
    let windowLink = window.location.href;
    let windowNew = window.open('about:blank', '_blank');
    windowNew.document.write('<iframe src="' + windowLink + '" style="width: 100%; height: 100%; border: none !important;"></iframe><style>body { margin: 0; }</style>');
    windowNew.document.title = "Google Drive - My Drive";
}

document.getElementById("tabIconBtn").onclick = function () {
    let tabIconLink = document.getElementById("tabIcon").value;

    if (tabIconLink) {
        localStorage.setItem("tabIconLink", tabIconLink);

        document.querySelector("link[rel*='icon']").href = localStorage.getItem("tabIconLink");
    } else {
        
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let tabIconLink = localStorage.getItem("tabIconLink");
    if (tabIconLink) {
        document.querySelector("link[rel*='icon']").href = localStorage.getItem("tabIconLink");
    }
});

document.getElementById("loginBtn").onclick = function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

        localStorage.setItem("screen", true);
    }else{
        alert("Please enter username and password");
    }
};

