// Bước 1: tạo một biến đại diện cho thẻ bên html
// const divContent

// Bước 2: gán biến bằng câu lệnh document.querySelector()
// const divContent  = document.querySelector()

// Bước 3: xác định thẻ cần lấy bên html (tên thẻ.tên class)
const divBody1 = document.querySelector('div.body1');

// Bước 4: làm những hành động mình muốn với thẻ mà mình đã lấy
// ví dụ: Thêm text vào trong thẻ
// Bước 4.1: gọi biến đại diện cho thẻ
// divContent
// Bước 4.2: chọn thuộc tính để thêm text vào trong thẻ
// - innerHTML
// - innerText
divBody1.innerHTML = 'this is body';

const divFooter = document.querySelector('div.footer');

divFooter.innerHTML = 'this is footer';

// Tạo thẻ html trong javascript

// Bước 1: Tạo một biến để lưu thẻ muốn thẻ
// const h1Hello
// Bước 2: dùng document.createElement()
// const h1Hello = document.createElement()
// Bước 3: thêm tên thẻ cần tạo vào trong createElement('tag name')
// ví dụ: thêm thẻ h1
// const h1Hello = document.createElement('h1')

const h1Hello = document.createElement('h1');
const strongTest = document.createElement('strong');
// Bước 4: thêm text cho thẻ h1
h1Hello.innerText = `Hello i'm here`;
strongTest.innerText = `This is strong element`;
// Bước 5: tìm thẻ cha mà mình muốn thêm thẻ h1 này vào
// ví dụ: thêm thẻ h1Hello vào trong divFooter
// Bước 5.1: dùng thuộc tính appendChild(h1Hello)
// divFooter.appendChild(h1Hello);

const divContent = document.querySelector('div.content');

divFooter.appendChild(h1Hello);
divFooter.appendChild(strongTest);

// style cho thẻ html trong javascript

// Cách 1: dùng css

// Bước 1: chọn thẻ cần style
// ví dụ: h1
// Bước 2: style trong css như bình thường với className vừa tạo
h1Hello.className = 'hello';
strongTest.className = 'test';

// Cách 2: dùng thuộc tính style của thẻ trong js
// BƯớc 1: chọn thẻ cần style
// ví dụ: h1Hello
// Bước 2: dùng thuộc tính style đẻ style cho thẻ

h1Hello.style.fontSize = '100px';
h1Hello.style.textDecoration = 'underline';


// Bài tập về nhà
// 1.
// Làm ra một trang web giới thiệu một quyển sách, một câu truyện với nội dung là
// tên tác giả, nội dung, tóm tắt
