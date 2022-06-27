// initialize the variables
let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let timestamp = Array.from(document.getElementsByClassName("timestamp"));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let songs = [
    {songName : "Study track 1.mp3", filePath : "songs/1.mp3", coverPath : "covers/1.jpg"},
    {songName : "Study track 2.mp3", filePath : "songs/2.mp3", coverPath : "covers/2.jpg"},
    {songName : "Study track 3.mp3", filePath : "songs/3.mp3", coverPath : "covers/3.jpg"},
    {songName : "Study track 4.mp3", filePath : "songs/4.mp3", coverPath : "covers/4.jpg"},
    {songName : "Study track 5.mp3", filePath : "songs/5.mp3", coverPath : "covers/5.jpg"},
    {songName : "Study track 6.mp3", filePath : "songs/6.mp3", coverPath : "covers/6.jpg"},
    {songName : "Study track 7.mp3", filePath : "songs/7.mp3", coverPath : "covers/7.jpg"},
    {songName : "Study track 8.mp3", filePath : "songs/8.mp3", coverPath : "covers/8.jpg"},
];
songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});
// audioElement.play()
// Handle play/pause click()
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity =0;
    }
})
//listen to event
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value =progress;
    
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
    console.log(audioElement.currentTime);
   
})

const makeAllPlays = ()=>{
    songItemPlay.forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
} 

songItemPlay.forEach((element) => {
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity =1;
        masterSongName.innerText = songs[songIndex-1].songName;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
});

next.addEventListener('click',()=>{
    if (songIndex>=8) {
        songIndex=1;
    }
    else{
        songIndex = songIndex +1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = songs[songIndex-1].songName;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})
previous.addEventListener('click',()=>{
    if (songIndex<=1) {
        songIndex=8;
    }
    else{
        songIndex = songIndex -1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = songs[songIndex-1].songName;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})
// const makeAllPlays = ()=>{
//     songItemPlay.forEach((element) => {
//         element.classList.remove('fa-circle-pause');
//         element.classList.add('fa-circle-play');
//     })
// } 

songItemPlay.forEach((element) => {
    element.addEventListener('mouseover',(e)=>{
        e.target.classList.add('fa-2x');
    })
});
songItemPlay.forEach((element) => {
    element.addEventListener('mouseout',(e)=>{
        e.target.classList.remove('fa-2x');
    })
});
// timestamp.forEach((element) => {
    // element.innerText = '0'+parseInt(audioElement.duration/60) +':'+parseInt((audioElement.duration%60))+"  "
// });
// const nextsong = ()=>{
//     if (myProgressBar.value = 100 && songIndex<8) {
//         songIndex = songIndex+1
//         audioElement.play();
//     }
//     else if(songIndex=8){
//         songIndex =1;
//         audioElement.play();
//     }
// }