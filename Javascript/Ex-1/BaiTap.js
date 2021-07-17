//

const; // đã khai báo thì không thay đổi được
const number = 1;
number = 2; // error
let;// có thể thay đổi trong quá trình code
let number = 1;
number = 2; // accept

// Các kiểu dữ liệu

Number,
String,
Boolean,
Float32Array,
Array, // Chứa các phần tử cùng kiểu dữ liệu
Object; // Chứa cácc thuộc tính không định dạng hoặc một cấu trúc tự định dạng
''

const temp = [1,2,3,4,"5"] // wrong
[1,2,3,4,5] // legal

const teacher = {
  name: "Luân",
  age: 21
}

const mindX = [{
  name: "Luân",
  age: 21
},{
  name: "Minh",
  age: 21
},{
  name: "Hiếu",
  age: 21
},{
  name: "Long",
  age: 21
},{
  name: "Vũ",
  age: 21
}];

// Cấu trúc câu lệnh điều kiện
const flag = 3;
if(flag > 3){
  console.log('< 3')
}
else{

}

// Cấu trúc câu lệnh vòng lặp

while(true){

}

for(let i = 0 ;i< 10 ; i++);

Hàm

const Ten = LayTen;
console.log(Ten());

function LayTen(ten) {
  return 'Bạn tên là ' + ten;
}
const Greeting = LayTen('Phuc');
// Greeting = 'Bạn tên là ' + ten
console.log(LayTen('Vinh'));

function LayTen() {} // normal function

const LayTen = () => {}; // arrow function

// Tạo 20 hàm không return kết quả
// Tạo 20 hàm return kết quả
// Tạo 20 hàm có tham số
// Gọi toàn bộ hàm với chức năng console.log()

const sendAjax = (a, b) => {

}