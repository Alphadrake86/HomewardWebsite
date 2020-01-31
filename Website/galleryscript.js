var numOfImages = 1;
function setslides(path){
    var img = [path + "0.jpeg"]
do{
	img[numOfImages] = new Image();
	img[numOfImages].src = path + numOfImages + ".jpg";
	numOfImages++;
} while(!img[numOfImages].onerror);
alert("numOfImages= " + numOfImages);
}