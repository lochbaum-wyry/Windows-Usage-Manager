chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) { //Colocamos la extension a la escucha de que una pagina Web sea visitada o actualizada.
	
	if(tab.url.indexOf(localStorage["urlExtension"]) != -1 && localStorage["urlExtension"] != ""){
		alert("Estas visitando la pagina");
	}
	
});

