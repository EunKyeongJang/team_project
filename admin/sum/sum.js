//매출 스크립트 작성_김병래
//샘플
const categoryArray = [{ cno: 1, cname: '엽기떡볶이' },
{ cno: 2, cname: '닭발메뉴' }]
localStorage.setItem('categoryArray', JSON.stringify(categoryArray));

const productArray = [{ cno: 1, pno: 1, pname: '엽떡', pimg: '엽떡.png', pprice: 17000 },
{ cno: 2, pno호: 2, pname: '닭발', pimg: '닭발.png', pprice: 15000 }]
localStorage.setItem('productArray', JSON.stringify(productArray));

const orderArray = [{ orderNo: 1, pno: 1, orderDate: '2023-12-24', count: 1, totalPrice: 17000 },
{ orderNo: 1, pno: 2, orderDate: '2023-12-24', count: 2, totalPrice: 30000 },
{ orderNo: 2, pno: 1, orderDate: '2023-12-26', count: 1, totalPrice: 17000 },
{ orderNo: 2, pno: 2, orderDate: '2023-12-26', count: 2, totalPrice: 30000 },
{ orderNo: 3, pno: 1, orderDate: '2023-12-27', count: 1, totalPrice: 17000 },
{ orderNo: 3, pno: 2, orderDate: '2023-12-27', count: 2, totalPrice: 30000 },
{ orderNo: 4, pno: 1, orderDate: '2023-12-27', count: 1, totalPrice: 17000 },
{ orderNo: 4, pno: 1, orderDate: '2023-12-27', count: 2, totalPrice: 34000 },
{ orderNo: 4, pno: 1, orderDate: '2023-12-27', count: 1, totalPrice: 17000 }
]
localStorage.setItem('orderArray', JSON.stringify(orderArray));
const 관리자카테고리 = [{ 관리자카테고리번호: 1, 카테고리이름: '주문내역', '출력함수()': '주문내역()' },
{ 관리자카테고리번호: 2, 카테고리이름: '매출', '출력함수()': '매출()' },
{ 관리자카테고리번호: 3, 카테고리이름: '제품관리', '출력함수()': '제품관리()' }]
localStorage.setItem('관리자카테고리', JSON.stringify(관리자카테고리));
//==========================================================================
매출()
//계산함수
function 매출() {
    // html 위치연결
    const content = document.querySelector('#content');
    const total = document.querySelector('#totalSales');

    // 로컬스토리지에서 주문내역 불러오기
    let info = JSON.parse(localStorage.getItem('orderArray')); console.log(info);

    //총매출액 구하기
    let totalSales = 0;
    for (let k = 0; k < info.length; k++) {
        totalSales += info[k].totalPrice; console.log(totalSales)
    }
    // 주문번호 중복 제거
   /*  let array = [];
    for (let a = 0; a < info.length; a++) {
        for (let b = 0; b < info.length; b++) {
            if (a != b && info[a].orderNo == info[b].orderNo) {

            }

        }
    }
} */





// 내역 출력하기
let html = '';

for (let i = 0; i < info.length; i++) {
    html += ` <tr>
        <td>${info[i].orderNo}</td>
        <td>${info[i].orderDate}</td>
        <td>${info[i].totalPrice}</td>
        <td>${info[i].totalPrice}</td>
        </tr> `
}


total.innerHTML += totalSales + '원';
content.innerHTML = html
}