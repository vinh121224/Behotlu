// function

// named function
// function nameOfFunction(){

// }

// example

const ChuA = 'A';
ChuA;

// Hàm tính tổng của hai số
function TinhTongCuaHaiSo() {
  console.log(15 + 7);
}
TinhTongCuaHaiSo; // Gọi tên hàm
// TinhTongCuaHaiSo() // Khi thêm dấu () vào cuối tên hàm thì ta sẽ có lời gọi hàm

let SaoChepHamTinhTong = TinhTongCuaHaiSo;
// function SaoChepHamTinhTong(){

// } // Sẽ báo lỗi vì chúng ta đã khai báo tên hàm này rồi

SaoChepHamTinhTong = function () {
  console.log(7 + 7);
};

// unnamed function

// SaoChepHamTinhTong();

// Truyền tín hiệu vào hàm đi
// function TinhTongCuaHaiSo() {
//   console.log(15 + 7);
// }
function TinhTongCuaHaiSo(soThu1, soThu2) {
  console.log(soThu1 + soThu2);
}

// TinhTongCuaHaiSo(25, 30);

// function SaoHoa(tinHieu) {
//   console.log(tinHieu);
//   return 'Sao hoa da nhan duoc tin hieu';
// }

// const TraiDat = SaoHoa('Hello sao hoa');
// console.log(TraiDat);

// const MatTrang = TraiDat;
// Tất cả mọi tính chất của function khi gán hoặc tạo đều giống như array về mặt địa chỉ

// Object
const TenObjet = {};
// Tất cả mọi tính chất của object khi gán hoặc tạo đều giống như array về mặt địa chỉ

const conCho = {
  soChan: 4, // Trong object ta dùng dấu : để có thể gán dữ liệu
  ten: 'Lulu',
  coAnTapKhong: false,
  keu: function () {
    console.log('gau gau');
  },
};

// console.log(conCho.keu());
// // console.log(conCho.ten);
// conCho.ten = 'Milu';
// console.log(conCho.ten);
// const husky = { ...conCho }; // gán address của conCho cho husky

// husky.ten = 'Toto';
// console.log(husky.ten); // Toto
// console.log(conCho.ten); // Milu

// console.log(husky);

const Laptop = {
  nhanHieu: 'asus',
  manhinh: '15,6 inch',
};

const conMeo = {
  soChan: 4, // Trong object ta dùng dấu : để có thể gán dữ liệu
  ten: 'Mimi',
  coAnTapKhong: false,
  keu: function () {
    console.log('meow meow');
  },
};

const conGa = {
  soChan: 2, // Trong object ta dùng dấu : để có thể gán dữ liệu
  soCanh: 2,
  ten: 'Lala',
  coAnTapKhong: true,
  keu: function () {
    console.log('ò ó ò');
  },
};

// Hàm tính tổng của ba số
// function TinhTongCuaBaSo(){

// }

const HamTinhTong = {
  cua2So: function (soThu1, soThu2) {
    return soThu1 + soThu2;
  },
  cua3So: function (soThu1, soThu2, soThu3) {
    return soThu1 + soThu2 + soThu3;
  },
};
const dapAnTinhTong2So = HamTinhTong.cua2So(3, 5);
const dapAnTinhTong3So = HamTinhTong.cua3So(2, 9, 5);
console.log('Tong hai so: ', dapAnTinhTong2So);
console.log('Tong ba so: ', dapAnTinhTong3So);

