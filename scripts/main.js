// https://github.com/aDu/meme-search (NO LICENSE)
var memeSearch = require('meme-search');

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
if (txt) {
  // args: keyword, callback
  memeSearch( txt, (err, res) => {
    // Array of meme objects, each meme object of the format { title, image_url }
    console.log(res);
    if (res) {
      img = res[0].image_url;
    } else {
      img = '_RELAX_.jpg';
    }
  } );
} else if (exc) {
    vid = exc + '.mp4';
    h2 = 'Exception ' + exc;
} else if (err) {
    vid = err + '.mp4';
    h2 = 'Error ' + err;
} else {
    img = '_RELAX_.jpg';
}
if (vid) {
    document.getElementById('video').setAttribute( "src", "https://mbtools.github.io/ABAP-Dump-Memes/img/" + vid );
} else {
    document.getElementById('image').innerHTML = '<img src="https://mbtools.github.io/ABAP-Dump-Memes/img/' + img + '"/>';
}
document.getElementById('error').innerHTML = h2;
