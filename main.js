var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
document.getElementById("textbox").innerHTML = "";
recognition.start();

}
recognition.onresult = function(event){
console.log(event);
var Content = event.results[0][0].transcript;
console.log(Content);
document.getElementById("textbox").innerHTML = Content;
if(Content == "please take my selfie")
{speak();}
}
function speak()
{
    var synth= window.speechSynthesis;
speak_data = document.getElementById("textbox").value;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function()
{imgid = "selfie1";
    take_snapshot();
    
},5000
);
setTimeout(function()
{imgid = "selfie2";
    take_snapshot();
    
},10000
);
setTimeout(function()
{imgid ="selfie3";
    take_snapshot();
    
},15000
);
}
Webcam.set({
    width :360,
    height : 250,
    image_format: 'png',
    png_quality:90

});
camera = document.getElementById("camera");

function take_snapshot()
{

Webcam.snap(function(data_uri){
    if(imgid == "selfie1")
    {
    document.getElementById("result1").innerHTML = '<img id="selfie_image" src="'+data_uri+'">'
    }
    if(imgid == "selfie2")
    {
    document.getElementById("result2").innerHTML = '<img id="selfie_image" src="'+data_uri+'">'
    }
    if(imgid == "selfie3")
    {
    document.getElementById("result3").innerHTML = '<img id="selfie_image" src="'+data_uri+'">'
    }
});
}
