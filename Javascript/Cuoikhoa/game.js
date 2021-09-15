function getGameFromLocalStorage(game){
    return localStorage.getItem('game')
}
console.log(getGameFromLocalStorage());

const list=document.querySelector('div.list')
const na=document.querySelector('div.na')

function getGametoHTML(){
    let gaming = JSON.parse(localStorage.getItem('game'))

    const game1 = document.createElement('div');
    game1.className='game_background1';
    const game2 = document.createElement('div');
    game2.className='game_background2';
    const detail=document.createElement('h1');
    detail.innerText='Thông Tin Chi Tiết';
    const name = document.createElement('h1');
    name.textContent = gaming.game;
    const img = document.createElement('img');
    img.src = gaming.img;
    const createdAt = document.createElement('p');
    createdAt.textContent ='Ngày Xuất bản : '+ gaming.date;
    const storage = document.createElement('p');
    storage.textContent ='Kích Cỡ : '+gaming.Storage;
    const category = document.createElement('p');
    category.textContent ='Thể Loại : '+ gaming.Category;
    const Add=document.createElement('button');
    Add.innerText='Thêm Vào Giỏ Hàng';

    game1.appendChild(img);
    game2.appendChild(detail);
    game2.appendChild(createdAt);
    game2.appendChild(storage);
    game2.appendChild(category)
    game2.appendChild(Add);
    na.appendChild(name);
    list.appendChild(game1);
    list.appendChild(game2);
}
getGametoHTML()