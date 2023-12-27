/* console.log('js 열림') */

// ========================== 카테고리 리스트 ========================== //
const categoryArray=[
    {cno:1, cname:'메인메뉴'},
    {cno:2, cname:'닭발메뉴'},
    {cno:3, cname:'세트메뉴'},
    {cno:4, cname:'사이드/음료'}
]

// ========================== 메인메뉴 리스트 ========================== //
                // 사진링크는 폴더 변경되면 수정
/* const cno1ProductArray=[
    {pno:1,  cno:1, pname:'엽기메뉴', pimg:'메인메뉴_엽기메뉴.png', pprice:14000},
    {pno:2,  cno:1, pname:'로제메뉴', pimg:'메인메뉴_로제메뉴.png', pprice:16000},
    {pno:3,  cno:1, pname:'짜장메뉴', pimg:'메인메뉴_짜장메뉴.png', pprice:16000},
    {pno:4,  cno:1, pname:'마라떡볶이', pimg:'메인메뉴_마라떡볶이.png', pprice:16000},
    {pno:5,  cno:1, pname:'엽기닭볶음탕', pimg:'메인메뉴_엽기닭볶음탕.png', pprice:24000},
    {pno:6,  cno:1, pname:'2인엽기떡볶이', pimg:'메인메뉴_2인엽기떡볶이.png', pprice:9000}
]

// ========================== 닭발메뉴 리스트 ========================== //
const cno2ProductArray=[
    {pno:1,  cno:2, pname:'엽기무뼈닭발', pimg:'닭발메뉴_엽기무뼈닭발.png', pprice:15000},
    {pno:2,  cno:2, pname:'엽기국물닭발', pimg:'닭발메뉴_엽기국물닭발.png', pprice:15000},
    {pno:3,  cno:2, pname:'엽기오돌뼈', pimg:'닭발메뉴_엽기오돌뼈.png', pprice:14000}
]

// ========================== 세트메뉴 리스트 ========================== //
const cno3ProductArray=[
    {pno:1,  cno:3, pname:'실속세트', pimg:'세트메뉴_실속세트.png', pprice:17500},
    {pno:2,  cno:3, pname:'베스트세트', pimg:'세트메뉴_베스트세트.png', pprice:20000},
    {pno:3,  cno:3, pname:'스페셜세트', pimg:'세트메뉴_스페셜세트.png', pprice:25000},
    {pno:4,  cno:3, pname:'닭발세트', pimg:'세트메뉴_닭발세트.png', pprice:17500}
]

// ========================== 사이드/음료 리스트 ========================== //
const cno4ProductArray=[
    {pno:1,  cno:4, pname:'엽기오돌뼈밥', pimg:'사이드음료_엽기오돌뼈밥.png', pprice:4500},
    {pno:2,  cno:4, pname:'참치마요밥', pimg:'사이드음료_참치마요밥.png', pprice:3500},
    {pno:3,  cno:4, pname:'주먹김밥(셀프)', pimg:'사이드음료_주먹김밥(셀프).png', pprice:2000},
    {pno:4,  cno:4, pname:'계란찜', pimg:'사이드음료_계란찜.png', pprice:2000},
    {pno:5,  cno:4, pname:'계란야채죽', pimg:'사이드음료_계란야채죽.png', pprice:5000},
    {pno:6,  cno:4, pname:'오뎅탕', pimg:'사이드음료_오뎅탕.png', pprice:6000},
    {pno:7,  cno:4, pname:'순대', pimg:'사이드음료_순대.png', pprice:3000},
    {pno:8,  cno:4, pname:'오뎅튀김(15개)', pimg:'사이드음료_오뎅튀김(15개).png', pprice:2000},
    {pno:9,  cno:4, pname:'오징어튀김(1개)', pimg:'사이드음료_오징어튀김(1개).png', pprice:1000},
    {pno:10,  cno:4, pname:'김말이(3개)', pimg:'사이드음료_김말이(3개).png', pprice:2000},
    {pno:11,  cno:4, pname:'야채튀김(1개)', pimg:'사이드음료_야채튀김(1개).png', pprice:1000},
    {pno:12,  cno:4, pname:'만두(4개)', pimg:'사이드음료_만두(4개).png', pprice:2000},
    {pno:13,  cno:4, pname:'모듬튀김', pimg:'사이드음료_모듬튀김.png', pprice:2000},
    {pno:14,  cno:4, pname:'꿔바로우(5개)', pimg:'사이드음료_꿔바로우(5개).png', pprice:5900},
    {pno:15,  cno:4, pname:'엽봉(5개)', pimg:'사이드음료_엽봉(5개).png', pprice:5000},
    {pno:16,  cno:4, pname:'바삭치즈만두(7개)', pimg:'사이드음료_바삭치즈만두(7개).png', pprice:2000},
    {pno:17,  cno:4, pname:'엽도그', pimg:'사이드음료_엽도그.png', pprice:2000},
    {pno:18,  cno:4, pname:'공기밥', pimg:'사이드음료_공기밥.png', pprice:1000},
    {pno:19,  cno:4, pname:'음료(유산균)', pimg:'사이드음료_음료(유산균).png', pprice:1000}
] */


