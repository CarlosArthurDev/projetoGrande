function preload(){
    classifier=ml5.imageClassifier('DoodleNet')
}
function setup(){
    canvas= createCanvas(400,400)
    canvas.background("yellow")
    canvas.center()
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
 }
      

function draw(){
    
    strokeWeight(10);
    stroke(0)
    if(mouseIsPressed){
       line(pmouseX,pmouseY,mouseX,mouseY)
    }
}
function classifyCanvas(){
    classifier.classify(canvas,gotresult)
}
function gotresult(error,results){
    if(error){
        console.error(error)
    }
    else{
        result=results[0].label;
        document.getElementById("label").innerHTML="nome: "+result.replace("_",' ')
        document.getElementById("confidence").innerHTML="precisao: "+Math.round(results[0].confidence*100)+"%"
        utterthis=new SpeechSynthesisUtterance(result.replace("_",' '))
        synth.speak(utterthis)
    }
}
function clearB(){
    background("yellow")
}
if(condition){
    counter++
    }
   