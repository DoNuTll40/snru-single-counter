// // กด + และ - เพื่อเพิ่มและลดทีละ 1
// // ตัวเลขสุดที่ 0 และห้ามติดลบ
// // กด C จะ reset เลขเป็น 0

const counter = document.querySelector(".counter");
const btnp = document.querySelector('.btn-inc');
const btnd = document.querySelector('.btn-dec');
const btnc = document.querySelector('.btn-clr');
const sCreen = document.querySelector('.number');

let cValue = 0;

function upScreen() {
    sCreen.textContent = cValue;
}

btnp.addEventListener('click', () => {
    cValue += 1;
    upScreen();
});

btnd.addEventListener('click', () => {
    cValue = Math.max(cValue - 1, 0); // ไม่ให้ค่าติดลบ
    upScreen();
});

btnc.addEventListener('click', () => {
    cValue = 0;
    upScreen();
});

upScreen();