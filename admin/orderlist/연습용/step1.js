/*
    1. HTML 
        1. 레이아웃

    설계
        1.경험
        2. 기능 실행 순서
            [키오스크 = 사용자 입장]
                - 카테고리선택 -> 제품 선택 -> 장바구니 담기 -> 결제
            [포스기 = 관리자 입장]
                - 결제 내역 (주문상태)
                - 카테고리 추가/삭제 기능
                - 제품 추가/삭제 기능
        3. 기능에 필요한 메모리(저장-DB 설계) 설계
        카테고리 = [ 
            {cno:1 , cname:'신제품(NEW)'},
            {cno:2 , cname:'프리미엄'},
            {cno:3 , cname:'와퍼&주니어'},
            {cno:4 , cname:'치킨&슈프림버거'},
            {cno:5 , cname:'올데이킹&킹모닝'}
        ]
                - 관리자가 해당 배열을 추가/삭제
            
            카테고리 문서화 제출
            카테고리 표 
                    카테고리번호    카테고리명
                    cno             cname
                1행 1               신제품(NEW)         ---> 하나의 행이 하나의 객체    
                2행 2               프리미엄            ---> 하나의 행이 하나의 객체
                3행 3               와퍼&주니어         ---> 하나의 행이 하나의 객체
                4행 4               치킨&슈프림버거      ---> 하나의 행이 하나의 객체
                5행 5               올데이킹&킹모닝      ---> 하나의 행이 하나의 객체

                *배열[테이블] 간 관계
        
            4. 배열 안에 있는 데이터 식별할 떄 기준점
                사람 = {이름 :'유재석', 나이:40, 직업:강사} - 이름으로 식별시 동명이인 존재 하면 문제점 발생[중복이 없어야함]
                사람 = {주민등록번호:'840420-1',이름 :'유재석', 나이:40, 직업:강사} - 주민등록은 절대로 중복 없음

                -인덱스 vs 식별코드생성 vs 이름
                '신제품(NEW)' -----> {cno:1 , cname:'신제품(NEW)'}
*/

//백엔드로 데이터를 받았다고 치고
let categoryArray = [
    {cno:1 , cname:'신제품(NEW)'},
    {cno:2 , cname:'프리미엄'},
    {cno:3 , cname:'와퍼&주니어'},
    {cno:4 , cname:'치킨&슈프림버거'},
    {cno:5 , cname:'올데이킹&킹모닝'}
] 

// 2.제품 목록 (제품이미지명은 사진파일명이랑 동일하게)
let productArray=[
    {pno:1, pname:'몬스터와퍼', pprice:9500, pimg:'몬스터와퍼.png', cno:3},
    {pno:2, pname:'블랙바비큐와퍼', pprice:10500, pimg:'블랙바비큐와퍼.png', cno:2},
    {pno:3, pname:'블랙바비큐콰트로치즈와퍼', pprice:13500, pimg:'블랙바비큐콰트로치즈와퍼.png', cno:1},
]
let cartArray=[ ] //카트 목록 (인덱스는 js에서만 쓸 예정)
let cartListArray=[] // 주문 내역으로 넘어갈 부분

//-[함수1] : 카테고리 출력하는 함수 (실행조건: js열렸을 때 , 또는 카테고리 클릭했을 때)
printCategory(1); //함수샐행 // 최초로 실행시 선택카테고리 cno=1 가정
function printCategory(selectCno){//함수선언 // 매개변수: 함수안으로 들어온 변수
    console.log('printCategory()함수');
    //어디에
    const categoryUl= document.querySelector('#header>ul');
    console.log('categoryUl')
    //무엇을
    let html=``;
        //2-1 카테고리배열에 존재하는 카테고리객체들을 모두 li 형식으로 변환해서
        for(let i=0; i<categoryArray.length;i++){
            //만약에 i번째 카테고리의 cno와 내가 선택한 cno[매개변수]가 같으면
            //만약에 클릭했을 때. 클릭한 li의 카테고리번호를 매개변수[클릭한cno]로 전달 
            html+=`<li onclick="printCategory(${categoryArray[i].cno})" 
            class="${categoryArray[i].cno==selectCno? 'selectMenu' : ''}">
            ${categoryArray[i].cname}</li>`
        }
    //출력
    categoryUl.innerHTML=html;
    printProduct (selectCno); // 카테고리에서 선택된 카테고리번호를 제품출력에 매개변수로 전달
    // 왜? 제품출력시 모든 제품 출력이 아니고 선택된 카테고리번호의 일치한 제품만 출력해야 되니까 
}

