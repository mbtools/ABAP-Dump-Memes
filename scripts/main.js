function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function setHTML(id, html) {
  document.getElementById(id).innerHTML = html;
}

// Get Parameters from URL
const ver = getParameterByName("version");
const err = getParameterByName("error");
const exc = getParameterByName("exception");
const txt = getParameterByName("text");

console.log( 'Version:' + ver );
console.log( 'Error:' + err );
console.log( 'Exception:' + exc );
console.log( 'Text:' + txt );

// Visualization as Video or Image
let img = "";
let vid = "";

if (ver == '2' && txt) {
  const mem = memeSearch(txt);
  if (mem) {
    img = mem[Math.floor(Math.random() * mem.length)].imageURL; 
  } else {
    img = "img/RELAX.jpg";
  }
} else if (exc) {
    vid = "img/" + exc + ".mp4";
} else if (err) {
    vid = "img/" + err + ".mp4";
} else {
    img = "img/RELAX.jpg";
}
if (vid) {
  console.log( 'Video:' + vid );
  setHTML("meme", '<video class="meme" autoplay loop muted defaultmuted playsinline src="' + vid + '">Sorry, your browser does not support videos</video>' );
} else {
  console.log( 'Image:' + img );
  setHTML("meme", '<img class="meme" src="' + img + '"/>' );
}

// Error Code and Description
if (exc) {
  setHTML("error", "Exception " + exc);
} else if (err) {
  setHTML("error", "Error " + err);
} 
if (txt) {
  setHTML("text", txt);
}
