//credit later: https://templaterr.neocities.org/topbar/

var html = '<a href="https://afellowu.neocities.org/">Home</a>';

html += '<a href="https://afellowu.neocities.org/about">About Me</a>'

html += '<div id="dropdown">'
html += '<button id="dropbtn">Links -</button>'
html += '<div id="dropdown-content">'
html += '<a href="https://afellowu.neocities.org/socials">Socials</a>'
html += '<a href="https://afellowu.neocities.org/sites">Sites</a>'
html += '</div></div>'

html += '<a href="https://afellowu.neocities.org/artworks">Artworks</a>'
html += '<a href="https://afellowu.neocities.org/ocmain">OCs</a>'

document.getElementById("navbartop").innerHTML = html;