let date = new Date()
    let h1 = document.querySelector("h1.birth");
    (date.getDate() === 9 && date.getMonth() === 8) ? msg = "YES" : msg = "NO";
    h1.innerHTML = msg;