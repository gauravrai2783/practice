
// accept searchbar value
// get movie data from Youtube
// wee need url
// append Data

// api url= `https://youtube.googleapis.com/youtube/v3/search?q=brahmastra&key=[YOUR_API_KEY]`


let Api_KEY= "AIzaSyARVlZjRaGF-jZwMtRPlfDfB_Tttmn7KdI" ;

let container=document.getElementById("container")


function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}


// async function getData(){

// }

// youtube identifies video using video id

let getData=async ()=>{

    try {
        
        let query=document.getElementById("query").value;

        let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${Api_KEY}&part=snippet&maxResults=20`);

        let {items}=await res.json();

        let arr_of_videos=items;
        // console.log('arr_of_videos:', arr_of_videos)

        appendVideos(arr_of_videos)


    } catch (error) {
        console.log('error:', error)
    }
}

let appendVideos=(data)=>{
    container.innerHTML=""
data.forEach(({snippet:{title,thumbnails}, id:{videoId}}) => {
    
    // let title=el.snippet.title;
    // let videoId=el.id.videoId;
let div=document.createElement("div");
let iframe=document.createElement("iframe");
iframe.src= `https:www.youtube.com/embed/${videoId}`

iframe.width="100%"
iframe.height="100%";
iframe.allow="fullscreen"

let name=document.createElement("h5");
name.innerText=title

div.append(iframe,name);
container.append(div)


    console.log(title,thumbnails,videoId)

});

}

