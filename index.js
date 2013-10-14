function onQRClick(){
	var myWindow = window.open('','MsgWindow','width=200,height=100');
	myWindow.document.write("<button onmouseover=\"firstPClick()\">Click me!! width="+screen.width+"height"+screen.height+"</p><script>function firstPClick(){window.moveTo(555,555);}</script>");
	myWindow.moveTo(333,333);
}

checkLanguage();
function checkLanguage() {
  var language = window.navigator.userLanguage || window.navigator.language;
  if(language.indexOf("CN") != -1){
    window.location.replace("http://dacer.github.io/myapps/cn");
  }
  alert(language);
}