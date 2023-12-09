const videoSection = document.querySelector('article')

fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=27&playlistId=PLm8d7n0hfyyTljXjaXsnVU4mWlC6omM7Z&key=AIzaSyBOcdzQVdTPG3f8qDoxY7p4ri2Y41OumeE')
.then(res => res.json())
.then(data=>{
    data.items.forEach(el => {
        videoSection.innerHTML += `
        <a target="_blank" href="https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}" class="yt-video">
        <img src="${el.snippet.thumbnails.maxres.url}" />
        <span> ${el.snippet.title} </span>
        </a>`
    });
   
    console.log(data.items[0]);
}); 