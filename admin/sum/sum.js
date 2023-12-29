//매출 스크립트 작성_김병래
//샘플
//데이터 불러오기
let info = [
    {pno: 1, count: 1, list: 1, date: "2023. 12. 20.", total: 14000, status: "완료"},
    {pno: 2, count: 1, list: 2, date: "2023. 12. 20.", total: 16000, status: "완료"},
    {pno: 3, count: 1, list: 2, date: "2023. 12. 20.", total: 16000, status: "완료"},
    {pno: 1, count: 1, list: 1, date: "2023. 12. 21.", total: 14000, status: "완료"},
    {pno: 2, count: 1, list: 1, date: "2023. 12. 21.", total: 16000, status: "완료"},
    {pno: 3, count: 1, list: 2, date: "2023. 12. 21.", total: 16000, status: "완료"},
    {pno: 4, count: 1, list: 3, date: "2023. 12. 21.", total: 16000, status: "완료"},
    {pno: 1, count: 1, list: 1, date: "2023. 12. 22.", total: 14000, status: "완료"},
    {pno: 3, count: 1, list: 2, date: "2023. 12. 22.", total: 16000, status: "완료"},
    {pno: 4, count: 1, list: 1, date: "2023. 12. 23.", total: 16000, status: "완료"},
    {pno: 1, count: 1, list: 2, date: "2023. 12. 23.", total: 14000, status: "완료"},
    {pno: 2, count: 1, list: 1, date: "2023. 12. 24.", total: 16000, status: "완료"},
    {pno: 1, count: 1, list: 2, date: "2023. 12. 24.", total: 14000, status: "완료"},
    {pno: 1, count: 1, list: 1, date: "2023. 12. 25.", total: 14000, status: "완료"},
    {pno: 3, count: 1, list: 1, date: "2023. 12. 26.", total: 16000, status: "완료"},
    {pno: 4, count: 1, list: 1, date: "2023. 12. 27.", total: 16000, status: "완료"},
    {pno: 4, count: 1, list: 1, date: "2023. 12. 28.", total: 16000, status: "완료"},
    {pno: 5, count: 1, list: 1, date: "2023. 12. 28.", total: 24000, status: "완료"},
    {pno: 1, count: 2, list: 2, date: "2023. 12. 28.", total: 28000, status: "완료"},
]

let data = JSON.parse(localStorage.getItem('orderArray')); console.log(data)  //주문내역
for(let s=0; s<data.length;s++){
    info.push(data[s]);
}
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
        info2[c].daySales = info2[c].total
        for (let d = 0; d < info2.length; d++) {
            if (c != d && info2[c].date == info2[d].date) {
                info2[c].daySales += info2[d].total;
            }
        }
    }
    
    for (let f = 0; f < info2.length; f++) {
        for (let g = 0; g < info2.length; g++) {
            if (f != g && info2[f].date == info2[g].date) {
                console.log(info2); info2.splice(g, 1);
                console.log(info2);
            }
        }
    }
    // 일별매출액 출력
    let html1 = ''
    
    for (let e = 0; e < info2.length; e++) {
        html1 += `<tr>
        <td class="dateInfo" onclick="내역출력('${info2[e].date}')">${info2[e].date}</td>
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
        totalSales += info[k].total;
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
        if(today==info[i].date){
        html += ` <tr>
        <td>${info[i].list}</td>
        <td>${info[i].pname}</td>
        <td>${info[i].count}</td>
        <td>${info[i].total.toLocaleString()}</td> 
        </tr> `
        }   
    } 
    date.innerHTML = today
    content.innerHTML = html
}
