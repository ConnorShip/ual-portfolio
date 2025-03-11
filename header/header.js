document.addEventListener("DOMContentLoaded", function () {
    fetch('/header/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.site-header').innerHTML = data;
        })
        .catch(error => console.error('Error Loading header:', error));
})

