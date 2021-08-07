const list=document.querySelector('div.list');
const danhsach=[
   {
    loaiao:'ao somi',
    img:'https://salt.tikicdn.com/cache/w444/ts/product/3b/a7/57/ea0e3fbe93ae196067559dc856094fb5.png',
   },
   {
    loaiao:'ao flannel',
    img:'https://cdn.gumac.vn/image/ao-flannel-shirt-la-gi100920201504288474.jpg',
   },
   {
    loaiao:'ao jean',
    img:'https://cf.shopee.vn/file/3bf98a971a93bda6053cac1c572247f9',
   },
   {
    loaiao:'ao the thao',
    img:'https://bizweb.dktcdn.net/100/239/277/products/ao-the-thao-nam-dunlop-dabas8088-1c-wt-01.jpg?v=1551068005703',
   },
];
function addItem(name1){
    const place=document.createElement('div.place');
    place.getElementsByClassName('place');
    const nameItem=document.createElement('h1');
    nameItem.innerText=name1.loaiao;
    const imgItem=document.createElement('img');
    imgItem.src=name1.img;
    place.appendChild(nameItem);
    place.appendChild(imgItem);
    list.appendChild(place)
}
danhsach.forEach(function(name1){
    addItem(name1)
});
