//매출 스크립트 작성_김병래
//샘플
const categoryArray = [{ cno: 1, cname: '엽기떡볶이' },
{ cno: 2, cname: '닭발메뉴' }]
localStorage.setItem('categoryArray', JSON.stringify(categoryArray));

const productArray = [{ cno: 1, pno: 1, pname: '엽떡', pimg: '엽떡.png', pprice: 17000 },
{ cno: 2, pno호: 2, pname: '닭발', pimg: '닭발.png', pprice: 15000 }]
localStorage.setItem('productArray', JSON.stringify(productArray));

const orderArray = [{ orderNo: 1, pno: 1, orderDate: '2023-12-24', count: 4, totalPrice: 68000 },
{ orderNo: 1, pno: 2, orderDate: '2023-12-24', count: 2, totalPrice: 30000 },
{ orderNo: 2, pno: 1, orderDate: '2023-12-26', count: 1, totalPrice: 17000 },
{ orderNo: 2, pno: 2, orderDate: '2023-12-26', count: 5, totalPrice: 75000 },
{ orderNo: 3, pno: 1, orderDate: '2023-12-27', count: 1, totalPrice: 17000 },
{ orderNo: 3, pno: 2, orderDate: '2023-12-27', count: 3, totalPrice: 45000 },
{ orderNo: 4, pno: 1, orderDate: '2023-12-27', count: 1, totalPrice: 17000 },
{ orderNo: 4, pno: 1, orderDate: '2023-12-27', count: 2, totalPrice: 34000 },
{ orderNo: 4, pno: 2, orderDate: '2023-12-27', count: 1, totalPrice: 30000 }
]
localStorage.setItem('orderArray', JSON.stringify(orderArray));
const 관리자카테고리 = [{ 관리자카테고리번호: 1, 카테고리이름: '주문내역', '출력함수()': '주문내역()' },
{ 관리자카테고리번호: 2, 카테고리이름: '매출', '출력함수()': '매출()' },
{ 관리자카테고리번호: 3, 카테고리이름: '제품관리', '출력함수()': '제품관리()' }]
localStorage.setItem('관리자카테고리', JSON.stringify(관리자카테고리));
//==========================================================================
매출()
//출력함수
function 매출() {
    // html 위치연결
    const content = document.querySelector('#content');
    const total = document.querySelector('#totalSales');

    // 로컬스토리지에서 주문내역 불러오기
    let info = JSON.parse(localStorage.getItem('orderArray')); console.log(info);

    //총매출액 구하기
    let totalSales = 0;
    for (let k = 0; k < info.length; k++) {
        totalSales += info[k].totalPrice; 
    }
    // 주문번호 중복 제거
    for (let a = 0; a < info.length; a++) {
        for (let b = 0; b < info.length; b++) {
            if (a != b && info[a].orderNo == info[b].orderNo) {
                info[a].totalPrice += info[b].totalPrice;
                info.splice(b, 1);
            }

        }
    }

    // 일별 매출액
    console.log(info);
    for(let c= 0;c<info.length;c++){
        info[c].daySales=info[c].totalPrice
        for(let d= 0;d<info.length;d++){
            if (c != d && info[c].orderDate == info[d].orderDate){
                info[c].daySales+=info[d].totalPrice;
        }
    }
        console.log(info[c].daySales)
    }   

    // 내역 출력하기
    let html = '';

    for (let i = 0; i < info.length; i++) {
        html += ` <tr>
        <td>${info[i].orderNo}</td>
        <td>${info[i].orderDate}</td>
        <td>${info[i].totalPrice.toLocaleString()}</td> 
        </tr> `
    }

    total.innerHTML += totalSales.toLocaleString() + '원';
    content.innerHTML = html
}