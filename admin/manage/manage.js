//====가상 데이터===
/* 백엔드로부터 데이터를 받았다 치고 */
let categoryArray = [
    {cno : 1, cname : '신제품(NEW)'}, 
    {cno : 2, cname : '프리미엄'}, 
    {cno : 3, cname : '와퍼&주니어'}, 
    {cno : 4, cname : '치킨&슈림프버거'}, 
    {cno : 5, cname : '올데이킹&킹모닝'}
]

/* 2. 제품목록 *제품 이미지명은 사진파일명이랑 동일하게 */
let productArray=[
{pno : 1, pname : '큐브스테이크와퍼', pprice : 19000, pimg : '', cno : 1},
{pno : 2, pname : '스파이시 큐브스테이크와퍼', pprice : 25000, pimg : '', cno : 1},
{pno : 3, pname : '더블비프불고기버거', pprice : 13000, pimg : '', cno : 5}    
]

let cartArray=[
    {pno : 1, count : 2},
    {pno : 2, count : 3},
]

let orderArray=[
    {orderNo : 3, pno : 1, orderDate :2023-12-26, orderStatus :'준비중', totalPrice :30000, count :2}
]




//========카테고리 등록===========
inputSelect(`selectCategory`);//제품등록 selct category
printCategory() //카테고리 리스트 출력

    //카테고리 등록함수
function inputCategory(){   console.log(`카테고리 등록함수 실행`);
    const inputCnum=document.querySelector('#inputCnum').value;
    const inputCname=document.querySelector('#inputCname').value;    

    //기존 localStorage 호출
    let categoryArray = JSON.parse(localStorage.getItem('categoryArray')); console.log(categoryArray);
    if(categoryArray==null){
        categoryArray=[];    //만약에 localStorage에 아무것도 없으면 배열 선언
    }

    //유효성 검사
    if(inputCnum==''){ alert('카테고리 번호를 입력 해 주십시오.'); return; };
    if(inputCname==''){ alert('카테고리 명을 입력 해 주십시오.'); return; };

    for(let z=0; z<categoryArray.length; z++){//동일한번호/이름 이 존재하는지
        if(inputCnum==categoryArray[z].cno){ alert('존재하는 카테고리번호 입니다.'); return;}
        if(inputCname==categoryArray[z].cname){ alert('존재하는 카테고리이름 입니다.'); return; }
    }

    //객체화
    const category={cno : inputCnum, cname : inputCname}

    console.log(category)

    categoryArray.push(category);
    console.log(categoryArray);

    //storage에 저장
    localStorage.setItem('categoryArray',JSON.stringify(categoryArray));

    document.querySelector("#inputCnum").value=``;
    document.querySelector("#inputCname").value=``;
    document.querySelector('#selectCno').value=``;

    inputSelect(`selectCategory`);
    printCategory();
}//f end

    //카테고리 리스트 출력
function printCategory(){  console.log('카테고리 리스트 출력함수 실행');
    let categoryArray = JSON.parse(localStorage.getItem('categoryArray')); console.log(categoryArray);//기존 카테고리함수 호출
    if(categoryArray==null){
        categoryArray=[];    //만약에 localStorage에 아무것도 없으면 배열 선언
    }

    const cOutput=document.querySelector('#cOutput');
    let html=``;

    for(let i=0; i<categoryArray.length; i++){
        html+=`<div class="Clist">
            <span class="CheadA">${categoryArray[i].cno}</span>
            <span class="CheadB">${categoryArray[i].cname}</span>
            <span class="CheadC"><button onclick="deleteCategory(${categoryArray[i].cno})" type="button">X</button></span>
        </div>`;
    }
    
    cOutput.innerHTML=html;
}

    //등록된 카테고리 select에 추가
function inputSelect(selectId){     console.log(`select에 추가함수 실행`);
    let categoryArray = JSON.parse(localStorage.getItem('categoryArray')); console.log(categoryArray);//기존 카테고리함수 호출
    if(categoryArray==null){
        categoryArray=[];    //만약에 localStorage에 아무것도 없으면 배열 선언
    }

    const selectCategory=document.querySelector(`#${selectId}`);

    let html=`<option value="" selected disabled hidden>카테고리 선택</option>`;  

    for(let i=0; i<categoryArray.length; i++){
        html+=`<option>${categoryArray[i].cname}</option>`;
    }

    selectCategory.innerHTML=html;
}//f end

//========카테고리 등록 end===========


//==========제품등록============
    //카테고리 클릭 시 카테고리 번호 출력 함수
function printCno(selectValue, outputId){   console.log('카테고리 번호 출력 함수 실행');
    let categoryArray = JSON.parse(localStorage.getItem('categoryArray')); console.log(categoryArray);//기존 카테고리함수 호출
        if(categoryArray==null){
            categoryArray=[];    //만약에 localStorage에 아무것도 없으면 배열 선언
        }
    //매개변수[selectValue : select Id, outputId : 번호출력할 input Id]     
    let selectCategory=document.querySelector(`#${selectValue}`).value;

    for(let i=0; i<categoryArray.length; i++){
        if(selectCategory==categoryArray[i].cname){
            //선택된 카테고리명과 카테고리 배열.cname이 일치하면,
            //카테고리 고유번호를 옆에 출력
            document.querySelector(`#${outputId}`).value=categoryArray[i].cno;
        }
    }
}//f end

