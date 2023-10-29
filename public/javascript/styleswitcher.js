//wait for page to fully load so it doesnt execute so fast that it doesnt catch the selector
window.onload = function() {
//enable style selector if javascript is enabled (if it isnt, well this wouldnt work)
  var selector = document.getElementById("selector");
  selector.disabled = false;

  function changeStyle(style, js) {
      if (style == null)
          style = localStorage.getItem("style");
          if (style == null) 
              style = "mebi";
      document.querySelector("link[type='text/css']").setAttribute("href", /styles/ + style + ".css");
      localStorage.setItem("style", style);

      if (js == null)
        js = localStorage.getItem("js");
        if (js == null) 
            js = "mebi";
      document.querySelector("script[type='text/javascript']").setAttribute("src", "/javascript/replace/" + js + ".js");

      //handle image changing
      if (js == "mebi") {
        document.getElementById("cssbanner").src = "/images/page_deco/banner.png"
        document.getElementById("cssnix_kate").src = "/images/page_deco/nix_kate.png";
      } else if (js == "halloween") {
        document.getElementById("cssbanner").src = "/images/page_deco/halloween/banner.png"
        document.getElementById("cssnix_kate").src = "/images/page_deco/halloween/nix_kate.png";
      }
      localStorage.setItem("js", js);
  }

  changeStyle();
}