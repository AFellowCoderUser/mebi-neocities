//credit later: https://templaterr.neocities.org/topbar/

var html = '<a href="/index">Home</a>';

html += '<a href="/about">About Me</a>'

html += '<div id="dropdown">'
html += '<button id="dropbtn">Links -</button>'
html += '<div id="dropdown-content">'
html += '<a href="/socials">Socials</a>'
html += '<a href="/sites">Sites</a>'
html += '</div></div>'

html += '<a href="/artworks">Artworks</a>'
html += '<a href="/ocmain/index">OCs</a>'

document.getElementById("navbartop").innerHTML = html;