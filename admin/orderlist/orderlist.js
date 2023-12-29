//주문내역 스크립트 작성_김민지

/*      
        카트     :[{메뉴번호,개수},{메뉴번호,개수},{메뉴번호,개수}]
        주문내역 :[{주문번호,메뉴번호,주문날짜,주문상태, 총가격, 개수}]
*/
/*
let orderArray = JSON.parse(localStorage.getItem('orderArray')); //localStorage에 orderArray 배열 만듦
if( orderArray == null ){ orderArray = [] };

//--------[함수1] 카트 배열에서 주문배열로 키:값 추가 저장--------------------// 메인 js로 보낼지 말지...?
function order(){// 주문하기 버튼 눌렀을 때 실행될 함수
    let cartArray = JSON.parse(localStorage.getItem('cartArray')); // 로컬에 있는 카트 배열 불러옴
    
    let list = orderArray.length < 1 ?  1 : orderArray[orderArray.length-1].list+1 // order 배열의 길이가 1보다 작으면 1 아니면 마지막 list 번호에 +1
    for(let i=0; i<cartArray.length;i++){
        //cartArray 있는 배열의 객체마다 리스트 번호를 추가
        cartArray[i].list=list
        let cart=cartArray[i]
        for(let j=0; j<productArray.length;j++){
            if(cartArray[i].pno==productArray[j].pno){
                cartArray[i].list=list
                cartArray[i].date=new Date().toLocaleDateString()
                cartArray[i].total=productArray[j].pprice*orderArray[i].count
            }
        }
        //객체 개별로 cart에 저장
      
        orderArray.push(cart) //order 배열에 추가
        localStorage.setItem('orderArray',JSON.stringify(orderArray)); // 로컬 배열에도 추가
    }
    console.log(orderArray);
    
    cartArray=[] // orderArray push가 끝나면 cartArray는 초기화
    localStorage.setItem('cartArray',JSON.stringify(cartArray)); // 로컬에도 초기화 저장 
    orderlist();
 }
 */
document.addEventListener('DOMContentLoaded',function(){
    //--------[함수2] 출력함수------------------
    orderlist();
    function orderlist(){
        let productArray = JSON.parse(localStorage.getItem('productArray')); //로컬에서 불러오기
        let orderArray = JSON.parse(localStorage.getItem('orderArray'));
       
        const orderlist = document.querySelector('tbody') //어디에
        let html=``;
       
        for(let i=0; i<orderArray.length;i++){ // order 배열에 있는거 다 출력
            for(let j=0; j<productArray.length; j++){ // 제품 배열 반복
                if(orderArray[i].pno==productArray[j].pno){ // order 배열의 pno과 제품 pno 일치 찾기
                    // 만약 객체에 status 값이 있다면 select 값을 그걸로 출력하기
                    html+=` <tr>
                                <th>${orderArray[i].list}</th> 
                                <th>${productArray[j].pname}</th>
                                <th>${new Date().toLocaleDateString()}</th> 
                                <th>
                                   <select 
                                        name="${orderArray[i].list}:${orderArray[i].pno}" 
                                        onchange="status(${orderArray[i].list}, ${orderArray[i].pno})">
                                            <option>대기중</option>
                                            <option>취소</option>
                                            <option>완료</option>
                                    </select>
                                </th>
                                <th>${(productArray[j].pprice*orderArray[i].count).toLocaleString()}</th>
                                <th>${orderArray[i].count}</th>
                                
                             </tr>`
    
                    orderArray[i].date=new Date().toLocaleDateString()
                    orderArray[i].total=productArray[j].pprice*orderArray[i].count
                    localStorage.setItem('orderArray',JSON.stringify(orderArray)); // 로컬 배열에도 추가
                    console.log(j)
                }
            }
        }
        orderlist.innerHTML=html; 

    }

});
  // -----------[함수3] 상태 저장 후 배열 객체에 넣기------------------
function status(list, pno){
    console.log('상태함수')
    let orderArray = JSON.parse(localStorage.getItem('orderArray'));
    for(let i=0; i<orderArray.length; i++){
        if(orderArray[i].list==list && orderArray[i].pno==pno){ 
            orderArray[i].status=document.querySelector(`select[name='${list}:${pno}']`).value;
            localStorage.setItem('orderArray',JSON.stringify(orderArray));
            console.log(orderArray)
        }
    }
    
}


/*
function status(list){
   console.log('상태함수')
   let select=document.querySelector('select').value
    let orderArray = JSON.parse(localStorage.getItem('orderArray'));
    for(let i=0; i<orderArray.length; i++){
        if(orderArray[i].pno==list){ 
            orderArray[i].status=select
            localStorage.setItem('orderArray',JSON.stringify(orderArray));
            console.log(orderArray)
            // select1.innerHTML=orderArray[i].status;
        }
        
    }
   
}*/