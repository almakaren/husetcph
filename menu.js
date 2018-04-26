window.addEventListener('load',()=>{
  let menuOpen = false;
  let menuIcon = document.querySelector(".menuIcon")
  let menu = document.querySelector(".menu");
    let appbar = document.querySelector(".appbar");
  menuIcon.addEventListener('click', toggleMenu);

  function toggleMenu(){
    menuOpen = !menuOpen;
    menuIcon.classList.toggle("rotate");
    menu.classList.toggle("hidden");
    appbar.classList.toggle("shadow");
  }

  fetch("http://almakaren.com/KEA/theme07/WP/wordpress/wp-json/wp/v2/categories")
    .then(e=>e.json())
    .then(buildMenu)

  function buildMenu(data){
    let parentElement = document.querySelector(".menu ul");
    data.forEach(item => {
      console.log(item);
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.textContent = item.name;
      a.href="index.html?category="+item.id;

      li.appendChild(a);
      parentElement.appendChild(li);


    })
  }


});
