//주문내역 스크립트 작성_김민지

/*      
        카트     :[{메뉴번호,개수}]
        주문내역 :[{주문번호,메뉴번호,주문날짜,주문상태, 총가격, 개수}]
*/

/*
    주문번호 : 카트 인덱스 번호
    메뉴번호 : 카트 객체의 번호 받기
    주문날짜 : 날짜 찾아보기
    개수 : 카트 객체의 개수 받기
    가격 : 카트 객체의 메뉴번호를 받아서 메뉴 번호의 해당 가격 * 카트 객체의 개수
*/

const 결제Array=[] //주문내역 페이지에 넘어올 카트 배열을 저장할 배열\
const cartArray=[{pno:2,count:4},{pno:3,count:4}]
결제Array
let productArray=[
    {pno:1, pname:'몬스터와퍼', pprice:9500, pimg:'몬스터와퍼.png', cno:3},
    {pno:2, pname:'블랙바비큐와퍼', pprice:10500, pimg:'블랙바비큐와퍼.png', cno:2},
    {pno:3, pname:'블랙바비큐콰트로치즈와퍼', pprice:13500, pimg:'블랙바비큐콰트로치즈와퍼.png', cno:1},
]
// let cart=[{pno:2,count:4},{pno:3,count:4}]
// cartArray.push(cart);
console.log(cartArray);
//--------함수 1--------------------
function 결제(){// 주문하기 눌렀을 때 실행될 함수
    let count1=0
    count1 ++
    cartArray.count=count1
     결제Array.push(cartArray) // 카트에 담겨있던 배열 객체를 결제Array 배열로 저장
    //  console.log(결제Array);
    //  // cartArray=[] // 결제Array push가 끝나면 cartArray는 초기화
    //  결제내역();

 }

//--------함수 2------------------
function 결제내역(){
    let html=``;
    let count=0;
    count++
    html+=` <tr>
    <th>${count}</th> 
    <th>${productArray[j].pno}</th>
    <th>${new Date().toLocaleDateString()}</th> 
    <select>
        <option>결제완료</option>
        <option>조리중</option>
        <option>픽업완료</option>
    </select>
    <th>${productArray[j].pprice*결제Array[i][l].count}</th>
    <th>${결제Array[i][l].count}</th>
    </tr>`
    // 결제Array.cart.pno??
    /* 다시 해보기
    console.log('결제내역()함수');
        const 결제내역창 = document.querySelector('tbody')
        let html=``;
        for(let i=결제Array.length-1; i>=0; i--){//주문내역 배열길이만큼 돌아
            console.log(결제Array[i]);
            //해당 i번째 pno제품의 정보찾기
            console.log(결제Array[i][0])

            for(let l=0; l<결제Array[i][l].length; l++){// 주문내역 배열-> 카트배열 찾기?
                console.log(결제Array[i][l])

                for(let j=0; j<productArray.length; j++){//제품에서 번호 찾기
                    console.log(productArray[j])
                    if(결제Array[i][l].pno==productArray[j].pno){
                        html+=` <tr>
                            <th>${결제Array[i]}</th> 
                            <th>${productArray[j].pno}</th>
                            <th>${new Date().toLocaleDateString()}</th> 
                            <select>
                                <option>결제완료</option>
                                <option>조리중</option>
                                <option>픽업완료</option>
                            </select>
                            <th>${productArray[j].pprice*결제Array[i][l].count}</th>
                            <th>${결제Array[i][l].count}</th>
                            </tr>`
                    }
                }
            }    
        결제내역창.innerHTML=html; 
    } */
}

new Date().toLocaleDateString()