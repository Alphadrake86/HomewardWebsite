/*function setslides(path){
	var filesLeft = true;
	var i = 1;
	var img = document.createElement("img");
	img.src = path + i + ".jpg";
	i++;
	while(filesLeft && i < 6){
		document.getElementById("gallery").appendChild(img);
		img = document.createElement("img");
		img.style.display = "none";
		img.class = "image fade";
		img.src = path + i + ".jpg";
		i++;
		if(!img.complete){
			filesLeft = false;
		}
	}
//alert("numOfImages= " + img.length);		setslides("/Images/kitchens/")		loadSlides("/Images/kitchens/")
}
*/


var list;
var things = [];

function loadSlides( path )
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", path + "sequence.txt", true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
				list = rawFile.responseText;
				var files = sequenceLoader(list);
                for(var i = 0; i < files.length; i++){
					img = document.createElement("img");
					img.style.display = "none";
					img.id = "img"+i;
					img.className = "slideImg fade";
					img.src = path + files[i];
					document.getElementById("gallery").appendChild(img);
				}
				var a = document.getElementById("img0");
				
				a.style.display = "block";
				
            }
        }
    }
	rawFile.send(null)
	
	
}

function ImageExist(url) 
{
   var img = new Image();
   img.src = url;
   return img.height != 0;
}

function sequenceLoader( text ) {
	var strs = [];
	var indo = text.indexOf("\n");
	//console.log(text.slice(0, indo))
	while(indo >= 0){
		if(indo > 0){
			var t = text.slice(0, indo);
			if(t.length>1){
			strs.push(t);
			}
		}
		text = text.substr(indo+1);
		indo = text.indexOf("\n");
	}
	if(text.length>1){
		strs.push(text);
	}
	
	console.log(strs)
	return strs;
}