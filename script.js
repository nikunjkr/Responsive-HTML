const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		// converting in javascript object
		var obj = JSON.parse(this.response);

		var arr = obj.hits;
	
		for(let i=0; i< arr.length; i++) {
			// creating a new div for card
			var newDiv = document.createElement("div");
			newDiv.classList.add("column");
			//getting title
			var title = document.createElement("H3");
			var t = document.createTextNode(arr[i].recipe.label);
			title.appendChild(t);

			//getting image
			var img = document.createElement("img");
			img.setAttribute("src", arr[i].recipe.image)

			//getting Description
			var desc = document.createElement("H4");
			var d = document.createTextNode(arr[i].recipe.ingredientLines[0]+ "...");
			desc.appendChild(d);

			//appending all to newDiv
			newDiv.appendChild(title);
			newDiv.appendChild(img);
			newDiv.appendChild(desc);
			
			
			document.getElementsByClassName("row")[0].appendChild(newDiv);
		}
		
	}
});

xhr.open("GET", "https://edamam-recipe-search.p.rapidapi.com/search?q=juice");
xhr.setRequestHeader("x-rapidapi-key", "0e4a457cc9mshdbd798fa64878e8p1b7db1jsn222d265be80f");
xhr.setRequestHeader("x-rapidapi-host", "edamam-recipe-search.p.rapidapi.com");

xhr.send(data);
