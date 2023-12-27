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
{pno : 1, pname : '큐브스테이크와퍼', pprice : 19000, pimg : '큐브스테이크와퍼.png', cno : 1},
{pno : 2, pname : '스파이시 큐브스테이크와퍼', pprice : 25000, pimg : '스파이시큐브스테이크와퍼.png', cno : 1},
{pno : 3, pname : '더블비프불고기버거', pprice : 13000, pimg : '더블비프불고기버거.png', cno : 5}    
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

    //카테고리 등록함수
function inputCategory(){   console.log(`카테고리 등록함수 실행`);
    const inputCnum=document.querySelector('#inputCnum').value;
    const inputCname=document.querySelector('#inputCname').value;

    categoryArray.push({cno : inputCnum, cname : inputCname});
    console.log(categoryArray);

    document.querySelector("#inputCnum").value=``;
    document.querySelector("#inputCname").value=``;

    inputSelect(`selectCategory`);
}//f end

    //등록된 카테고리 select에 추가
function inputSelect(selectId){     console.log(`select에 추가함수 실행`);
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

    //제품등록 함수
function inputProduct(){    console.log(`제품등록함수 실행`);
    //새로운 제품 정보 받아오기
    let selectCno=document.querySelector("#selectCno").value;
    let inputPname=document.querySelector("#inputPname").value;
    let inputPimg=document.querySelector("#inputPimg").value;
    let inputPrice=document.querySelector("#inputPrice").value;
    let inputPno=document.querySelector('#inputPno').value;

    //이미지 경로 가공(절대경로 : 오류발생, 상대경로로 바꾸기)
    let newImg=inputPimg.split('\\')[2];
    console.log(inputPimg.split('\\')[2]);

     //제품 등록
     productArray.push({
        pno : inputPno, 
        pname : inputPname, 
        pprice :inputPrice, 
        pimg : newImg, 
        cno :  selectCno
    })
    console.log(productArray);

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
console.log('printPlist() 실행')
const plist=document.querySelector("#plist");
let selectCno=document.querySelector('#selectCno').value;
console.log(selectCno);

let html=``;

for(let i=0; i<productArray.length; i++){
        if(productArray[i].cno==selectCno){   //선택된 버튼에 따라 카테고리별로 출력할지, 모든제품을 출력할지
            html+=`<!-- 제품 1개 -->
                <tr>
                    <td>${productArray[i].pno}</td>
                    <td>${productArray[i].pname}</td>
                    <td>${productArray[i].pprice}</td>
                    <td>${productArray[i].pimg}</td>
                    <td><input onclick="changeProduct(${productArray[i].pno})" type="button" value="수정"></td>
                    <td><input onclick="deleteProduct(${productArray[i].pno})" type="button" value="삭제"></td>
                </tr>
                <tr value="${productArray[i].pno}">
                </tr>
                <!-- 제품 1개 end -->`;
        }
    }


plist.innerHTML=html;
}

//===========제품리스트 출력 end=============


//===========제품리스트 수정=============
    //제품수정 함수
function changeProduct(changePno){  console.log(`제품수정 함수 실행`);
    const changTable=document.querySelector(`tr[value='${changePno}']`);
    let changePname=``;
    let changePprice=``;

    for(let i=0; i<productArray.length; i++){   //기존 정보 불러오기
        if(changePno==productArray[i].pno){
            changePname=productArray[i].pname;
            changePprice=productArray[i].pprice;
        }
    }

    let html=`<td> <input id="changePno" type="text" placeholder="${changePno}" disabled/>  </td>
    <td> <input id="changePname" type="text" placeholder="${changePname}"/> </td>
    <td> <input id="changePprice" type="text" placeholder="${changePprice}"/> </td>
    <td> <input id="changePimg" type="file"> </td>`;

    changTable.innerHTML=html;  //수정테이블 아래에 띄우기

}


//===========제품리스트 수정 end=============


//===========제품 삭제=============
    //제품 삭제 함수
function deleteProduct(deletePno){  console.log(`제품 삭제 함수 실행`);
    
    for(let i=0; i<productArray.length; i++){
        if(productArray[i].pno==deletePno){
            productArray.splice(i,1);
        }
    }
    
    printPlist()
}//f end

//===========제품리스트 삭제 end=============

//===================제품리스트 수정/삭제======================
