const danhsach = [
  {
    game: 'MAFIA DEFINITIVE EDITION',
    img: 'https://cdn.akamai.steamstatic.com/steam/apps/1030840/header.jpg?t=1606265718',
    date: '22-2-2021',
    Storage: '35GB',
    Category: 'Action,Adventure,FPS,ShootingGame',
    vid:'https://cdn.cloudflare.steamstatic.com/steam/apps/256801143/movie480_vp9.webm?t=1606265680',
  },
  {
    game: 'DEVIL MAY CRY 5',
    img: 'https://cdn.akamai.steamstatic.com/steam/apps/601150/header.jpg?t=1608599498',
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
  img.className="image";
  const add=document.createElement('a')
  add.className='add-cart';
  add.innerText='Thêm vào giỏ';
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
  game.appendChild(add);
  game.appendChild(name);
  game.appendChild(button);
  danhsachgame.appendChild(game);
}

danhsach.forEach(function (thongtin) {
  PrintToHtml(thongtin);
});
