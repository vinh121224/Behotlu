const box=document.querySelector('div.list');
const warehouse=[
    {
        ao:'áo sơ mi',
        img:'https://product.hstatic.net/1000375725/product/1024_a8db2888dc0d484786af03888cb83323_master.jpg',
        date:'11/3/2021',
    },
    {
        ao:'áo thể thao',
        img:'https://cf.shopee.vn/file/f02e479d4096b47906c18d9d9d2af774',
        date:'11/3/2021',
    },
    {
        ao:'áo jean',
        img:'https://cf.shopee.vn/file/3bf98a971a93bda6053cac1c572247f9',
        date:'11/3/2021',
    },
    {
        quan:'quần jean ',
        img:'https://cf.shopee.vn/file/39aa204c52faabcec85a6bf7667848f3',
        date:'11/3/2021',
    },
];
function addItem(luu){
    const abox=document.createElement('div.box');
    abox.querySelector('div.box');

    const ten=document.createElement('h1');
    ten.innerText=luu.ao;

    const ten1=document.createElement('h1')
    ten1.innerText=luu.quan;

    const hinhanh=document.createElement('img');
    hinhanh.src=luu.img;

    const ngay=document.createElement('h2');
    ngay.innerText=luu.date;

    box.appendChild(abox);
    abox.appendChild(ten);
    abox.appendChild(ngay);
    abox.appendChild(hinhanh);
}
warehouse.forEach(function(luu){
    addItem(luu);
})