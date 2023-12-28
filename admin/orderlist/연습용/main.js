document.addEventListener('DOMContentLoaded',function(){
    let cartArray = JSON.parse(localStorage.getItem('cartArray'));
    if( cartArray == null ){ cartArray = [] };

    const cart ={pno:2, count:1}
    cartArray.push(cart);
    localStorage.setItem('cartArray',JSON.stringify(cartArray));

    // let productArray= JSON.parse(localStorage.getItem('productArray'));
    // if( productArray == null ){ productArray = [] };

    // const product ={pno:3, pname:'블랙바비큐콰트로치즈와퍼', pprice:13500, pimg:'블랙바비큐콰트로치즈와퍼.png', cno:1}
    // productArray.push(product);
    // localStorage.setItem('productArray',JSON.stringify(productArray));
    // [
    //     {pno:1, pname:'몬스터와퍼', pprice:9500, pimg:'몬스터와퍼.png', cno:3},
    //     {pno:2, pname:'블랙바비큐와퍼', pprice:10500, pimg:'블랙바비큐와퍼.png', cno:2},
    //     {pno:3, pname:'블랙바비큐콰트로치즈와퍼', pprice:13500, pimg:'블랙바비큐콰트로치즈와퍼.png', cno:1},
    // ]
})