//@@이미지 등록 함수(경로 -> byte)
let imgByte=``;
function inputImg(event){console.log('inputImg()함수 실행')
    //!event : 이벤트를 발생한 결과정보객체

    //[1]첨부파일 input에 등록된 파일을 바이트 가ㅏ져오기
        //1. 파일 읽기 클래서[객체,설계도],newFileReader();
    let readFile= new FileReader(); //파일 읽기 생성
        //2. 파일을 JS로 읽어들이기[ 내가 등록한 파일을 ]
        readFile.readAsDataURL(event.target.files[0]);
        console.log(readFile);
        //3. 읽어온 바이트를 img 태그에 출력
        readFile.onload=function(){
            imgByte=readFile.result;
        }

}
//@@이미지 등록 함수 end

    //제품등록 함수
function inputProduct(){    console.log(`제품등록함수 실행`);
    //새로운 제품 정보 받아오기
    let selectCno=document.querySelector("#selectCno").value;
    let inputPname=document.querySelector("#inputPname").value;
    let inputPimg=document.querySelector("#inputPimg").value;
    let inputPrice=document.querySelector("#inputPrice").value;
    let inputPno=document.querySelector('#inputPno').value;

    let productArray = JSON.parse(localStorage.getItem('productArray')); console.log(productArray);//기존 카테고리함수 호출
    if(productArray==null){
        productArray=[];    //만약에 localStorage에 아무것도 없으면 배열 선언
    }

    //유효성 검사
    for(let z=0; z<productArray.length; z++){
        if(inputPno==productArray[z].pno){ alert('존재하는 제품번호입니다.'); return;}
    }
    if(selectCno==``){  //카테고리 유효성
        alert('카테고리를 선택해 주십시오.');
        return;
    }
    if(inputPname==``){  //제품명 유효성
        alert('제품명을 입력해 주십시오.');
        return;
    }
    if(inputPno==``){  //제품번호 유효성
        alert('제품번호을 입력해 주십시오.');
        return;
    }
    if(inputPrice==``){  //가격 유효성
        alert('가격을 입력해 주십시오.');
        return;
    }

    if(inputPimg==``){  //이미지 유효성
        alert('이미지를 선택해 주십시오.');
        return;
    }
    //이미지는 inputImg 함수로 변환하여 사용(경로 -> byte) 사용

    //제품정보 객체화
    const product={
        pno : inputPno, 
        pname : inputPname, 
        pprice :inputPrice, 
        pimg : imgByte, 
        cno :  selectCno
    }
     //제품 등록
     productArray.push(product)
    console.log(product);

    localStorage.setItem('productArray',JSON.stringify(productArray));

    //value값 초기화
    document.querySelector("#inputPname").value=``;
    document.querySelector("#inputPimg").value=``;
    document.querySelector("#inputPrice").value=``;
    document.querySelector('#inputPno').value=``;
    printPlist()
}//f end

//==========제품등록 end============


//===================제품리스트 수정/삭제======================

//===========제품리스트 출력=============
    //제품리스트 출력 함수
function printPlist(){ console.log(`제품리스트 출력 함수 실행`)
    let productArray = JSON.parse(localStorage.getItem('productArray')); console.log(productArray);//기존 카테고리함수 호출
        if(productArray==null){
            productArray=[];    //만약에 localStorage에 아무것도 없으면 배열 선언
        }

const plist=document.querySelector("#plist");
let selectCno=document.querySelector('#selectCno').value;
console.log(selectCno);

let html=``;

for(let i=0; i<productArray.length; i++){
        if(productArray[i].cno==selectCno){   //선택된 카테고리 항목을 출력
            html+=`<!-- 제품 1개 -->
                <div class="productList">
                    <span class="PheadA">${productArray[i].pno}</span>
                    <span class="PheadB">${productArray[i].pname}</span>
                    <span class="PheadC" >${productArray[i].pprice}</span>
                    <span class="PheadD"><img src='${productArray[i].pimg}' /></span>
                    <span class="PheadE">
                        <input onclick="changeProduct(${productArray[i].pno})" type="button" value="수정">
                        <input onclick="deleteProduct(${productArray[i].pno})" type="button" value="삭제">
                    </span>
                </div>

                <!-- 제품수정 테이블-->
                <div id="rewordProduct" value="${productArray[i].pno}">
                </div>
                <!-- 제품 1개 end -->`;
        }
    }

console.log(productArray);

plist.innerHTML=html;
}

//===========제품리스트 출력 end=============


//===========제품리스트 수정=============
    //제품수정 폼 출력 함수
