
// alert('hello ')


// Biến
//*quy tắc đặt tên
//*Các kiểu đặt tên
//*JavaScript phân biệt hoa thường

// cú pháp khai báo
// <datatype> <name_variable>;
// <datatype> <name_variable>;
// tự định nghĩa: var
var x = 3;
var y ="damLuan";

// Các phép toán với biến
// +  - * / %
// lưu ý với phép +
// 1 + "dev" = "1dev"
// 1 + "01" = "101"



// Các phép so sánh: > < >= <=  == ===
// == : Chỉ so sánh giá trị
// === : So sánh giá trị và datatype

console.log("giá trị của x là: ", x);
console.log("giá trị của x là: "+ x);
console.log("giá trị của y là: ", y);
console.log("giá trị của x +y là: ", x+y);

//Cấu trúc điều kiện: if else, swith case
//*) if - else
// phân loại: if thiếu, if đầy đủ, if lồng
if(x!=y){
    console.log("x <> y");
}

if(x==y){
    console.log("x=y");
}
else{
    console.log("x <> y");
}

//biện luận số nghiệm của phương trình bậc nhất 1 ẩn
// có dạng ax+b=0

var a=10;
var b =20;
// debugger; 
if(a==0 ){
    if(b != 0){
        console.log("phuong trinh vo nghiep");
    }else{
        console.log("phuong trinh co vo so nghiem");
    }
}else{
    console.log("phuong trinh co nghiem x= ", -b/a);
}

// if(a == 0 && b != 0){
//     console.log("phuong trinh vo nghiep");    
// }else if(a == 0 && b == 0){
//     console.log("phuong trinh co vo so nghiem");
// }
// else{
//     console.log("phuong trinh co nghiem x= ", -b/a);
// }

// if(b!=0 ){
//     if(a == 0){
//         console.log("phuong trinh vo nghiep");
//     }else{
//         console.log("phuong trinh co nghiem x= ", -b/a);
        
//     }
// }else{

//     console.log("phuong trinh co vo so nghiem");
    
// }


//BTVN 1: biện luận phương trình bậc 2
// có dạng ax^2+bx+c = 0;

//vòng lặp:  for/foreach; while/do-while
//cú pháp:
// for(khởi tạo biến đếm; điều kiện; hành động){
// thân for là các câu lệnh js
// }
//b1: khởi tạo biến đếm
//b2: kiểm tra điều kiện
// true: 2.1thực hiện thân for
//       2.2 thực thi hành động
//       2.3 quay lại bước 2
// false : dừng vòng lặp
// for(let i=0; i<=5; i++){
//     console.log(i);
//     if(i==4)
//         break;..return;
// }


// log ra màn hình f12 tất cả các số lẻ từ 0>=15
// for(let i=0; i<=15; i++){
//     if(i%2==1)
//         console.log(i);
// }

//log ra màn hình f12 tất cả các số chia hết cho 5 [1,100]
// for(let i=1; i<=100; i++){
//     if(i%5==0)
//         console.log(i);
// }
// var temp =1;
// while(temp <= 100){
//     if(temp%5==0)
//         console.log(temp);
//     temp++;
// }
// temp =1;
// do{
//     if(temp%5==0)
//         console.log(temp);
//     temp++;
// }while(temp <= 100)

// mảng: array
// khai niệm: là tập hơp các phần tử ví dụ [1,3,5,"dev"]
// mỗi phần tử thì được đánh 1 giá trị index tương ứng, phần tử bắt đầu từ 0 đến lenght -1
// khai báo: 2 cách
var arr1= new Array;
var arr2 =[1,2,3,4,5,6,7,"dev"];

// console.log(arr2[4]);
// arr2[4] =10
// console.log(arr2[4]);
// cách tương tác
// for(let i=0; i< arr2.length;i++)
// {
//     if(arr2[i]%2 == 0){
//         console.log(arr2[i]);
//     }
// }

var arr3 =[1,5,9,100,55,88,99,66,44,7];
//log các phần tử thoả mãn điều kiện có giá trị  nhỏ hơn 50
for(let i=0; i< arr3.length;i++)
{
    if(arr3[i] < 50){
        console.log("phần tử thứ "+i+ " có giá trị nhỏ hơn 50",arr3[i]);
    }
}


var arr =[1,5,9,100,55,88,99,66,44,7,88,99,66,7,11,22,66,8];
//log ra màn hình số lần suất hiện của phần tử có giá trị là 66

var tmp =0
for(let i=0; i< arr.length;i++)
{
    if(arr[i] ==66){
       tmp++;
    }
}
console.log("số lần xuất hiện của phần tử 66 là:",tmp)

var array =[1,5,9,100,55,88,99,66,44,7,88,99,66,7,11,22,66,8];
//log ra màn hình số lần xuất hiện của phần tử có giá trị khác nhau
var arrayTemp=[];
for(let i=0; i< arr.length;i++)
{
    if(arr[i] ==66){
       tmp++;
    }
}