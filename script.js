//Số nguyên tố bằng sàng nguyên tố//
n = prompt('Nhập số nguyên dương n');
n = parseInt(n);
let arr = new Array(n);
for (let i = 2; i <= n; i++) {
    arr[i] = true;
}
for (let i = 2; i <= n; i++) {
    if (arr[i]) {
        for (let j = 2 * i; j <= n; j += i) {
            arr[j] = false;
        }
    }
}
for (let i = 2; i <= n; i++) {
    if (arr[i]) {
        console.log(i);
    }
}



//Phương pháp cộng xâu//
let a = prompt('Nhập xâu a');
let b = prompt('Nhập xâu b');
let c = '';
let n = a.length;
let m = b.length;
let t = 0;
for (let i = n - 1; i >= 0; i--) {
    let sum = parseInt(a[i]) + parseInt(b[i]) + t;
    c = sum % 10 + c;
    t = Math.floor(sum / 10);
}
if (t > 0) {
    c = t + c;
}
console.log(c);



//Phương pháp trừ xâu
let a1 = prompt('Nhập xâu a');
let b1 = prompt('Nhập xâu b');
let c1 = '';

while (a.length < b.length) {
    a = '0' + a;
}

while (b.length < a.length) {
    b = '0' + b;
}

let borrow = 0;

for (let i = a.length - 1; i >= 0; i--) {
    let digitA = parseInt(a[i]);
    let digitB = parseInt(b[i]);

    digitA -= borrow;

    if (digitA < digitB) {
        borrow = 1;
        digitA += 10;
    } else {
        borrow = 0;
    }

    let difference = digitA - digitB;
    c = difference.toString() + c;
}

console.log(c);


