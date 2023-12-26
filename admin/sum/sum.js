//매출 스크립트 작성_김병래
//샘플
const 메인카테고리=[{카테고리번호:1,카테고리이름:'엽기떡볶이'},
                   {카테고리번호:2,카테고리이름:'닭발메뉴'}]
localStorage.setItem( '메인카테고리' , JSON.stringify( 메인카테고리 ) );

const 메뉴=[{카테고리번호:1,메뉴번호:1,메뉴이름:'엽떡',이미지:'엽떡.png',가격:17000},
            {카테고리번호:2,메뉴번호:2,메뉴이름:'닭발',이미지:'닭발.png',가격:15000}]
localStorage.setItem( '메뉴' , JSON.stringify( 메뉴 ) );

const 주문내역= [{주문번호:1,메뉴번호:1,주문날짜:'2023-12-25',개수:1,가격:17000},
                {주문번호:2,메뉴번호:2,주문날짜:'2023-12-26',개수:2,가격:30000},
                {주문번호:2,메뉴번호:1,주문날짜:'2023-12-26',개수:1,가격:17000},
                {주문번호:3,메뉴번호:2,주문날짜:'2023-12-27',개수:2,가격:30000},
                {주문번호:3,메뉴번호:1,주문날짜:'2023-12-27',개수:1,가격:17000},
                {주문번호:3,메뉴번호:2,주문날짜:'2023-12-27',개수:2,가격:30000},
                {주문번호:4,메뉴번호:1,주문날짜:'2023-12-27',개수:1,가격:17000}]
localStorage.setItem( '주문내역' , JSON.stringify( 주문내역 ) );
const 관리자카테고리=[{관리자카테고리번호:1,카테고리이름:'주문내역','출력함수()':'주문내역()'},
                     {관리자카테고리번호:2,카테고리이름:'매출','출력함수()':'매출()'},
                     {관리자카테고리번호:3,카테고리이름:'제품관리','출력함수()':'제품관리()'}]
localStorage.setItem( '관리자카테고리' , JSON.stringify( 관리자카테고리 ) );
//==========================================================================
출력()
//게산함수
function 출력(){
    const content=document.querySelector('#content');
    const total=document.querySelector('#totalSales');
    let info=JSON.parse(localStorage.getItem('주문내역'));console.log(info);
    let totalSales=0;
    for(let k=0;k<info.length;k++){
        totalSales+=info[k].가격; console.log(totalSales)
    }
    let html='';
    let count=0; console.log(info[2].주문번호)
    for(let i =0;i<info.length;i++){  
        if(info[0].주문번호!=info[i].주문번호){
                count++;console.log(count);
        } 
    }
    for(let i=0;i<count;i++){
        html+=` <tr>
        <td>${info[i].주문번호}</td>
        <td>${info[i].주문날짜}</td>
        <td>1</td>
        <td>1</td>
        </tr> `
    }
    
    total.innerHTML += totalSales+'원';
    content.innerHTML= html
}