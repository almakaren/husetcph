let urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get("id");
console.log("i want to get article: " + id);

fetch("http://almakaren.com/KEA/theme07/WP/wordpress/wp-json/wp/v2/films/" + id +"?_embed")
  .then(e=>e.json())
  .then(showSingleFilm)


function showSingleFilm(aFilm){
  console.log(aFilm);
    document.querySelector(".title").textContent = aFilm.title.rendered;
    document.querySelector(".descript").innerHTML = aFilm.content.rendered;
    document.querySelector(".price").textContent=aFilm.acf.price +" kr";
    document.querySelector(".venue").textContent=aFilm.acf.venue;

    let day = aFilm.acf.date.substring(0, 2);
    let month = aFilm.acf.date.substring(2, 4);
    let year = aFilm.acf.date.substring(4, 8);
    document.querySelector(".date").textContent=day+"."+month+"."+year;
    document.querySelector(".time span").textContent=aFilm.acf.time;
    document.querySelector(".director span").textContent=aFilm.acf.director;
    document.querySelector(".genre").textContent=aFilm.acf.genre;


  if(aFilm._embedded["wp:featuredmedia"]){//img is there
     document.querySelector(".poster").setAttribute("src", aFilm._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url)
  } else { // no img
      document.querySelector("img").remove()
  }













  //show carsection
  //document.querySelector("#singleFilm").classList.add("slideInFilm");
}



/*
function showSingleFilm(aFilm){
  let clone = template.cloneNode(true);
    clone.querySelector("h1").textContent = aFilm.title.rendered;
    //clone.querySelector(".descript").innerHTML = aFilm.content.rendered;
    clone.querySelector(".price span").textContent=aFilm.acf.price;
    clone.querySelector(".venue").textContent=aFilm.acf.venue;
    clone.querySelector(".date").textContent=aFilm.acf.date;
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
*/
