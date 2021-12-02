/* Toggle between showing and hiding the navigation menu links when the user 
clicks on the hamburger menu / bar icon */

let navIsHidden = false;
let openNavMenu = function(){
  let getNavMenu = document.querySelector(".menu-hidden");

    if(navIsHidden === false) 
    {
      getNavMenu.style.visibility = "visible";
      getNavMenu.style.height = "auto";
      navIsHidden = true;
    }

    else if(navIsHidden === true)
    {
      getNavMenu.style.visibility = "hidden";
      getNavMenu.style.height = "0px";


      navIsHidden = false;
    }
       

}

/*Change text on body to small - medium - large */
document.getElementById("smallA").onclick = function(){
  changeSize("small")
};

document.getElementById("mediumA").onclick = function(){
  changeSize("medium")
};

document.getElementById("largeA").onclick = function(){
  changeSize("large")
};

/*Apply class attribute to text on the html body */

function changeSize(c)
{
  document.getElementsByTagName("body")[0].className=c;
}


/*Change interface color values to have a nightmode color scheme*/

document.getElementById("night-mode").onclick = function()
{

 nightMode();

}

function nightMode(){
      document.getElementsByTagName("body")[0].className="background-night-mode";
      
      const heading2 = document.getElementsByTagName("h2");
      const heading3 =document.getElementsByTagName("h3");
      const paragraphs = document.getElementsByTagName("p");
      const heading4 = document.getElementsByTagName("h4");

      for(var i=0;i<heading2.length;i++)
      {
        document.getElementsByTagName("h2")[i].className="font-color-night";
    
      }

      for(var i=1;i<heading3.length;i++)
      {
        document.getElementsByTagName("h3")[i].className="font-color-night";
    
      }

      for(var i=1;i<paragraphs.length;i++)
      {
        document.getElementsByTagName("p")[i].className="font-color-night";
    
      }

      for(var i=0;i<heading4.length;i++)
      {
        document.getElementsByTagName("h4")[i].className="font-color-night";
    
      }

      //document.getElementsByClassName("how-to-box")[0].className="background-color-night";

      document.getElementsByClassName("nav-main")[0].className="nav-main-nightmode";

}


/*When clicking on our newsletter submit form nothing realy happens, I wanted
to simulate as if we actually sent somthing to the server and let the user get a "test" reply from the
website*/  

document.getElementById("newsletter-btn").addEventListener("click", function() {
  window.alert("Your email has been sent.");
});