// Biến
// toán tử
// array
// cấu trúc rẽ nhánh, vòng lặp
// sử dụng function

// Hàm -function
// chia nhỏ tác vụ => dễ kiểm soát và maintain(nâng cấp) + tái sử dụng code

//tính tổng 2 số

function sum(a,b){
    var total =parseInt(a) + parseInt(b);
    console.log("Tổng của a + b = " +total);
}
sum(10,'200');

// biến toàn cục và biến cục bộ

// Cú pháp:  khai báo (function); cách sử dụng

var array =[5,6,8,1,3,1,9,8,5,11,5];
var array2 =[5,66,8,14,53,15,49,48,65,11,45];
// viết hàm tính tổng của các phần tử ở vị trí chia hết cho 3 trong mảng arr cho trước

function sumArr(arr){
    var total=0
    for(let i=0; i< arr.length;i++){
        if(i%3==0){
            total += parseInt(arr[i]);
        }       
    }
    console.log("Tổng mảng có vị trí chia hết cho 3 là: " + total);
    return total;
}
sumArr(array);
sumArr(array2);



// Định hình các bước cần thực hiện <==> xây dựng quy trình
// tương ứng mỗi bước => 1 function 
// các function:  tương các với nhau => xác định được các ảnh hưởng của functionN tới functionN+1
//                                  ==> đánh giá ảnh hưởng
// ==> SOLID


//DOM
var listUserName = ["test","html","javascript"]


var userInfor = {
    name : "test", 
    pass : "12345",
    height : 170,
    adress : "html"
};

var userInfor2 = {
    name : "test2", 
    pass : "12345",
    height : 172,
    adress : "html"
};


// function getUserInfor(){
//     var userName =document.getElementById('userName').value;
//     var password =document.getElementById('password').value;
//     console.log(userName);
//     console.log(password);
//     if(userName == "" || password == ""){
//         alert("User Name hoặc Password đang bị bỏ trống");
//     }else{
//         let check = false;
//         for(let i=0; i<listUserInfor.length; i++){
//             if(userName == listUserInfor[i].userName && password == listUserInfor[i].pass){
//                 check =true;
//                 break;
//             }
//         }
//         if(check){
//             alert("Thành công");
            
//         }else{
//             alert("User Name hoặc Password không đúng");
//         }
        
//     }
// }


// đối tượng <==> object
// syntax
// var obj = new Object();
var obj2 = {
    userName : "test", 
    pass : "12345",
};

var obj = {};
obj.userName = "html";
obj.pass = "12345";
var x = obj.userName;
var obj3 = {};
obj3.userName = "javascript";
obj3.pass = "12345";

//Lưu ý: tương tác với object thông qua thuộc tính
// <tên_object>.<tên _thuộc_tính>

var listUserInfor = [obj,obj2,obj3];


// regex


// tách hàm

function preCheck(){
    var userName =document.getElementById('userName').value;
    var password =document.getElementById('password').value;
    console.log(userName);
    console.log(password);
    if(userName == "" || password == ""){
        alert("User Name hoặc Password đang bị bỏ trống");
    }else{
        checkData(userName,password);
    }
}
function checkData(userName,password){
    let check = false;
    for(let i=0; i<listUserInfor.length; i++){
        if(userName == listUserInfor[i].userName && password == listUserInfor[i].pass){
            check =true;
            break;
        }
    }
    if(check){
        alert("Thành công");   
    }else{
        alert("User Name hoặc Password không đúng");
    }
}


// seclector in css
// đọc trước slide jquery
// arrayObject: tương tác nhiều hơn
