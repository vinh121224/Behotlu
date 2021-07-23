let thuchienpheptinh4so={
    tong4so:function(sothu1,sothu2,sothu3,sothu4){
        return sothu1+sothu2+sothu3+sothu4
    },

    hieu4so:function(sothu1,sothu2,sothu3,sothu4){
        return sothu1-sothu2-sothu3-sothu4
    },

    tich4so:function(sothu1,sothu2,sothu3,sothu4){
        return sothu1*sothu2*sothu3*sothu4
    },

    thuong4so:function(sothu1,sothu2,sothu3,sothu4){
        return sothu1/sothu2/sothu3/sothu4

    }
}
const dapantong= (thuchienpheptinh4so.tong4so)
console.log (dapantong(6,5,3,1))
const dapanhieu= (thuchienpheptinh4so.hieu4so)
console.log (dapanhieu(11,1,2,4))
const dapantich=(thuchienpheptinh4so.tich4so)
console.log (dapantich(1,2,3,4))
const dapanthuong=(thuchienpheptinh4so.thuong4so)
console.log (dapanthuong(22,2,11,1))