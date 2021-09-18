function getGameFromLocalStorage(game){
    return localStorage.getItem('game')
}
console.log(getGameFromLocalStorage());

const list=document.querySelector('div.list');
const na=document.querySelector('div.na');
const ni=document.querySelector('div.ni');

function getGametoHTML(){
    let gaming = JSON.parse(localStorage.getItem('game'))

    const game1 = document.createElement('div');
    game1.className='game_background1';
    const game2 = document.createElement('div');
    game2.className='game_background2';
    const game3 = document.createElement('div');
    game3.className='game_background3';
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
    Add.className='add-cart';
    const trailer=document.createElement('iframe')
    trailer.src=gaming.vid;
    const detail2 =document.createElement('div');
    detail2.className='detail2';
    const st=document.createElement('h1');
    st.innerText='Cấu Hình Yêu Cầu';
    st.className='requirement';
    st.style.color='white'
    const tr=document.createElement('div');
    tr.className='tr';
    const specs=document.createElement('div');
    specs.className='min';
    const mi1=document.createElement('h2');
    mi1.innerText="Minium";
    const mi2=document.createElement('p');
    mi2.innerText="Processer : Core i5";
    const mi3=document.createElement('p');
    mi3.innerText="Memory : RAM : 8GB";
    const mi4=document.createElement('p');
    mi4.innerText="Graphics : GTX 440/Radeon HD 4850";
    const mi5=document.createElement('p');
    mi5.innerText="Storage : 20GB available space";
    const specs2=document.createElement('div');
    specs2.className='max';
    const ma1=document.createElement('h2');
    ma1.innerText="Maximum";
    const ma2=document.createElement('p');
    ma2.innerText="Processer : Core i7";
    const ma3=document.createElement('p');
    ma3.innerText="Memory : RAM : 16GB";
    const ma4=document.createElement('p');
    ma4.innerText="Graphics : GTX 1050/Radeon RX580";
    const ma5=document.createElement('p');
    ma5.innerText="Storage : 40GB available space";

    game1.appendChild(img);
    game2.appendChild(detail);
    game2.appendChild(createdAt);
    game2.appendChild(storage);
    game2.appendChild(category)
    game2.appendChild(Add);
    game3.appendChild(trailer);
    na.appendChild(name);
    list.appendChild(game1);
    list.appendChild(game2);
    ni.appendChild(game3);
    game3.appendChild(detail2);
    detail2.appendChild(st);
    detail2.appendChild(tr);
    tr.appendChild(specs)
    tr.appendChild(specs2)
    specs.appendChild(mi1);
    specs.appendChild(mi2);
    specs.appendChild(mi3);
    specs.appendChild(mi4);
    specs.appendChild(mi5);
    specs2.appendChild(ma1);
    specs2.appendChild(ma2);
    specs2.appendChild(ma3);
    specs2.appendChild(ma4);
    specs2.appendChild(ma5);

}
getGametoHTML()

