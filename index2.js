
const serchFrom = document.querySelector("form");
const moviContainer = document.querySelector(".serch-icon");
const inputBox = document.querySelector(".serch-input");
const sp = document.querySelector("#sp");
const movi = document.querySelector("#movi");
const nv = document.querySelector("#nv");
const number = document.querySelector(".number");
const nv2 = document.querySelector("#nv2");
const text20 = document.querySelector("#text20");
const p = document.createElement("div");
const menu = document.querySelector("#menu");
const mainAyte = document.querySelector("#main-aytem");
const someon = document.querySelector("#someone");
let main = document.querySelector('.main');
let po = document.querySelector('.po');
let div1 = document.createElement('div');


const getMoviInfo = async(moviName)=>{
    const myApiKey = `http://www.omdbapi.com/?i=tt3896198&apikey=87e6fe62&t=${moviName}`;
   
    const reponse =  await fetch(myApiKey);
    const data = await reponse.json();
    console.log(data);
    showMoviData(data);
                        
}

const showMoviData = (data)=>{
    
   moviContainer.innerHTML = ""
   p.innerHTML = `<i class="fa-sharp fa-solid fa-magnifying-glass"></i>`;
   moviContainer.appendChild(p);
const {Title,imdbRating,Genre, Released, Runtime,Actors,Director,Poster,Plot,Year,Writer} = data;
const moviElement = document.createElement("div");
moviElement.classList.add('movi-info');
moviElement.innerHTML = `<h2></h2>`;
                
inputBox.appendChild(moviElement)

const moviGenreElement = document.createElement('div');
// moviGenreElement.classList.add('movi-henra');
// Genre.split(",").forEach(element=>{
//     const p = document.createElement('p');
//     p.innerText = element;
//     moviGenreElement.appendChild(p)
// });
moviElement.appendChild(moviGenreElement);
// moviElement.innerHTML += `<p><span>Released:</span>${Released}</p>
// <p><span>Actors:</span>${Actors}</p>
// <p><span>Director:</span>${Director}</p>
// <p><span>Plot:</span>${Plot}</p>`

//poster
const moviPoster = document.createElement('div');
moviPoster.classList.add('movi-poster');
moviPoster.innerHTML = `<img src = "${Poster}"/>`
moviContainer.appendChild(moviPoster)
moviContainer.appendChild(moviElement);
//title
const text = `Download ${Title} ${Year} Dual Audio {Hindi-Telugu} Movie 480p | 720p | 1080p WEB-DL ESub`;
const textBox = document.createElement('div');
textBox.classList.add('movi-text');
textBox.innerHTML = `${text}`
moviPoster.appendChild(textBox);

const megaProject = ()=>{
    moviPoster.style.display = "none"
    // // nv.style.display = "none"
    // nv2.style.visibility = "hidden"
    // number.style. visibility = "hidden"
    mainAyte.style.display = "none"
    someon.style.display = "none"

    let body = document.createElement('body')
    menu.appendChild(body)
   let h2 =   div1.innerHTML = `<h2 id="h2">Download ${Title} ${Year} Dual Audio {Hindi-Telugu} Movie 480p | 720p | 1080p WEB-DL ESub</h2>
      <i class="fa-solid fa-calendar-days" id="ico">${Year}</i>
      <p class="content">✅Download ${Title} Dual Audio [Hindi – Telugu] Movie available in 1080p, 720p & 480p HD Qualities For Your Mobile/tablet/Computer. This movie is based on Action, Drama.</p>
       <p class="content2">ERROR EAGLE Provide You with Super Quality Of Movies and WEB Series. We Provide Google Drive Direct Download Links For Fast And Secure Download. You Can Join us on Telegram For Latest Updates.</p>
        <div class="navbar2">
       <pre id="part"> <pre class="text">${Title}</pre>
       ${Genre} | ${Released} 
                Director:<pre class="text">${Director}</pre>
                Writer::<pre class="text">${Writer}</pre>
                Stars::<pre class="text">${Actors}</pre>
               <pre class="one">A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for.</pre>
                Countries: India
                Languages: Languages: Hindi, Telugu
                Source: <pre class="text">imdb.com</pre></pre>
                <img src="${Poster}" class="sitaramam"> 
            <i class="fa-solid fa-star" id="star">${imdbRating}</i>
    </div>
     <h2 class="h3">Download ${Title} ${Year} Dual Audio [Hindi-Telugu] Movie ~ EAGLE MOVIES</h2>
          <h2 class="h3">Storyline:</h2>
          <p class="Storyline">${Plot}</p>                                       
          <h2 class="h3">Screenshort</h2>
           <img src="${Poster}"height="340px" width="800px" class="Screenshort">
          <img src="${Poster}"height="340px" width="800px" class="Screenshort2">
          <img src="${Poster}" class="Screenshort3" height="340px" width="800px">
          <img src="${Poster}"height="340px" class="Screenshort4" width="800px">
        </main>
        <footer>
            <h2 class="downlod">${Title} ${Year} Hindi 480p [500MB]</h2>
          <a href="https://sidx.ozolinks.lol/?id=WU1mNzQ0SERtd1dCeER5QkJGM1pXWEhNS2RwVVdoVHhuMHYyeUtUNnRhcWsxZ0NIUVBJRDRRN2JaUlE2aGUyYzBVcmNJeU1MSTgxV3lBZ2dhcWxzUW9tR3ZHVFd2ZFA4cWJhU1laS05pOVcwbEQyck9rZWN1Um9Obit6UkI5N2hoOUh4YzllWnV2RmtFN1h6NTlmdzJUYkNhQ2hIZTFrSldIWnRwOWVRQSt2S213ejcydTd3b2lldzJvMlV0NVdwSzcvQitzZS9tOVgxcm5WcnIva2NXMHF4VlRBZ3dZMmJIMmltRVJ6ZlN2Yz0="><button class="button1"><i class="fa-brands fa-google-drive"></i>Google Drive</button></a>
          <a href="https://web.sidexfee.com/?id=WU1mNzQ0SERtd1dCeER5QkJGM1pXUmhHOWM4M3pJdCt5OGppOXd3MUlHZ3A0Vll6Q1huSEU3emdmSW4zcHNBbm5XTzI4c2tBQTA5RmZoMytaR0xzeUNjTEt5NTQ0dXZaUnNMSmZvRVRVM1k9"><button class="button2"><i class="fa-solid fa-download"></i></i>Downlod Link</button></a>
          <h2 class="downlod2">${Title} ${Year}Hindi 720p [870MB]</h2>
         <a href="https://sidx.ozolinks.lol/?id=WU1mNzQ0SERtd1dCeER5QkJGM1pXWEhNS2RwVVdoVHhuMHYyeUtUNnRhcWsxZ0NIUVBJRDRRN2JaUlE2aGUyYzBVcmNJeU1MSTgxV3lBZ2dhcWxzUXVkdSt3NkdyQ2ZIQmtGTHRzeitXREx3SFdwV0R1QVArVTNhaG5sRHk4Q2NTTFBMVVhmdW0wazVRcytvNWI2Y2tWWTA3S1h0WWtNdE9wanc2OXI0NEVWWTF3S29zVDVEa08xcUc2K3NkcnRueW13T2NobVRXZGZtUmVubWh1dmlaOTVIQXVXeS9vYWNhVmgvbFdvdEtRST0="><button class="button1"><i class="fa-brands fa-google-drive"></i>Google Drive</button></a>
          <a href="https://dizz.ozolinks.lol/?id=WU1mNzQ0SERtd1dCeER5QkJGM1pXUmhHOWM4M3pJdCt5OGppOXd3MUlHZ3A0Vll6Q1huSEU3emdmSW4zcHNBbm14bWVlVGhZV2dQZE8zNmMya2RyTCtWc2ZlaWJuT1NLVkY2OHN2c1JoTlk9"><button class="button2"><i class="fa-solid fa-download"></i></i>Downlod Link</button></a>
          <h2 class="downlod3">${Title} ${Year} Hindi 720p [1.3GB]</h2>
          <a href="https://sidx.ozolinks.lol/?id=WU1mNzQ0SERtd1dCeER5QkJGM1pXWEhNS2RwVVdoVHhuMHYyeUtUNnRhcWsxZ0NIUVBJRDRRN2JaUlE2aGUyYzBVcmNJeU1MSTgxV3lBZ2dhcWxzUXVkdSt3NkdyQ2ZIQmtGTHRzeitXREx3SFdwV0R1QVArVTNhaG5sRHk4Q2NTTFBMVVhmdW0wazVRcytvNWI2Y2tWWTA3S1h0WWtNdE9wanc2OXI0NEVWWTF3S29zVDVEa08xcUc2K3NkcnRueW13T2NobVRXZGZtUmVubWh1dmlaOTVIQXVXeS9vYWNhVmgvbFdvdEtRST0="><button class="button1"><i class="fa-brands fa-google-drive"></i>Google Drive</button></a>
         <a href="https://dizz.ozolinks.lol/?id=WU1mNzQ0SERtd1dCeER5QkJGM1pXUmhHOWM4M3pJdCt5OGppOXd3MUlHZ3A0Vll6Q1huSEU3emdmSW4zcHNBbm14bWVlVGhZV2dQZE8zNmMya2RyTCtWc2ZlaWJuT1NLVkY2OHN2c1JoTlk9"><button class="button2"><i class="fa-solid fa-download"></i></i>Downlod Link</button></a>
         <h2 class="downlod4">${Title} ${Year} Hindi 1080p (10Bit) [2.7GB]</h2>
          <a href="https://dizz.ozolinks.lol/?id=WU1mNzQ0SERtd1dCeER5QkJGM1pXWEhNS2RwVVdoVHhuMHYyeUtUNnRhcWsxZ0NIUVBJRDRRN2JaUlE2aGUyYzBVcmNJeU1MSTgxV3lBZ2dhcWxzUWtIK2NPZndVTDhwTlR0bTBaYkVNa2NoOVVLaURYR0plT1FkL3dWMitEU08rS1kySXZtV0R1VTVJekFWdkxlN2ltdkZCb2RZR1piU3VqSGdHVUYzcTFMRGlPaitwOE5kazROT3pyc0NwZS91SVA5MEJURVpOZjROeElhbTVtVW82L1g2TndzbDZBUklZZDlob2t0UHp6OD0="><button class="button1"><i class="fa-brands fa-google-drive"></i>Google Drive</button></a>
          <a href="https://ww2.dizztips.com/?id=WU1mNzQ0SERtd1dCeER5QkJGM1pXUmhHOWM4M3pJdCt5OGppOXd3MUlHZ3A0Vll6Q1huSEU3emdmSW4zcHNBbjR2SnkwWVUzZzMrTXBFQS9aRHhWMEtxVE1VK29XWENzbktuYVJ4WndzR1E9"></a><button class="button2"><i class="fa-solid fa-download"></i></i>Downlod Link</button></a>
          <h2 class="downlod4">${Title} ${Year} Hindi 1080p [6.4GB] 4k</h2>
          <a href="https://dizz.ozolinks.lol/?id=WU1mNzQ0SERtd1dCeER5QkJGM1pXWEhNS2RwVVdoVHhuMHYyeUtUNnRhcWsxZ0NIUVBJRDRRN2JaUlE2aGUyYzBVcmNJeU1MSTgxV3lBZ2dhcWxzUWtIK2NPZndVTDhwTlR0bTBaYkVNa2NoOVVLaURYR0plT1FkL3dWMitEU08rS1kySXZtV0R1VTVJekFWdkxlN2ltdkZCb2RZR1piU3VqSGdHVUYzcTFMRGlPaitwOE5kazROT3pyc0NwZS91SVA5MEJURVpOZjROeElhbTVtVW82L1g2TndzbDZBUklZZDlob2t0UHp6OD0="><button class="button1"><i class="fa-brands fa-google-drive"></i>Google Drive</button></a>
          <a href="https://ww2.dizztips.com/?id=WU1mNzQ0SERtd1dCeER5QkJGM1pXUmhHOWM4M3pJdCt5OGppOXd3MUlHZ3A0Vll6Q1huSEU3emdmSW4zcHNBbjR2SnkwWVUzZzMrTXBFQS9aRHhWMEtxVE1VK29XWENzbktuYVJ4WndzR1E9"><button class="button2"><i class="fa-solid fa-download"></i></i>Downlod Link</button></a>
          <h2 class="downlod5">Watch Song</h2>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/GY4BgdUSpb;start=19" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="anuj"></iframe>
          <a href="https://youtu.be/_XKJp45PcfY?si=qNMUbpMnVzn21-YE"><button class="button6">HOW to Downlod</buttin></a>
          <a href="https://desktop.telegram.org/"><button class="button5">Join Telegram</button></a>`
      body.appendChild(div1) 
 }
 const megaProject2 = ()=>{
    moviPoster.style.display = "block"
    div1.innerHTML = ""
    mainAyte.style.display = "block"
    someon.style.display = "block"
    mainAyte.style.display = "flex"
 }   
mainAyte.style.display = "block"
    someon.style.display = "block"
    mainAyte.style.display = "flex"
main.style.display = "none"

po.style.display = "none"


moviPoster.addEventListener('click',megaProject)
inputBox.addEventListener('click',megaProject2)
}

serchFrom.addEventListener('submit',(e)=> {
    e.preventDefault();
    const moviName = inputBox.value.trim();
    if (moviName !== '') {
     getMoviInfo(moviName)
    }
    
//   sp.style.display = "none";
//   movi.style.display = "none";
//   nv.style.marginTop = "692px"
                      
 });
