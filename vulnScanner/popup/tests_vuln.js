function getActiveTab() {
  return browser.tabs.query({currentWindow: true, active: true});
}

function getTabTitle(tabs) {
  let tab = tabs.pop();
  document.getElementById('header-title').textContent = tab.title;
}

function cookiesForTab(tabs) {
  let tab = tabs.pop();

  var gettingAllCookies = browser.cookies.getAll({url: tab.url});
  gettingAllCookies.then((cookies) => {
    var cookieNumber = document.getElementById('cookie-stats');

    if (cookies.length > 0) {
      cookieNumber.textContent = cookies.length;
    }
    else {
      cookieNumber.textContent = "No cookies";
    }
  });
}

function localStorageInfo(){
  let a = document.getElementById('storage-stats');
  a.textContent = "No local storage";

  browser.tabs.executeScript({code: "(function (){return localStorage.length;})();"})
  .then((result) => {
    if (result[0] > 0) {
      a.textContent = result[0];
    } else {
      a.textContent = "No local storage";
    }
  });
}


document.addEventListener("click", function(e) {
  if (e.target.id === "btn-update") {
    getActiveTab().then(getTabTitle);
    getActiveTab().then(cookiesForTab);
    localStorageInfo();
  }
});

getActiveTab().then(getTabTitle);
getActiveTab().then(cookiesForTab);
localStorageInfo();









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