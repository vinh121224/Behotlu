//tim nghiem
function timnghiembac1(a,b){
    console.log(a+b)
}
timnghiembac1(3,5)
//tinh tien dien
const pheptinhtiendien={
    tinhtiendien:function(vnd,wh,songay){
        return vnd*wh*songay+"VNĐ"
    }
}
let bac1=pheptinhtiendien.tinhtiendien
console.log(bac1(1484,50,30))
let bac2=pheptinhtiendien.tinhtiendien
console.log(bac2(1533,100,30))
let bac3=pheptinhtiendien.tinhtiendien
console.log(bac2(1786 ,200,30))
let bac4=pheptinhtiendien.tinhtiendien
console.log(bac2(2242 ,300,30))
let bac5=pheptinhtiendien.tinhtiendien
console.log(bac2(2503,400,30))
let bac6=pheptinhtiendien.tinhtiendien
console.log(bac2(2587,500,30))
//object chim
const chimDaiBang={
    socanh:2,
    sochan:2,
    khanangBay:true,
    anthit:true,
    dacdiem:"loai san moi nguy hiem",
    chieucao:100+"cm"
}
const chimUng={
    chieucao:50+"cm",
    anthit:true,
    khanangBay:true,
    socanh:2,
    sochan:2,
    dacdiem:"san moi co to chuc"
}
const chimCanhCut={
    chieucao:130+"cm",
    anthit:true,
    khanangBay:false,
    socanh:2,
    sochan:2,
    dacdiem:"song o nam cuc"
}
const chimDaDieu={
    chieucao:1.8+"m",
    anthit:true,
    khanangBay:false,
    socanh:2,
    sochan:2,
    dacdiem:"chay rat nhanh"
}
const chimKiwi={
    chieucao:10+"cm",
    ancontrung:true,
    khanangBay:false,
    socanh:2,
    sochan:2,
    dacdiem:"song ve dem"
}
console.log(chimDaiBang)
console.log(chimCanhCut)
console.log(chimDaDieu)
console.log(chimKiwi)
console.log(chimUng)