// ========================== 카테고리 리스트 ========================== //
const categoryArray=[
    {cno:1, cname:'메인메뉴'},
    {cno:2, cname:'닭발메뉴'},
    {cno:3, cname:'세트메뉴'},
    {cno:4, cname:'사이드/음료'}
]
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
// ========================== 카트 리스트 ========================== //
let JScartArray=[];

// ========================== !!!!! 로컬스토리지 등록 !!!!! ========================== //
localStorage.setItem('categoryArray',JSON.stringify(categoryArray));
localStorage.setItem('productArray',JSON.stringify(productArray));

// ========================== 등록 및 출력 ========================== //
document.addEventListener('DOMContentLoaded',function(){
    categoryPrint(1);
    cartPrint();
})
    // =========================== 카테고리 출력 =========================== //
    function categoryPrint(selectCno){
        const bottomHeader=document.querySelector('#bottomHeader>ul');
        let html='';
        for(let i=0; i<categoryArray.length; i++){
            html+=`
            <div id="listMenu">
            <li onclick="categoryPrint(${categoryArray[i].cno})" class="${categoryArray[i].cno==selectCno?'selectMenu':''}">
            ${categoryArray[i].cname}
            </li>
            </div>`
        }
        bottomHeader.innerHTML=html;
        productPrint(selectCno)
    }
    
    // ========================== 상품 출력 ========================== //
    function productPrint(selectCno){
        const main=document.querySelector('#main');
        let html='';
        for(let i=0; i<productArray.length; i++){
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

    // ========================== 카트배열에 등록 ========================== //
    function setCart(event){ // 언제 상품을 클릭했을때 무엇을 상품의 pno와 수량을 어디에 로컬스토리지에 새 배열로 등록
                // 상품을 클릭했을때 만약 배열에 등록되어있는 인덱스번째 상품번호가 같으면 카운트 +1
            console.log(event);
        let cartArray=JSON.parse(localStorage.getItem('cartArray'));
        if(cartArray==null){cartArray=[]};
        
        let ch = false;                         console.log(ch);
        for( let i = 0 ; i<JScartArray.length ; i++){
            if( JScartArray[i].pno == event ){
                JScartArray[i].count += 1 ;
                cartArray[i].count += 1;
                ch = true;                      console.log(ch);
            }
        }
        if( !ch ){
            // 객체화
            const product=
            {
                pno:event,
                count:1
            }
            cartArray.push(product);
            JScartArray.push(product);
        }
                                                console.log(ch);
    // ========================== !!!!! 로컬스토리지 등록 !!!!! ========================== //
        localStorage.setItem('cartArray',JSON.stringify(cartArray));
        cartPrint(event)
    }

    // ========================== 카트 출력 ========================== //
    function cartPrint(){
        const footerBottom=document.querySelector('#footerBottom');
        let productArray=JSON.parse(localStorage.getItem('productArray'));
        let totalPrice=0;
        let html='';
        for(let i=0; i<JScartArray.length; i++){
            for(let j=0; j<productArray.length; j++){
                if(JScartArray[i].pno==productArray[j].pno){
                html+=`
                <div>
                    <div>${productArray[j].pname}</div>
                    <div>
                        <span onclick=deleteCount(${i})> < </span>
                        <span id="productCount"> ${JScartArray[i].count} </span>
                        <span onclick=addCount(${i})> > </span>
                    </div>
                    <div>${(productArray[j].pprice*JScartArray[i].count).toLocaleString()}원</div>
                </div>
                `
                totalPrice += productArray[j].pprice*JScartArray[i].count;
                } //    if end
                
            } // for 2 end
        } // for 1 end
        footerBottom.innerHTML=html;
        document.querySelector("#cartInfo").innerHTML="총 가격:"+totalPrice.toLocaleString()+"원";
    }

    // ========================== 상품개수 수량변경 함수 ========================== //
    function addCount(index){   // 언제 화살표를 클릭했을때 무엇을 카트어레이 카운트를 ++
        let cartArray=JSON.parse(localStorage.getItem('cartArray')); console.log(cartArray)
        cartArray[index].count += 1;
        JScartArray[index].count += 1;
        localStorage.setItem('cartArray',JSON.stringify(cartArray));
        cartPrint();
    }
    function deleteCount(index){
        let cartArray=JSON.parse(localStorage.getItem('cartArray'));
        cartArray[index].count -= 1;
        JScartArray[index].count -= 1;
        localStorage.setItem('cartArray',JSON.stringify(cartArray));
        cartPrint()
    }

    // ========================== 관리자탭 페이지 전환 ========================== //
        function adminTab(){
            location.href="/admin/orderlist/orderlist.html"
        }

    // ========================== 주문하기 누를 시 주문내역 배열저장 ========================== //
    /*
        언제 주문하기를 눌렀을때
        무엇을 카트에 있는 전체 내역을
            cartArray에는 pno와 카운트
        어디에 새로운 orderArray 배열에
    */
        function mainOrder(){
            html='';
            let footerBottom=document.querySelector('#footerBottom');
            let cartInfo=document.querySelector('#cartInfo');
            JScartArray.splice(0);
            footerBottom.innerHTML=html;
            cartInfo.innerHTML=html;
    }

    // ========================== 취소하기 누를 시 로컬스토리지 carArray 올 삭제 ========================== //
    function deleteAll(){
        let cartArray=JSON.parse(localStorage.getItem('cartArray'));
            cartArray.splice(0);
            JScartArray.splice(0);
        localStorage.setItem('cartArray',JSON.stringify(cartArray))
            console.log(cartArray);
        cartPrint()
    }