function changeProduct(changePno){  console.log(`제품수정 폼 출력 함수 실행`);
    let productArray = JSON.parse(localStorage.getItem('productArray')); console.log(productArray);//기존 제품함수 호출
                if(productArray==null){
                    productArray=[];    //만약에 localStorage에 아무것도 없으면 배열 선언
                }

    const changeTable=document.querySelector(`#rewordProduct[value='${changePno}']`);
    let changePname=``;
    let changePprice=``;

    for(let i=0; i<productArray.length; i++){   //기존 정보 불러오기(제품이름, 제품가격)
        if(changePno==productArray[i].pno){
            changePname=productArray[i].pname;
            changePprice=productArray[i].pprice;
        }
    }
    //제품수정 폼
    let html=`<div class="newPList">      
            <span> <input id="changePno" class="PheadA" type="text" value="${changePno}" disabled/>  </span>
            <span> <input id="changePname" class="PheadB" type="text" value="${changePname}"/> </span>
            <span> <input id="changePprice" class="PheadC" type="text" value="${changePprice}"/> </span>
            <span> <input id="changePimg" class="PheadD" type="file"> </span>
            <span class="PheadE">
                <input onclick="changePermit(${changePno})" type="button" value="확인">
                <input onclick="changeCancel(${changePno})" type="button" value="취소">
            </span>  
        </div> `;

    changeTable.innerHTML=html;  //수정테이블 아래에 띄우기

}

    //제품수정>확인 클릭
function changePermit(changePno){   console.log(`제품수정 확인클릭 실행`);
    let productArray = JSON.parse(localStorage.getItem('productArray')); console.log(productArray);//기존 제품함수 호출
                if(productArray==null){
                    productArray=[];    //만약에 localStorage에 아무것도 없으면 배열 선언
                }

    const changePname=document.querySelector('#changePname').value;
    const changePprice=document.querySelector('#changePprice').value;
    let changePimg=document.querySelector('#changePimg').value;

    //만약 수정시에 제품이미지를 선택하지 않았을 경우 원래 이미지 넣기
    if(changePimg==''){
        for(let j=0; j<productArray.length; j++){
            if(changePno==productArray[j].pno){
                changePimg=productArray[j].pimg;
            }
        }
    }

    //확인
    let check=confirm('수정하시겠습니까?');
    if(check==false){ return; }

    for(let i=0; i<productArray.length; i++){   //작성한 정보로 수정하기
        if(productArray[i].pno==changePno){
            productArray[i].pname=changePname;
            productArray[i].pprice=changePprice;
            productArray[i].pimg=changePimg;
        }
    }

    localStorage.setItem('productArray',JSON.stringify(productArray));//localstorage에 함수 재등록

    printPlist()    //리스트 재출력
}

    //제품수정>취소 클릭
function changeCancel(changePno){   console.log(`제품수정 취소클릭 실행`);
    printPlist();
}

//===========제품리스트 수정 end=============


//===========제품 삭제=============
    //제품 삭제 함수
function deleteProduct(deletePno){  console.log(`제품 삭제 함수 실행`);
    let productArray = JSON.parse(localStorage.getItem('productArray')); console.log(productArray);//기존 제품함수 호출
            if(productArray==null){
                productArray=[];    //만약에 localStorage에 아무것도 없으면 배열 선언
            }

    
    let check=confirm('제품을 삭제하시겠습니까?');
    if(check==false){
        return;
    }

    for(let i=0; i<productArray.length; i++){
        if(productArray[i].pno==deletePno){
            productArray.splice(i,1);
        }
    }

    localStorage.setItem('productArray',JSON.stringify(productArray));//localstorage에 함수 재등록
    
    printPlist()
}//f end

    //카테고리 삭제
function deleteCategory(selectCno){ console.log(`카테고리 삭제함수 실행`);
    let categoryArray = JSON.parse(localStorage.getItem('categoryArray')); console.log(categoryArray);//기존 카테고리함수 호출
        if(categoryArray==null){
            categoryArray=[];    //만약에 localStorage에 아무것도 없으면 배열 선언
        }

    let productArray = JSON.parse(localStorage.getItem('productArray')); console.log(productArray);//기존 제품함수 호출
        if(productArray==null){
            productArray=[];    //만약에 localStorage에 아무것도 없으면 배열 선언
        }

    let check=confirm('카테고리를 삭제하시겠습니까?');
        if(check==false){
            return;
        }

    for(let j=0; j<productArray.length; j++){
        if(selectCno==productArray[j].cno){
            alert('카테고래 내 제품을 모두 삭제하고 다시 시도 해주십시오.');
            return;
        }
    }

    for(let i=0; i<categoryArray.length; i++){
        if(selectCno==categoryArray[i].cno){
            categoryArray.splice(i,1);
        }
    }

    localStorage.setItem('categoryArray',JSON.stringify(categoryArray));//localstorage에 함수 재등록

    //카테고리 출력
    inputSelect(`selectCategory`);
    printPlist();
    printCategory();

    console.log(categoryArray);
}
//===========제품리스트 삭제 end=============



//===================제품리스트 수정/삭제 end======================
