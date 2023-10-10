var langauageNode = document.getElementById("language");
var codeNode = document.getElementById("code");
var compileNode = document.getElementById("compile");
var resetNode = document.getElementById("reset");
var outputNode = document.getElementById("output");



compileNode.addEventListener("click",compileCode);

function compileCode(){
  compileNode.disabled = true;
  compileNode.style.cursor = "auto";
  compileNode.style.backgroundColor = "red";

  var code = codeNode.value;
  var lang = langauageNode.value;

  var api_key = "Your API Key";

  var request = new XMLHttpRequest();
  request.open("POST","https://code-compiler10.p.rapidapi.com/");

  request.setRequestHeader("x-compile","rapidapi");
  request.setRequestHeader("Content-Type","application/json");
  request.setRequestHeader("X-RapidAPI-Key",api_key);
  request.setRequestHeader("X-RapidAPI-Host","code-compiler10.p.rapidapi.com");

  var body = {
    "lang": lang,
    "code": code
  }
  request.send(JSON.stringify(body));

  request.addEventListener("load",function(){
    var result = JSON.parse(request.responseText);
    console.log(result);
    console.log(result.output);
    outputNode.innerText = result.output;

    compileNode.disabled = false;
    compileNode.style.cursor = "pointer";
    compileNode.style.backgroundColor = "orange";
  });
}


resetNode.addEventListener("click",resetCode);
function resetCode(){
  var delay = setTimeout(function(){
    resetNode.disabled = false;
    resetNode.style.cursor = "pointer";
    resetNode.style.backgroundColor = "orange";
  },300);

  resetNode.disabled = true;
  resetNode.style.cursor = "auto";
  resetNode.style.backgroundColor = "red";

  langauageNode.value = "c";
  codeNode.value = "#Write your code here";
  outputNode.innerText = "";
  codeNode.setAttribute("rows","18");
}


var intervalId;
codeNode.addEventListener("focus",function(event){
  var code = codeNode.value;
  if(code == "#Write your code here"){
    codeNode.value = "";
  }
  intervalId = setInterval(function(){
    if(codeNode.clientHeight < codeNode.scrollHeight){
      codeNode.rows = codeNode.rows + 2;
    }
  },1000);
});

codeNode.addEventListener("blur",function(event){
  clearInterval(intervalId);
});
