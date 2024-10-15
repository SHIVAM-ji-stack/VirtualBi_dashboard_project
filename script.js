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
   }}

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
    else if(message.includes("how are you")){
        speak("I am fine hope same from you")
    }
    else if(message.includes("open youtube")){
        speak("Opening Youtube")
        window.open("https://www.youtube.com/")
    }
    else if(message.includes("gmail")){
        speak("Opening Gmail")
        window.open("https://mail.google.com/")
    }
    else if(message.includes("Baba Minerals")){
        speak("Baba Minerals is in Tendua and the owner iS Sonal Mishra")
    }
    else if(message.includes("punjab technical university")){
        speak("I.K.GUJRAL Punjab Technical University is in Kapurthala and it is State Public University of Punjab")
    }
    else if(message.includes("roommates")){
        speak("Roommates of Shivam Mishra are Tanishk,Tanishq,Maneshwar")
    }
    else if(message.includes("launch")){
        speak("I am under development I will be launched soon thanks for showing interest in me")
    }
    else if(message.includes("weather")){
        speak("To check the weather,I need to know your location. Could you share it with me?")
    }
    else if(message.includes("reminder")){
        speak("Sure! what would you like to be reminded of and when?")
    }
    else if(message.includes("improve my productivity")){
        speak("Here are a few tips to improve productivity:break tasks into smaller steps\n prioritize important tasks\n take regular breaks to stay focused\n use a to do list or time management apps")
    }
    else if(message.includes("news")){
        speak("i can look up the latest news for you. is there a specific topic you'd like to know about?")
    }    
    else{
        speak("Sorry i didn't get that please try later")
    }

}
