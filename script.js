function clickMe() {
    {
        let a = true;
        console.log(a);

        console.log(typeof a);
    }
    let a = 3;
    let b = 5;
    console.log("Tong", a + b);
    if (a > b) {
        console.log("a lon hon b");
    } else {
        console.log("a nho hon b");
    }
    let tuoi = 17;
    let hasticket = true;
    if (tuoi >= 18 && hasticket) {
        console.log("du tuoi vao rap");
    } else {
        console.log("chua du dieu kien vao rap");
    }
}
function bang() {
    for (let i = 1; i <= 10; i++) {
        console.log("6", "*", i, "=", 6 * i);
    }
}
function sum() {
    let i = 1;
    let total = 0;
    while (i <= 100) {
        total = total + i;
        i++;
    }
    console.log("tong cac so tu 1-100 = ", total);
    alert("Tổng các số từ 1-100: " + total);
}
function checkPass() {
    do {
        password = prompt("input your password:");
        if (password === null) {
            alert("Bạn đã hủy đăng nhập.");
            break;
        }
        if (password === "123456") {
            alert("Đăng nhập thành công!");
            break;
        } else {
            alert("Mật khẩu sai. Vui lòng thử lại!");
        }

    } while (true);
}
function math() {
    let a = 10;
    let b = 3;
    console.log("tong a+b=", a + b);
    console.log("hieu a-b=", a - b);
    console.log("tich a*b=", a * b);
    console.log("thuong a/b=", a / b);
    console.log("chia lay du a,b=", a % b);
    console.log(a == b);
    console.log(a === b);
    console.log(a != b);
    console.log(a !== b);
    console.log(a < b);
    console.log(a > b);
    console.log(a <= b);
    console.log(a >= b);

}
function oddORevenNumber() {
    Inputnumber = prompt(" Input your number:");
    switch (Inputnumber % 2) {
        case 1:
            console.log("Là số lẻ");
            alert("Là số lẻ");
            break;
        case 0:
            console.log("Là số chẵn");
            alert("Là số chẵn");
            break;
        default:
            console.log("Không hợp lệ");
            alert("Không hợp lệ");
    }
}
function CompetencyAssessment() {
    score = prompt("Input your Score: ");
    if (score == null) {
        console.log("Không hợp lệ");
        alert("Hủy");
    }
    else if (score >= 90) {
        console.log("Giỏi");
        alert("Giỏi");
    } else if (score >= 70 && score < 90) {
        console.log("Khá");
        alert("Khá");
    } else if (score >= 50 && score < 70) {
        console.log("Trung bình");
        alert("Trung bình");
    } else {
        console.log("Yếu");
        alert("Yếu");
    }
}
function numberCheck() {
    function checkNumber(num) {

        return new Promise((resolve, reject) => {
            if (num % 2 === 0) {
                resolve(`Số ${num} là số chẵn!`);
            } else {
                reject(`Lỗi: Số ${num} là số lẻ!`);
            }
        });
    }
    const input = prompt("Nhập vào một số nguyên:");
    const number = parseInt(input);
    checkNumber(number)
        .then(result => {
            alert(result);
        })
        .catch(error => {
            alert(error);
        })
        .finally(() => {
            console.log("Kiểm tra đã hoàn tất.");
        });
}