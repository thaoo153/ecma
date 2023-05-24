import { Products } from "./products"


const showProduct = () => {
    if (Products.length === 0) {
        console.log("Không có sản phẩm để hiển thị");
    } else {
        console.log("List sản phẩm");
        Products.forEach((Product) => {
            console.log(Product);
        });
    }
};
// showProduct();


const addProduct = (prd) => {
    var productName = prompt("Nhập tên sản phẩm: ");
    if (productName.length < 5) {
        alert("Tên sản phẩm ít nhất phải có 5 ký tự, vui lòng nhập lại");
        // addProduct();
    } else {
        Products.push(productName);
        console.log(" Đã thêm sản phẩm ");
        console.log(prd);
    }

}
// addProduct(Products);


const removeProduct = (arr) => {
    var product = prompt("Nhập tên sản phẩm cần xóa: ");
    const index = arr.indexOf(product)
    if (index !== -1) {
        arr.splice(index, 1)
        console.log("Sản phẩm đã được xóa khỏi mảng.");
        console.log(arr);
    } else {
        alert("Không tìm thấy sản phẩm cần xóa.");
    }
}
// removeProduct(Products)


const updateProduct = (arr) => {
    var product = prompt("Nhập tên sản phẩm cần cập nhật: ");
    const index = arr.indexOf(product);
    if (index !== -1) {
        const newProductName = prompt("Nhập tên sản phẩm mới:");
        arr[index] = newProductName;
        console.log("Sản phẩm đã được cập nhật.");
        console.log(arr);
    } else {
        alert("Không tìm thấy sản phẩm cần cập nhật.");
    }
}
// updateProduct(Products);


const removeAllProduct = () => {
    Products.length = 0;
    console.log("Tất cả sản phẩm đã được xóa khỏi mảng.");
    showProduct(Products)
}
removeAllProduct(Products);