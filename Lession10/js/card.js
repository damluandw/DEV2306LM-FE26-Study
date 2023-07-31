var listProduct = [
    {
        id: 1,
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSwqZPt6_1vv0-1d8kinSuJRuMyAv0HPwgP_r_avs09w2Afg7X-lNBqsgkC8IN15x_zxwEfHEHcDxHvZb9OusONCCZQxZNPB8Mn4TiCMu9YjO7lQ3t6Jd9u&usqp=CAc",
        name: "Sản phẩm 1",
        price: 2000000,
        quantity: 1
    },
    {
        id: 2,
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSwqZPt6_1vv0-1d8kinSuJRuMyAv0HPwgP_r_avs09w2Afg7X-lNBqsgkC8IN15x_zxwEfHEHcDxHvZb9OusONCCZQxZNPB8Mn4TiCMu9YjO7lQ3t6Jd9u&usqp=CAc",
        name: "Sản phẩm 2",
        price: 3000000,
        quantity: 2
    }
]

function sumPrice() {
    var sum = 0
    for (i = 1; i <= listProduct.length; i++) {
        sum += totalPro(i)
    }
    $('.total-price').text(sum);
}

function totalPro(val) {
    let price = $('#product-price-' + val).attr("data-price");
    let quantity = $('#product-quantity-' + val).text();
    return parseInt(price) * parseInt(quantity);
}

// $('.item').each(
//     function(){
//         let price = $('.price').attr("data-price");
//         let quantity = $('.quantity-' + val).text();
//         return parseInt(price) * parseInt(quantity);
//     }
// )


$('.add-1').click(function(){
    let quantity =$(this).siblings('span').text();
    quantity= parseInt(quantity) +1;
    $(this).siblings('span').text(quantity);
})

$('.sub-1').click(function(){
    let quantity =$(this).siblings('span').text();
    quantity= (parseInt(quantity) <1)? parseInt(quantity):parseInt(quantity)-1;
    $(this).siblings('span').text(quantity);
})



function setProductItem(obj){
    let item =`<div class="item border">
                <div class="d-flex justify-between">
                    <div class="image-item w-23">
                        <img class="w-100" src="${obj.img}" alt="">
                    </div>
                    <div class="title-item w-23">
                        <h3>${obj.name}</h3>
                    </div>
                    <div class="price-item w-23">
                        <span id="product-price-${obj.id}" data-price="${obj.price}">${obj.price}</span><span>vnđ</span>
                    </div>
                    <div class="quantity-item w-23">
                        <span id="product-quantity-${obj.id}">${obj.quantity}</span>
                    </div>
                </div>
            </div>`
    $('.list-item').append(view);
}



// btvn: Xây dựng giỏ hàng dựa theo data có sẵn
// chức năng: tính tổng sản phẩm, tăng giảm số lượng theo từng sản phẩm
// chặn trên(không đc thêm quá số lượng sản phẩm)
// khi hiển thị tổng tiền: format giá về dạng 1.000.000
// xoá sản phẩm khỏi giỏ hàng: dùng hàm removeHtml('')
// đảm bảo sau khi tính tiền thì giá phải khớp với giao diện hiện tại