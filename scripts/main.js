function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var err = getParameterByName("error");    
var exc = getParameterByName("exception");
var txt = getParameterByName("text");
var img = "";
var vid = "";
var h2 = "";

// Visualization as Video or Image
if (txt) {
  var memes = memeSearch( txt );  
  // Array of meme objects, each meme object of the format { title, image_url }
  if (memes) {
    var meme = memes[0];
    console.log(meme);
    img = meme["image_url"];
  } else {
    img = "RELAX.jpg";
  }
} else if (exc) {
    vid = exc + ".mp4";
} else if (err) {
    vid = err + ".mp4";
} else {
    img = "RELAX.jpg";
}
if (vid) {
    document.getElementById("video").setAttribute( "src", "img/" + vid );
} else {
    document.getElementById("image").innerHTML = '<img src="img/' + img + '"/>';
}

// Description
if (exc) {
  h2 = "Exception " + exc;
} else if (err) {
  h2 = "Error " + err;
} else {
  h2 = txt;
}
document.getElementById("error").innerHTML = h2;
