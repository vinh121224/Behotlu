const profile=document.querySelector('div.profile');
const title=document.createElement('h1');
title.innerText='Thong tin cua toi';
title.className='title';
profile.appendChild(title)

const ten=document.createElement('h1')
ten.innerText='Do Quang Vinh';
ten.className='tencuatoi'
profile.appendChild(ten);

const lop=document.createElement('h2');
lop.innerText='lop12';
lop.className='lopcuatoi';
profile.appendChild(lop);

const date=document.createElement('p');
date.innerText='12/12/2004';
date.className='datecuatoi';
profile.appendChild(date);
