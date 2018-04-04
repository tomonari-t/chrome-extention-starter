const initBackground = () => {
    chrome.runtime.onInstalled.addListener(() => {
        console.log("installed!");
        console.log(chrome.storage);
        chrome.storage.sync.set({
                color: "#ccc"
            },
            () => {
                console.log("color is ccc")
            }
        );

        chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
            chrome.declarativeContent.onPageChanged.addRules([{
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {
                            hostEquals: "developer.chrome.com"
                        }
                    })
                ],
                actions: [
                    new chrome.declarativeContent.ShowPageAction()
                ]
            }])
        })
    });
};
const sum = (a, b) => {
    return a + b;
};

window.onload = initBackground;