// ========================== 메뉴 리스트 ========================== //
const productArray=[
    {pno:1,  cno:1, pname:'엽기메뉴', pimg:'/img/메인메뉴_엽기메뉴.png', pprice:14000},
    {pno:2,  cno:1, pname:'로제메뉴', pimg:'/img/메인메뉴_로제메뉴.png', pprice:16000},
    {pno:3,  cno:1, pname:'짜장메뉴', pimg:'/img/메인메뉴_짜장메뉴.png', pprice:16000},
    {pno:4,  cno:1, pname:'마라떡볶이', pimg:'/img/메인메뉴_마라떡볶이.png', pprice:16000},
    {pno:5,  cno:1, pname:'엽기닭볶음탕', pimg:'/img/메인메뉴_엽기닭볶음탕.png', pprice:24000},
    {pno:6,  cno:1, pname:'2인엽기떡볶이', pimg:'/img/메인메뉴_2인엽기떡볶이.png', pprice:9000},
    {pno:7,  cno:2, pname:'엽기무뼈닭발', pimg:'/img/닭발메뉴_엽기무뼈닭발.png', pprice:15000},
    {pno:8,  cno:2, pname:'엽기국물닭발', pimg:'/img/닭발메뉴_엽기국물닭발.png', pprice:15000},
    {pno:9,  cno:2, pname:'엽기오돌뼈', pimg:'/img/닭발메뉴_엽기오돌뼈.png', pprice:14000},
    {pno:10,  cno:3, pname:'실속세트', pimg:'/img/세트메뉴_실속세트.png', pprice:17500},
    {pno:11,  cno:3, pname:'베스트세트', pimg:'/img/세트메뉴_베스트세트.png', pprice:20000},
    {pno:12,  cno:3, pname:'스페셜세트', pimg:'/img/세트메뉴_스페셜세트.png', pprice:25000},
    {pno:13,  cno:3, pname:'닭발세트', pimg:'/img/세트메뉴_닭발세트.png', pprice:17500},
    {pno:14,  cno:4, pname:'엽기오돌뼈밥', pimg:'/img/사이드음료_엽기오돌뼈밥.png', pprice:4500},
    {pno:15,  cno:4, pname:'참치마요밥', pimg:'/img/사이드음료_참치마요밥.png', pprice:3500},
    {pno:16,  cno:4, pname:'주먹김밥(셀프)', pimg:'/img/사이드음료_주먹김밥(셀프).png', pprice:2000},
    {pno:17,  cno:4, pname:'계란찜', pimg:'/img/사이드음료_계란찜.png', pprice:2000},
    {pno:18,  cno:4, pname:'계란야채죽', pimg:'/img/사이드음료_계란야채죽.png', pprice:5000},
    {pno:19,  cno:4, pname:'오뎅탕', pimg:'/img/사이드음료_오뎅탕.png', pprice:6000},
    {pno:20,  cno:4, pname:'순대', pimg:'/img/사이드음료_순대.png', pprice:3000},
    {pno:21,  cno:4, pname:'오뎅튀김(15개)', pimg:'/img/사이드음료_오뎅튀김(15개).png', pprice:2000},
    {pno:22,  cno:4, pname:'오징어튀김(1개)', pimg:'/img/사이드음료_오징어튀김(1개).png', pprice:1000},
    {pno:23,  cno:4, pname:'김말이(3개)', pimg:'/img/사이드음료_김말이(3개).png', pprice:2000},
    {pno:24,  cno:4, pname:'야채튀김(1개)', pimg:'/img/사이드음료_야채튀김(1개).png', pprice:1000},
    {pno:25,  cno:4, pname:'만두(4개)', pimg:'/img/사이드음료_만두(4개).png', pprice:2000},
    {pno:26,  cno:4, pname:'모듬튀김', pimg:'/img/사이드음료_모듬튀김.png', pprice:2000},
    {pno:27,  cno:4, pname:'꿔바로우(5개)', pimg:'/img/사이드음료_꿔바로우(5개).png', pprice:5900},
    {pno:28,  cno:4, pname:'엽봉(5개)', pimg:'/img/사이드음료_엽봉(5개).png', pprice:5000},
    {pno:29,  cno:4, pname:'바삭치즈만두(7개)', pimg:'/img/사이드음료_바삭치즈만두(7개).png', pprice:2000},
    {pno:30,  cno:4, pname:'엽도그', pimg:'/img/사이드음료_엽도그.png', pprice:2000},
    {pno:31,  cno:4, pname:'공기밥', pimg:'/img/사이드음료_공기밥.png', pprice:1000},
    {pno:32,  cno:4, pname:'음료(유산균)', pimg:'/img/사이드음료_음료(유산균).png', pprice:1000}
]

