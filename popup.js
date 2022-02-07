//calls content.js to get cuttent tab URL
//shows cards name list on popup
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"}, function(response){
		const cadslist = document.getElementById('cardslist');
		
		fetch(response.data)
			.then(response => response.json())
			.then(data =>{
				var li = '';
				data.data.forEach(element => li+='<li class="cardname">'+element.name+'</li>');
				cadslist.innerHTML = li;
			});
		});
  });