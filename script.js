const video = document.querySelector("#video");
const status_text = document.querySelector("#status");
const play_btn = document.querySelector("#playbutton");
const timeDisplay = document.querySelector("#timeDisplay");
const progress_bar = document.querySelector("#progressBar")


console.log(video);
console.log("Java script is connected");

video.addEventListener("play",()=>{
    console.log("Video has started playing!");
    status_text.textContent = "Video is playing....";
    status_text.classList.add("playing");
    status_text.classList.remove("pausing");
    play_btn.textContent = "Pause"
});

video.addEventListener("pause",()=>{
    console.log("Video has been paused!");
    status_text.textContent="Video is paused...";
    status_text.classList.add("pausing");
    status_text.classList.remove("playing");
    play_btn.textContent = "Play"
});
video.addEventListener("timeupdate",()=>{
    const minutes = Math.floor(video.currentTime/60);
    const seconds = Math.floor(video.currentTime%60);
    const totalminutes = Math.floor(video.duration/60);
    const totalseconds = Math.floor(video.duration%60);

    const formattedMinutes = String(minutes).padStart(2,"0");
    const formattedSeconds = String(seconds).padStart(2,"0");
    const formattedTotalminutes =String(totalminutes).padStart(2,"0");
    const formattedTotalseconds = String(totalseconds).padStart(2,"0");
    const percentage = (video.currentTime/video.duration)*100;
    progress_bar.value = percentage;
    console.log(video.currentTime);
    timeDisplay.textContent=`${formattedMinutes}:${formattedSeconds} /${formattedTotalminutes}:${formattedTotalseconds}`;
});
progress_bar.addEventListener("input",()=>{
    video.currentTime = (progress_bar.value/100)*video.duration;
});
play_btn.addEventListener("click",()=>{
    if(video.paused)
    {
        video.play();
    }
    else{
        video.pause();
    }
});
