const initPoup = () => {

    let changeColor = document.getElementById("changeColor");
    chrome.storage.sync.get("color", (data) => {
        console.log(data);
        changeColor.style.backgroundColor = data.color;
        changeColor.setAttribute("value", data.color);
    });

    changeColor.onclick = ((e) => {
        let color = e.target.value;
        chrome.tabs.excuteScript(
            tabs[0].id, {
                code: 'document.body.style.backgroundColor = "' + color + '";'
            }
        );
    });
};

window.onload = initPoup;
