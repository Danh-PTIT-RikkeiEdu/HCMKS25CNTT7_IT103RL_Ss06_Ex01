let choice;
let line = "-".repeat(40);
let vipMember = true;
let codeOrder = "";
let isValid = false;
let item = "Chưa rõ";
let price = 0;
let searchItem = false;


do {
    choice = prompt(`MENU
1. Nhập và chuẩn hóa mã đơn hàng (Định dạng., độ dài tối thiểu 8 ký tự).
2. Tính tiền và in hóa đơn phụ kiện.
3. Thoát chương trình. 
>> Lựa chọn của bạn: `)

    switch (choice) {
        case "1":
            let codeInput = (prompt("Nhập mã đơn hàng: ") || "").trim().toUpperCase();
            if (codeInput.length >= 8) {
                codeOrder = codeInput;
                isValid = true;
                alert("Mã xác nhận chính xác")
            } else {
                alert("Mã tối thiểu 8 ký tự bạn kiểm tra lại nhen")
            }
            break;

        case "2":
            if (isValid === false) {
                alert("Vui lòng nhập mã xác nhận");
            } else {
                if (codeOrder.includes("SHAKER")) {
                    item = "Bình lắc";
                    price = 120000;
                    searchItem = true;
                } else if (codeOrder.includes("GLOVES")) {
                    item = "Găng tay";
                    price = 120000;
                    searchItem = true;
                } else if (codeOrder.includes("STRAP")) {
                    item = "Dây kéo lưng";
                    price = 120000;
                    searchItem = true;
                } else {
                    alert("Chưa xác định được sản phẩm!")
                }

                if (searchItem === true) {
                    if (vipMember === true) {
                        price = price * 0.9
                    }
                    alert(`
${line}
                HÓA ĐƠN
${line}
Vật phẩm: ${item}
Giảm giá: ${vipMember}
Thanh toán: ${price}

${line}`)
                }

            }
            break;

        case "3":
            alert("Thoát chương trình");
            break;

        default:
            alert("Vui lòng chỉ nhập chức năng đang có (1-3).");
            break;
    }
} while (choice !== "3");