console.log("Welcome to Spotify");
let songIndex =0;
let audioElement = new Audio('cover/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName:"Heeriye Heeriye - feat. Arijit Singh", filePath:"cover/1.mp3", coverPath: "posters/1.jpg"},
    {songName:"Baarishein - feat. Anuv Jain", filePath:"cover/2.mp3", coverPath: "posters/2.jpg"},
    {songName:"Ehd-e-wafa - feat. Sahir Ali Bagga", filePath:"cover/3.mp3", coverPath: "posters/3.jpg"},
    {songName:"Gone Girl - feat. Badshah", filePath:"cover/4.mp3", coverPath: "posters/4.jpg"},
    {songName:"Khuda aur mohabbat - feat. Rahat Fateh Ali Khan", filePath:"cover/5.mp3", coverPath: "posters/5.jpg"},
    {songName:"Meri jaane jaan - feat. Shreya Ghoshal", filePath:"cover/6.mp3", coverPath: "posters/6.jpg"},
    {songName:"Mujhy pyaar hua tha - feat. Kaifi Khalil", filePath:"cover/7.mp3", coverPath: "posters/7.jpg"},
    {songName:"Oh sanam - feat. Tony Kakkar", filePath:"cover/8.mp3", coverPath: "posters/8.jpg"},
    {songName:"Tere Vaaste - feat. Nihar Nagar", filePath:"cover/9.mp3", coverPath: "posters/9.jpg"},
    {songName:"Tu hai toh mujhy phir aur kya chahiye - feat. Arijit Singh| Sachin Jigar", filePath:"cover/10.mp3", coverPath: "posters/10.jpg"},
]

songItem.forEach((element,i) => {
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    //element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//Handle play-pause
masterPlay.addEventListener ('click',()=>{
    if (audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});
audioElement.addEventListener('timeupdate',() => {
    console.log('timeupdate');
    //update progressBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach ((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `cover/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');


    })
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `cover/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `cover/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

