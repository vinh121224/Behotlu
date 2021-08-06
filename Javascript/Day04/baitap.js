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
    const nameItem=document.createElement('div');
    nameItem.innerText=name1.loaiao;
    list.appendChild(nameItem);
}
// function addItem(img1){
//     const imgItem=document.createElement('div');
//     imgItem.innerText=img1.img;
//     list.appendChild(imgItem);
// }

danhsach.forEach(function(name1){
    addItem(name1)
});
// danhsach.forEach(function(img1){
//     addItem(img1)
// });