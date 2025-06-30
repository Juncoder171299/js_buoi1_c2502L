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
}
function checkPass() {
    do {
        password = prompt("input your password:");
        if (password === null) {
            alert("Bạn đã hủy đăng nhập.");
            break;
        }
    } while (password != 123456) {
        if (password === "123456") {
            alert("Đăng nhập thành công!");
        }
    }

}
function math() {
    let a = 10;
    let b = 3;
    console.log("tong a+b=", a + b);
    console.log("hieu a-b=", a - b);
    console.log("tich a*b=", a * b);
    console.log("thuong a/b=", a / b);
    console.log("chia lay du a,b=", a % b);
    console.log(a==b);
    console.log(a===b);
    console.log(a!=b);
    console.log(a!==b);
    console.log(a<b);
    console.log(a>b);
    console.log(a<=b);
    console.log(a>=b);

}