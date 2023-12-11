const videoSection = document.querySelector('article')

fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=27&playlistId=PLm8d7n0hfyyTljXjaXsnVU4mWlC6omM7Z&key=AIzaSyBOcdzQVdTPG3f8qDoxY7p4ri2Y41OumeE')
.then(res => res.json())
.then(data=>{
    data.items.forEach(el => {
        videoSection.innerHTML += `
        <a target="_blank" href="https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}" class="yt-video">
        <img src="${el.snippet.thumbnails.maxres.url}"/>
        <span> ${el.snippet.title} </span>
        </a>`
    });
   
    console.log(data.items[0]);
}); 

const videoSectionn = document.querySelector('.chrismas')

fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=27&playlistId=PLm8d7n0hfyyS5Qs-j8u30A37TAJId0kWr&key=AIzaSyBOcdzQVdTPG3f8qDoxY7p4ri2Y41OumeE')
.then(res => res.json())
.then(data=>{
    data.items.forEach(el => {
        videoSectionn.innerHTML += `
        <a target="_blank" href="https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}" class="yt-video">
        <img src="${el.snippet.thumbnails.maxres.url}"/>
        <span> ${el.snippet.title} </span>
        </a>`
    });
   
    console.log(data.items[0]);
}); 

const videoSectionnn = document.querySelector('.bedtime')

fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=27&playlistId=PLm8d7n0hfyyReDBu3y-CXAYjJ984RnXZF&key=AIzaSyBOcdzQVdTPG3f8qDoxY7p4ri2Y41OumeE')
.then(res => res.json())
.then(data=>{
    data.items.forEach(el => {
        videoSectionnn.innerHTML += `
        <a target="_blank" href="https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}" class="yt-video">
        <img src="${el.snippet.thumbnails.maxres.url}"/>
        <span> ${el.snippet.title} </span>
        </a>`
    });
   
    console.log(data.items[0]);
});

const videoSectionnnn = document.querySelector('.ocean')

fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=27&playlistId=PLm8d7n0hfyySV-ZuUvWFeAXdGKmI6MIm-&key=AIzaSyBOcdzQVdTPG3f8qDoxY7p4ri2Y41OumeE')
.then(res => res.json())
.then(data=>{
    data.items.forEach(el => {
        videoSectionnnn.innerHTML += `
        <a target="_blank" href="https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}" class="yt-video">
        <img src="${el.snippet.thumbnails.maxres.url}"/>
        <span> ${el.snippet.title} </span>
        </a>`
    });
   
    console.log(data.items[0]);
});

const videoSectionnnnn = document.querySelector('.animals')

fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=27&playlistId=PLm8d7n0hfyySK9RPSKZgpinc0fbpHK0hj&key=AIzaSyBOcdzQVdTPG3f8qDoxY7p4ri2Y41OumeE')
.then(res => res.json())
.then(data=>{
    data.items.forEach(el => {
        videoSectionnnnn.innerHTML += `
        <a target="_blank" href="https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}" class="yt-video">
        <img src="${el.snippet.thumbnails.maxres.url}"/>
        <span> ${el.snippet.title} </span>
        </a>`
    });
   
    console.log(data.items[0]);
});

const videoSectionnnnnn = document.querySelector('.sleepsong')

fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=27&playlistId=PLm8d7n0hfyyTVMHUbDgm8ql5Id_1YX3Vz&key=AIzaSyBOcdzQVdTPG3f8qDoxY7p4ri2Y41OumeE')
.then(res => res.json())
.then(data=>{
    data.items.forEach(el => {
        videoSectionnnnnn.innerHTML += `
        <a target="_blank" href="https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}" class="yt-video">
        <img src="${el.snippet.thumbnails.maxres.url}"/>
        <span> ${el.snippet.title} </span>
        </a>`
    });
   
    console.log(data.items[0]);
});

const videoSectionnnnnnn = document.querySelector('.learning')

fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=27&playlistId=PLm8d7n0hfyyQu4dzQxo3lvX8jfNZqRAGF&key=AIzaSyBOcdzQVdTPG3f8qDoxY7p4ri2Y41OumeE')
.then(res => res.json())
.then(data=>{
    data.items.forEach(el => {
        videoSectionnnnnnn.innerHTML += `
        <a target="_blank" href="https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}" class="yt-video">
        <img src="${el.snippet.thumbnails.maxres.url}"/>
        <span> ${el.snippet.title} </span>
        </a>`
    });
   
    console.log(data.items[0]);
});