const cartArray=[];

// ========================== 로컬스토리지 등록 ========================== //
localStorage.setItem('categoryArray',JSON.stringify(categoryArray));
/* localStorage.setItem('cno1ProductArray',JSON.stringify(cno1ProductArray));
localStorage.setItem('cno2ProductArray',JSON.stringify(cno2ProductArray));
localStorage.setItem('cno3ProductArray',JSON.stringify(cno3ProductArray));
localStorage.setItem('cno4ProductArray',JSON.stringify(cno4ProductArray));
 */
localStorage.setItem('productArray',JSON.stringify(productArray));

// =========================== 카테고리 출력 =========================== //
categoryPrint(1)
function categoryPrint(selectCno){
    const bottomHeader=document.querySelector('#bottomHeader>ul');
    let html='';
    for(i=0; i<categoryArray.length; i++){
        html+=`<div id="listMenu"><li onclick="categoryPrint(${categoryArray[i].cno})" class="${categoryArray[i].cno==selectCno?'selectMenu':''}">${categoryArray[i].cname}</li></div>`
    }
bottomHeader.innerHTML=html;
productPrint(selectCno)
}

// =========================== 상품 출력 =========================== //
function productPrint(selectCno){
    const main=document.querySelector('#main');
    let html='';
    for(i=0; i<productArray.length; i++){
        if(productArray[i].cno==selectCno){
            html += `<div id="product" onclick="setCart(${productArray[i].pno})">
                        <div id="pimg"><img src="${productArray[i].pimg}"></div>
                        <div id="ppname">${productArray[i].pname}</div>
                        <div id="pprice">${productArray[i].pprice.toLocaleString()}원</div>
                    </div>`
        }
    }
    main.innerHTML=html;
    return;
}

// =========================== 카트 배열 등록 =========================== //

// =========================== 카트 출력 =========================== //
