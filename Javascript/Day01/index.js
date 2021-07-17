// Day 01 Variables
"strict mode"
let soDo1 = "Nha bon lau" // cũng để sử dụng trên toàn bộ code
const soDo2 = "Nha 5 lau" // Bất biến

// Kiểu dữ liệu

let stringVariable = "Chữ"; // string


let lastname = "Luân";
let firstname = "Lại";

let name = lastname + " " + firstname;
// console.log(name);
// console.log(String(name).toUpperCase('u'));
// toUpperCase: chuyển tất cả nội dung thành chư hoa => string "luan".toUpperCase() => "LUAN"
// toLowerCase: chuyển tất cả nội dung thành chư thường => string "HAHA".toLowerCase() => "haha"
// substr: Cắt một chuỗi ra => string "luan".substr(0,3) => "n"
// includes: Kiểm tra xem có tồn tại chuỗi con trong chuỗi cần tìm hay không => string "luan".includes("a") => true


// NUMBER

let numberVariable = 15121; // number
// 515151 Không có phần thập phân => kiểu số nguyên (int)
// 5112515.61616 Có phần thập phân => kiểU số thực (float)

// Hàm làm tròn số
let so1 = 515125;
let so2 = 513;
// console.log(so1/so2);
// console.log(parseInt(so1/so2));  
// console.log(Math.round(so1/so2).toFixed(0));
// console.log(Math.ceil(so1/so2).toFixed(0));

let numberPlusString = so1 + name;
// console.log(so1);
// console.log(name);
// console.log(typeof numberPlusString);

// Ép kiểu dữ liệu từ string sang number
let a = 1;
let b = "2"; // string number chuyển về number => Number(string number)
// console.log(a+Number(b));

// parseInt(): Làm tròn theo quy tắc toán ,Math.ceil(): Làm tròn lên, Math.round(): Làm tròn xuống
// typeof variable => trả về kiểu dữ liệu hiện tại của biến


let boolVariable = true; // boolean

// SO SÁNH NÔNG
// so sánh nông sẽ cố gắng chuyển biến bên phải dấu so sánh thành cùng kiểu dữ liệu với biến bên trái và so sánh giá trị của chúng
// console.log(Boolean(2)); trả về true
// console.log(2==true); // trả về false
// console.log(Boolean(2)==true); // trả về true
// với Number thì 0 => false, 1 => true
// Chuyển từ Number sang Boolean thì 0 => false, khác 0 => true

// console.log(Boolean("4"));
// console.log(Boolean("4") == true);

// với String thì "" => false, "Có bất kì kí tự nào" => true
// Chuyển từ String sang Boolean thì "" => false, khác "" => true

// SO SÁNH SÂU
// so sánh sâu sẽ so sánh kiểu dữ liệu trước => nếu kiểu dữ liệu mà khác nhau => trả về false,
//, kiểU dữ liệu mà giống nhau thì sẽ đi so sánh giá trị => nếu giá trị bằng nhau thì trả về true, ngược lại false
// console.log(1=="1");
// console.log(1 === "1");
// console.log(Boolean(1) === true);



let arrayVariable = [] // array

let HopBut1 = ["Bút chì", "Bút Mực", "Bút bi"] // c, c++ đúng 
let HopBu2t = ["Bút chì", "Bút Mực", "Thước kẻ"] // c, c++ đúng 
let HopBut3 = ["Bút chì", "Bút Mực", 1, true] // c, c++ sai 
// Với Javascript thì cả 3 trường hợp đều đúng
// Dynamic type vs Static type
const numbers = [4, 5, 6, 726, 41, 635, 512];
// filter, reduce, slice, splice

const arrA = [3, 5]; // javascript con trỏ arrA có địa chỉ là address1
const arrC = arrA; // gán address1 cho arrC
const arrD = [...arrA]; // tạo cho arrD một địa chỉ mới và gán giá trị bằng với giá trị của arrA
const arrB = [3, 5]; // javascript con trỏ arrB có địa chỉ là address2
// console.log(arrA===arrC);
// arrA[0] = 1;
// console.log(arrA);
// console.log(arrC);
// console.log(arrD);

const string1 = "1,2"; // string
const array1 = ["1", "2"]; // array
console.log(array1.toString())
console.log(string1 == array1)
console.log(string1 === array1)

// ******** Bài tập ********

/*
So sánh một số giá trị
1. [] vs true; 
2. [1] vs true;
3. [] vs '';
4. [] vs 4214.5125;
5. a1=[3,5] vs b1=[3,5] => trả về true 

a) so sánh nông từ 1 -> 5;
b) so sánh sâu từ 1 -> 5;
c) giải thích tại sao ra được kết quả.
*/



// Kiến thức của buổi phụ
let functionVariable = () => {

} // function

let objectVariable = {

}