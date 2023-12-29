//매출 스크립트 작성_김병래
//샘플
const categoryArray = [{ cno: 1, cname: '엽기떡볶이' },
{ cno: 2, cname: '닭발메뉴' }]
localStorage.setItem('categoryArray', JSON.stringify(categoryArray));

const productArray = [{ cno: 1, pno: 1, pname: '엽떡', pimg: '엽떡.png', pprice: 17000 },
{ cno: 2, pno: 2, pname: '닭발', pimg: '닭발.png', pprice: 15000 }]
localStorage.setItem('productArray', JSON.stringify(productArray));

const orderArray = [{ orderNo: 1, pno: 1, orderDate: '2023-12-23', count: 4, totalPrice: 68000 },
{ orderNo: 1, pno: 2, orderDate: '2023-12-24', count: 2, totalPrice: 30000 },
{ orderNo: 2, pno: 1, orderDate: '2023-12-24', count: 4, totalPrice: 68000 },
{ orderNo: 1, pno: 2, orderDate: '2023-12-25', count: 5, totalPrice: 75000 },
{ orderNo: 2, pno: 1, orderDate: '2023-12-25', count: 1, totalPrice: 17000 },
{ orderNo: 3, pno: 2, orderDate: '2023-12-25', count: 3, totalPrice: 45000 },
{ orderNo: 1, pno: 1, orderDate: '2023-12-26', count: 3, totalPrice: 51000 },
{ orderNo: 2, pno: 1, orderDate: '2023-12-26', count: 2, totalPrice: 34000 },
{ orderNo: 1, pno: 2, orderDate: '2023-12-27', count: 1, totalPrice: 15000 },
{ orderNo: 2, pno: 2, orderDate: '2023-12-27', count: 2, totalPrice: 30000 }
]
localStorage.setItem('orderArray', JSON.stringify(orderArray));

const 관리자카테고리 = [{ 관리자카테고리번호: 1, 카테고리이름: '주문내역', '출력함수()': '주문내역()' },
{ 관리자카테고리번호: 2, 카테고리이름: '매출', '출력함수()': '매출()' },
{ 관리자카테고리번호: 3, 카테고리이름: '제품관리', '출력함수()': '제품관리()' }]
localStorage.setItem('관리자카테고리', JSON.stringify(관리자카테고리));
//데이터 불러오기
let info = JSON.parse(localStorage.getItem('orderArray')); console.log(info); //주문내역
let product = JSON.parse(localStorage.getItem('productArray')); console.log(product) // 제품배열
//==========================================================================
매출()
//출력함수
function 매출() {
    // html 위치연결
    const days = document.querySelector('#days');
    // 주문내역 복사
    
    let info2= [...info];console.log(info2); //일매출 저장할 주문내역 복사본
    // 이름 불러오기
    let info3= [...info];
    for(let z=0;z<info3.length; z++){
        for(let y=0;y<product.length;y++){
            if(info3[z].pno==product[y].pno){
                info3[z].pname=product[y].pname;
            }
        }
    }
    // 일별 매출액 계산
    
    for (let c = 0; c < info2.length; c++) {
        info2[c].daySales = info2[c].totalPrice
        for (let d = 0; d < info2.length; d++) {
            if (c != d && info2[c].orderDate == info2[d].orderDate) {
                info2[c].daySales += info2[d].totalPrice;
            }
        }
    }
    
    for (let f = 0; f < info2.length; f++) {
        for (let g = 0; g < info2.length; g++) {
            if (f != g && info2[f].orderDate == info2[g].orderDate) {
                console.log(info2); info2.splice(g, 1);
                console.log(info2);
            }
        }
    }
    // 일별매출액 출력
    let html1 = ''
    
    for (let e = 0; e < info2.length; e++) {
        html1 += `<tr>
        <td class="dateInfo" onclick="내역출력('${info2[e].orderDate}')">${info2[e].orderDate}</td>
        <td>${info2[e].daySales.toLocaleString()+'원'}</td> 
        </tr>`
        }
    //일별매출액 비교
        


    days.innerHTML = html1
    //총매출액 구하기
    총매출액()
}
let trigger = 0;

//총매출액 구하는함수
function 총매출액(){
    const total = document.querySelector('#totalSales');
    let totalSales = 0;
    for (let k = 0; k < info.length; k++) {
        totalSales += info[k].totalPrice;
    }
    total.innerHTML += totalSales.toLocaleString() + ' 원';
    return
}

 // 내역 출력하는 함수
function 내역출력(today){
    console.log(today+'');
    const date= document.querySelector('#date');
    const content = document.querySelector('#content');
    let html = '';
    
    for (let i = 0; i < info.length; i++) {
        if(today==info[i].orderDate){
        html += ` <tr>
        <td>${info[i].orderNo}</td>
        <td>${info[i].pname}</td>
        <td>${info[i].count}</td>
        <td>${info[i].totalPrice.toLocaleString()}</td> 
        </tr> `
        }   
    } 
    date.innerHTML = today
    content.innerHTML = html
}
