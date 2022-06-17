// function listenForClicks() {
// 	document.addEventListener("click", (e) => {
// 		browser.tabs.executeScript({ file: "/content_scripts/tests_vuln.js" })
// 	});
// }


browser.tabs.executeScript(null, { file: "/content_scripts/tests_vuln.js" })
	// .then(listenForClicks)