//-[함수2] : 제품 출력하는 함수. (실행조건: 카테고리가 출력 되었을 때)
function printProduct (selectCno){//함수선언 // 전체출력 X, 내가 선택한 카테고리[부모}의 제품만[자식]
    console.log(selectCno);
    //어디에
    const productBox = document.querySelector('#productBox')
    
    //무엇을
    let html=``;
        //자식요소에서 내가 선택한 카테고리번호와 일치한 번호를 출력
        for(let i=0; i<productArray.length; i++){
            if(productArray[i].cno==selectCno){
                html+=` <div onclick="setCart(${productArray[i].pno})" class="product">
                            <img src="img/${productArray[i].pimg}"/>
                            <div class="pinfo">
                                <div class="pname">${productArray[i].pname}</div>
                                <div class="pprice">${productArray[i].pprice.toLocaleString()}원</div>
                            </div>
                        </div>`
            }
            console.log(productArray)
        }
        
    //출력
    productBox.innerHTML=html;
}
//-[함수3] 제품선택시 장바구니에 담아(제품담아[대표자pno])주는 함수 (실행조건 : 제품을 클릭했을 때)
function setCart(selectPno){//함수 선언
    console.log('setCart()함수'+selectPno)
    let list={pno:selectPno}
    //처리
    cartArray.push(selectPno);
    cartListArray.push(list);
    console.log(cartArray);
    printCart()
}
//-[함수4] 카트에서 X 버튼을 클릭시 카트에서 삭제 (실행조건 : X버튼을 클릭했을 때)
function cartDelete(deleteIndex){
    // 입력---> 매개변수로 선택된 삭제인덱스
    // 처리---> 배열에서 해당 인덱스 삭제
    cartArray.splice(deleteIndex,1);
    // 출력---> 새로고침 카트 상태
    printCart();
}

//-[함수5] 카트의 현재 상태를 출력하는 함수(실행조건 : 1. 제품을 선택했을 때 2. 제품을 삭제했을 때)
function printCart(){
    //출력
        //어디에
        const cartBottom = document.querySelector('#cartBottom')
        //무엇을
        let html=``;

            let totalPrice = 0; // 카트내 제품의 총 금액
            let cartCont = cartArray.length; // 카트내 pno개수

            //카트목록에 있는 모든 제품번호 출력
            for(let i=cartArray.length-1; i>=0; i--){
                console.log(cartArray[i]);
                //해당 i번째 pno제품의 정보찾기
                for(let j=0; j<productArray.length; j++){
                    console.log(productArray[j])
                    if(cartArray[i]==productArray[j].pno){
                        html+=`<div class="citem">
                                    <div>${productArray[j].pname}</div>
                                    <div>${productArray[j].pprice.toLocaleString()}원</div>
                                    <span onclick="cartDelete(${i})">X</span>
                                </div>`
                        //총합게 누적
                        totalPrice +=productArray[j].pprice;
                    }
                }
            }
            console.log(totalPrice);
        //출력
        cartBottom.innerHTML=html;
        document.querySelector('#count').innerHTML=cartCont 
        document.querySelector('#total').innerHTML=totalPrice.toLocaleString()+"원";
}

// =====================================관리자 메뉴==================
addcategory()
function 등록1(){
    const cnoNew=1*document.querySelector('#cnoNew').value;
    const categoryNew=document.querySelector('#categoryNew').value;

    const new1={cno:cnoNew, cname:categoryNew};

    
    
    console.log(new1)
    categoryArray.push(new1)
    console.log(categoryArray)
    printCategory()
    addcategory()
    
}

function 등록2(){
    // 받은 값들을 변수에 저장
    const pnoNew=1*document.querySelector('#pnoNew').value;
    const pnameNew=document.querySelector('#pnameNew').value;
    const ppriceNew=1*document.querySelector('#ppriceNew').value;
    const pimgNew=document.querySelector('#pimgNew').value;
    const pcno=1*document.querySelector('#pcno').value[0] // [0]가 cno번호 자리. 문자열-> 숫자로 바꾸려고 *1
    
    const new2={pno:pnoNew, pname:pnameNew, pprice:ppriceNew, pimg:pimgNew, cno:pcno}

    console.log(new2)
    productArray.push(new2)
    console.log(productArray)
    printProduct();
    printCategory(pcno); // 등록한 카테고리로 출력.
   
   console.log('printProduct()함수')
   
}
const 결제Array=[]
function 결제(){
    결제Array.push(cartArray)
    console.log(결제Array)
    cartArray=[]
    console.log(new Date().toLocaleDateString());

}


// const 결제Array=[]
// function 결제(결제담기){// 주문하기 버튼을 눌렀을 때 실행
//     console.log('결제()함수'+결제담기)
//     결제Array.push(결제담기);   
//     console.log(결제Array);
//     결제내역();
//     console.log('결제내역()함수');
// }

// function 결제내역(){
//     console.log('결제내역()함수');
//     const 결제내역창 = document.querySelector('tbody')
//     let html=``;
//     for(let i=cartArray.length-1; i>=0; i--){
//         console.log(cartArray[i]);
//         //해당 i번째 pno제품의 정보찾기
//         for(let j=0; j<productArray.length; j++){
//             console.log(productArray[j])
//             if(cartArray[i]==productArray[j].pno){
//         html+=` <tr>
//                     <th>${i+1}</th> 
//                     <th></th> 
//                     <th>주문완료</th> 
//                     <th>${productArray[j].pname}</th>
//                 </tr>`
//              }
//         }
//     결제내역창.innerHTML=html; 
//     }
// }
 function addcategory(){// 관리자모드 카테고리 선택 셀렉터
     const option = document.querySelector('select');
         let html=''
         for(let i=0 ;i<categoryArray.length;i++){
             html+= `<option>${categoryArray[i].cno}:${categoryArray[i].cname}</option>`
         }
     option.innerHTML = html;
 }