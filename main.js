var API = window.webkitSpeechRecognition
var reconhecer = new API()

function iniciar(){
    document.getElementById("textArea").value = ""
reconhecer.start()
}

reconhecer.onresult = function(e){
    console.log(e)
var conteudo = e.results[0][0].transcript
document.getElementById("textArea").value = conteudo 
if(conteudo == "selfie"){
speak()
}
}

function speak(){
    var APIfalar = window.speechSynthesis
    var texto = "tirando sua selfie em 5 segundos"
    var textoCovertido = new SpeechSynthesisUtterance(texto)
    APIfalar.speak(textoCovertido)
    Webcam.attach(camera)

    setTimeout(function(){
        imgId = "img1"
        selfie()
        APIfalar.speak(textoCovertido)
        },5000)

        setTimeout(function(){
            imgId = "img2"
            selfie()
            APIfalar.speak(textoCovertido)
            },10000)

            setTimeout(function(){
                imgId = "img3"
                selfie()
                APIfalar.speak(textoCovertido)
                },15000)
}

Webcam.set({
   width: 360,
   height: 250,
   image_format: "jpg",
   jpg_quality: 90
})

function selfie(){
    Webcam.snap(function(data_uri){
        if(imgId == "img1"){
            document.getElementById("img1").innerHTML = `<img id="foto1" src="${data_uri}"/>`
        }
        if(imgId == "img2"){
            document.getElementById("img2").innerHTML = `<img id="foto2" src="${data_uri}"/>`
        }
        if(imgId == "img3"){
            document.getElementById("img3").innerHTML = `<img id="foto3" src="${data_uri}"/>`
        }
    })
}

function save(){
    var link = document.getElementById("link")
    var img = document.getElementById("foto").scr
    link.href = img
    link.click()
}

var camera = document.getElementById("camera")

