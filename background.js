chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'updateIcon') {
        if (msg.active === "true") {
            chrome.action.setIcon({ path: "./lr_act_128.png" })
            chrome.action.setTitle({title: 'Adobe Live Reload Active'})
        }
        else {
            chrome.action.setIcon({ path: "./lr_inact_128.png"});
            chrome.action.setTitle({title: 'Adobe Live Reload Inactive'})
        }
    }
})