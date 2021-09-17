const danhsach = [
  {
    game: 'KILLING FLOOR 2',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/232090/header.jpg?t=1624372785',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame,Survival',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256839903/movie480_vp9.webm?t=1624372781',
  },
  {
    game: 'LEFT 4 DEAD 2',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/550/header.jpg?t=1630686839',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/5952/movie480.webm?t=1447353587',
  },
  {
    game: 'LAYERS OF FEAR 2',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1029890/header.jpg?t=1588953446',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256751899/movie480.webm?t=1576129672',
  },
  {
    game: 'DARK SOULS 3',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg?t=1628263692',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256663134/movie480.webm?t=1511366737',
  },
  {
    game: 'ALIEN ISOLUTIO',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/214490/header.jpg?t=1603026039',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/2033959/movie480.webm?t=1447363219',
  },
  {
    game: 'FRIDAY THE 13TH THE GAME',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/438740/header.jpg?t=1591725284',
    date: '2-2-2021',
    Storage: '35GB',
    Category: 'Action,Survival,TPS,Horror',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256683364/movie480.webm?t=1492525158',
  },
  {
    game: 'DEAD BY DAYLIGHT',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg?t=1631048920',
    date: '22-2-2021',
    Storage: '1.5GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256850508/movie480_vp9.webm?t=1631031443',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256850508/movie480_vp9.webm?t=1631031443',
  },
  {
    game: 'PHASMOPHOBIA',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg?t=1611245377',
    date: '22-2-2021',
    Storage: '1.5GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256776660/movie480.webm?t=1583525286',
  },
];
const danhsachgame = document.querySelector('div.freegames');
function saveGameToLocalstorage(thongtin) {
  localStorage.setItem('game', JSON.stringify(thongtin));
  location.replace('game.html');
}
function PrintToHtml(thongtin) {
  const game = document.createElement('div');
  game.className='game_background';
  const name = document.createElement('p');
  name.textContent = thongtin.game;
  const img = document.createElement('img');
  img.src = thongtin.img;
  const createdAt = document.createElement('p');
  createdAt.textContent = thongtin.date;
  const storage = document.createElement('p');
  storage.textContent = thongtin.Storage;
  const category = document.createElement('p');
  category.textContent = thongtin.Category;
  const button = document.createElement('button');
  button.id = 'check-btn';
  button.textContent = 'Xem chi tiết';
  button.onclick = () => {
    saveGameToLocalstorage(thongtin);
  };

  game.appendChild(img);
  game.appendChild(name);
  game.appendChild(button);
  danhsachgame.appendChild(game);
}

danhsach.forEach(function (thongtin) {
  PrintToHtml(thongtin);
});
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}