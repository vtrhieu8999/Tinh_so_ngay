let b=0;
function cal(a){
    let b = parseInt(document.getElementById(a).value);
    if (b<8){
        if(b%2==0){
            if(b==2) alert('Thang 2 co 28 hoac 29 ngay');
            else ngay30(b);
        }
        else ngay31(b);
    }
    else if(b>12) alert('Khong ton tai thang do');
        else if(b%2==0) ngay31(b);
            else ngay30(b);
}

function ngay30(c) {alert('Thang '+c+' co 30 ngay');}
function ngay31(c) {alert('Thang '+c+' co 31 ngay');}