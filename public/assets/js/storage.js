function clockTab() {
    let title = document.getElementById("clockTab").value;
    document.title = title;
    localStorage.setItem("clockTab", title);
}

function clockTabIcon() { 
    let link = document.querySelector("link[rel*='icon']");

    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    link.href = document.getElementById("tabIcon").value;

    localStorage.setItem("tabIcon", document.getElementById("tabIcon").value);
    window.location.reload();
};
