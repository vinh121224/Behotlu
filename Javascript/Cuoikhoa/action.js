const danhsach = [
  {
    game: 'CyberPunk 2077',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg?t=1621944801',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256810256/movie480_vp9.webm?t=1611326498',
  },
  {
    game: 'HITMAN 2',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/863550/header.jpg?t=1598895956',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,TPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256738783/movie480.webm?t=1545171866',
  },
  {
    game: 'REMANT: FROM THE ASHES',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/617290/header.jpg?t=1605745130',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,TPS,ShootingGame,Survival',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256747605/movie480.webm?t=1554857990',
  },
  {
    game: 'KILLING FLOOR 2',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/232090/header.jpg?t=1624372785',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame,Survival',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256839903/movie480_vp9.webm?t=1624372781',
  },
  {
    game: 'MAFIA DEFINITIVE EDITION',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1030840/header.jpg?t=1606265718',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256801143/movie480_vp9.webm?t=1606265680',
  },
  {
    game: 'DEVIL MAY CRY 5',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/601150/header.jpg?t=1608599498',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256815511/movie480_vp9.webm?t=1608599382',
  },
  {
    game: 'WATCH DOG 2',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/447040/header.jpg?t=1602605654',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256675152/movie480.webm?t=1479834207',
  },
  {
    game: 'GRAND THIEF AUTO V',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg?t=1618856444',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256757115/movie480.webm?t=1563930864',
  },
  {
    game: 'SEKIRO SHADOW DIE TWICE',
    img: 'https://cdn.akamai.steamstatic.com/steam/apps/814380/header.jpg?t=1603904569',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256806899/movie480_vp9.webm?t=1603837979',
  },
  {
    game: 'THE WITCHER 3',
    img: 'https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1607418742',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256658589/movie480.webm?t=1528288687',
  },
  {
    game: 'JUST CAUSE 4',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/517630/header.jpg?t=1620144409',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256765169/movie480.webm?t=1573147937',
  },
  {
    game: 'GTA SAN ANDRESS',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/12120/header.jpg?t=1627925349',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/12120/0000003303.1920x1080.jpg?t=1627925349',
  },
  {
    game: 'ARK SURVIVAL EVOLED',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/346110/header.jpg?t=1623347713',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256836250/movie480_vp9.webm?t=1622089232',
  },
  {
    game: 'JURASSIC WORLD EVOLUTION',
    img: 'https://cdn.akamai.steamstatic.com/steam/apps/648350/header.jpg?t=1595319162',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256719788/movie480.webm?t=1530634316',
  },
  {
    game: 'CONNAN EXILE',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/440900/header.jpg?t=1623062710',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256800337/movie480_vp9.webm?t=1599739266',
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
    game: 'DARK SOULS 3',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg?t=1628263692',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256663134/movie480.webm?t=1511366737',
  },
  {
    game: 'HUNT : SHOWDOWN',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/594650/header.jpg?t=1629993728',
    date: '22-2-2021',
    Storage: '1.5GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256783663/movie480_vp9.webm?t=1588176470',
  },
  {
    game: 'POPULATION : ONE',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/691260/header.jpg?t=1629061608',
    date: '22-2-2021',
    Storage: '1.5GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256801146/movie480_vp9.webm?t=1620138599',
  },
  {
    game: 'THE WALKING DEAD',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/866800/header.jpg?t=1612901642',
    date: '22-2-2021',
    Storage: '1.5GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256722995/movie480.webm?t=1531951573',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256722995/movie480.webm?t=1531951573',
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