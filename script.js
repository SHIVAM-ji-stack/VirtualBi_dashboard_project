let btn=document.querySelector("#btn")
let content=document.querySelector("#content")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon Sir")
    }
    else{
        speak("Good Evening Sir")
    }
}
if (btn) {
    btn.addEventListener('click', wishMe)
}
window.addEventListener('load',() => {
    wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
let currentIndex=event.resultIndex
let transcript=event.results[currentIndex][0].transcript
content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
})
function takeCommand(message){
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by Shivam Mishra")
    }
    else if(message.includes("elder brother")){
        speak("Shivam Mishra brother is Harsh Mishra")
    }
    else if(message.includes("younger brother")){
        speak("Shivam Mishra younger brother is Sumit Bedwal")
    }
    else if(message.includes("open youtube")){
        speak("Opening Youtube")
        window.open("https://www.youtube.com/")
    }
    else if(message.includes("gmail")){
        speak("Opening Gmail")
        window.open("https://mail.google.com/")
    }
    else{
        speak("Sorry i didn't get that please try later")
    }

}