let template = document.querySelector("#filmtemp").content;
let filmlist = document.querySelector("#filmlist");

function fetchFilms(){
    console.log("hæ");
    fetch("http://almakaren.com/KEA/theme07/WP/wordpress/wp-json/wp/v2/films?_embed")
        .then(e => e.json())
        .then(showFilms)
}

function showFilms(data){
    data.forEach(showSingleFilm);
}

function showSingleFilm(aFilm){
  let clone = template.cloneNode(true);
    clone.querySelector("h1").textContent = aFilm.title.rendered;
    //clone.querySelector(".descript").innerHTML = aFilm.content.rendered;
    clone.querySelector(".price span").textContent=aFilm.acf.price + " kr";
    clone.querySelector(".venue").textContent=aFilm.acf.venue;

   let day = aFilm.acf.date.substring(0, 2);
   let month = aFilm.acf.date.substring(2, 4);
   let year = aFilm.acf.date.substring(4, 8);
    clone.querySelector(".date").textContent=day+"."+month+"."+year;
    clone.querySelector(".time span").textContent=aFilm.acf.time;
    clone.querySelector(".director span").textContent=aFilm.acf.director;
    clone.querySelector(".genre").textContent=aFilm.acf.genre;


  if(aFilm._embedded["wp:featuredmedia"]){//img is there
     clone.querySelector("img").setAttribute("src", aFilm._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url)
  } else { // no img
      clone.querySelector("img").remove()
  }

    clone.querySelector('.readmore').href="subpage.html?id=" + aFilm.id;

  filmlist.appendChild(clone);
}
fetchFilms();
