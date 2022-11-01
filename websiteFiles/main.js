window.onscroll = function() {myFunction(50)};
console.log(window.innerWidth)

function myFunction(width) {
if (window.innerWidth >=1000){
    console.log(window.innerWidth)
    if (document.documentElement.scrollTop > width) {
       
        document.getElementById("Work").className= "describer2";
        console
      } 
    else {
        document.getElementById("Work").className = "describer";
      };
    if (document.documentElement.scrollTop > width*2) {
        document.getElementById("education").className= "describer2";
        }
    else{
            document.getElementById("education").className= "describer";
        };
}
else{
  document.getElementById("Work").className = "describer2";
  document.getElementById("education").className= "describer2";

}
  

}
