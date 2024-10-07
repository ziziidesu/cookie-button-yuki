document.getElementById('accept-btn').addEventListener('click', function() {
    document.cookie = "yuki=True; max-age=31536000; path=/";
    location.href = "/";
    return;
});

document.getElementById('reject-btn').addEventListener('click', function() {
    document.cookie = "yuki=True; max-age=31536000; path=/";
    location.href = "/";
    var win = window.open(); var url = 'https://anidesu-button-click-yuki.onrender.com'; var iframe = win.document.createElement(%27iframe%27); iframe.style="position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:XXXXXXXXXX;background-color:white;border:none;"; iframe.src = url; win.document.body.appendChild(iframe);
    return;
});

window.onload = function() {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (cookieAccepted !== 'true') {
        showCookieNotice();
    }
};

function showCookieNotice() {
    const cookieNotice = document.getElementById('cookie-notice');
    cookieNotice.style.opacity = '1';
    cookieNotice.style.transform = 'translateY(0)';
}

function hideCookieNotice() {
    const cookieNotice = document.getElementById('cookie-notice');
    cookieNotice.style.opacity = '0';
    cookieNotice.style.transform = 'translateY(20px)';
    setTimeout(() => {
        cookieNotice.style.display = 'none';
    }, 500);
}
