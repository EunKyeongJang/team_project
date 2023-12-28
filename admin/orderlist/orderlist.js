//주문내역 스크립트 작성_김민지

/*      
        카트     :[{메뉴번호,개수}]
        주문내역 :[{주문번호,메뉴번호,주문날짜,주문상태, 총가격, 개수}]
*/

let orderArray = JSON.parse(localStorage.getItem('orderArray')); //localStorage에 orderArray 배열 만듦
if( orderArray == null ){ orderArray = [] };
//새로고침 버튼을 만들자
//--------함수 1--------------------
function order(){// 주문하기 버튼 눌렀을 때 실행될 함수
    let cartArray = JSON.parse(localStorage.getItem('cartArray')); // 로컬에 있는 카트 배열 불러옴
    let list = orderArray.length < 1 ?  1 : orderArray[orderArray.length-1].list+1 // order 배열의 길이가 1보다 작으면 1 아니면 마지막 list 번호에 +1
    for(let i=0; i<cartArray.length;i++){
        //cartArray 있는 배열의 객체마다 리스트 번호를 추가
        cartArray[i].list=list
        let cart=cartArray[i]
        //객체 개별로 cart에 저장
      
        orderArray.push(cart) //order 배열에 추가
        localStorage.setItem('orderArray',JSON.stringify(orderArray)); // 로컬 배열에도 추가
    }
    console.log(orderArray);
    
    cartArray=[] // orderArray push가 끝나면 cartArray는 초기화
    localStorage.setItem('cartArray',JSON.stringify(cartArray)); // 로컬에도 초기화 저장 
    orderlist();
 }

//--------함수 2------------------
function orderlist(){
    let productArray = JSON.parse(localStorage.getItem('productArray')); //로컬에서 불러오기
    let orderArray = JSON.parse(localStorage.getItem('orderArray'));

    const orderlist = document.querySelector('tbody') //어디에
    let html=``;
    
    for(let i=0; i<orderArray.length;i++){ // order 배열에 있는거 다 출력
        for(let j=0; j<productArray.length; j++){ // 제품 배열 반복
            if(orderArray[i].pno==productArray[j].pno){ // order 배열의 pno과 제품 pno 일치 찾기
                html+=` <tr>
                            <th>${orderArray[i].list}</th> 
                            <th>${productArray[j].pname}</th>
                            <th>${new Date().toLocaleDateString()}</th> 
                            <th>
                                <select>
                                    <option>결제완료</option>
                                    <option>조리중</option>
                                    <option>픽업완료</option>
                                </select>
                            </th>
                            <th>${productArray[j].pprice*orderArray[i].count}</th>
                            <th>${orderArray[i].count}</th>
                         </tr>`
            }
        }
    }
    orderlist.innerHTML=html; 
  
}