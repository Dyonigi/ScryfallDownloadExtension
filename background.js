    /*
	Chrome extension to download searches from scryfall
    Copyright (C) 2018  Adam Henderson

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
	*/

// background.js Deprecated

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  
    if( request.message === "open_new_tab" ) {
		fetch(request.url)
			.then(response => response.json())
			.then(data =>{
				var li = [];
				data.data.forEach(element => li.push(element.name));
				alert(li[0]);
			})
		//chrome.tabs.create({"url": request.url});
    };
	
	sendResponse({data: 2});
  }
);






