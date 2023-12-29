/* $(document).ready(function(){
    $('#header').load('/admin/admin.html');
}); */


document.addEventListener('DOMContentLoaded',function(){
    categoryPrint(1);
})

    let adminCategory=['주문내역','매출조회','제품관리']; console.log(adminCategory);

    function categoryPrint(index){
    const adminBox=document.querySelector('#adminBox')
    let html='';
        for(let i=0; i<adminCategory.length; i++){
            html+=
            `<div onclick="categoryPrint(${adminCategory[i]})" id="${adminCategory[i]==index?'selectBox':''}">${adminCategory[i]}</div>`
        }
    adminBox.innerHTML=html;
    }