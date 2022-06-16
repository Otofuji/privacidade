function showCookiesForTab(tabs) {
  let tab = tabs.pop();

  var gettingAllCookies = browser.cookies.getAll({url: tab.url});
  gettingAllCookies.then((cookies) => {

    var activeTabUrl = document.getElementById('header-title');
    var text = document.createTextNode(tab.title);
    var cookieNumber = document.getElementById('cookie-stats');
    activeTabUrl.appendChild(text);


    if (cookies.length > 0) {
      cookieNumber.innerHTML = cookies.length;
    }
    else {
      let content = document.createTextNode("No cookies in this tab.");
      cookieNumber.appendChild(content);
    }
  });
}


function localStorage(){
  var getting = browser.storage.local.get();
  getting.then((res) => {
    // var localStorage = document.getElementById('local-storage');
    var test = document.createTextNode("test");
    var info = document.getElementById("storage-stats");
    info.appendChild(test);
  }
  , (err) => {
    console.log(err);
  });

}





function getActiveTab() {
  return browser.tabs.query({currentWindow: true, active: true});
}
getActiveTab().then(showCookiesForTab)
getActiveTab().then(localStorage)

// chrome.runtime.onMessage.addListener(beastify);

// function beastify(request, sender, sendResponse) {
//   removeEverything();
//   chrome.runtime.onMessage.removeListener(beastify);
// }

// function removeEverything() {
//   const displayCookieCount = (host) => {
//     let getting = browser.cookies.getAll({ domain: host });
//     getting.then((cookies) => {
//       document.getElementById("cookie-count").textContent = cookies.length;
//     });
//   }
  
//   const handleMessage = (request, sender, sendResponse) => {
//     if (request.hostname != null)
//     {
//       displayCookieCount(request.hostname);
//     }
//   }

// const init = () => {
//   browser.runtime.onMessage.addListener(handleMessage);
//   browser.runtime.sendMessage({ need: "info" });
//   addButtListeners();
// }

// init();

// document.addEventListener("click", function(e) {
    // if (!e.target.classList.contains("beast")) {
    //   return;
    // }
  
    // var chosenBeast = e.target.textContent;
  
    // chrome.tabs.executeScript(null, {
    //   file: "/content_scripts/beastify.js"
    // });
  
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //   chrome.tabs.sendMessage(tabs[0].id, {beast: chosenBeast});
    // });
  
  // });