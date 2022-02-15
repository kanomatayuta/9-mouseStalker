//id名stalkerを取得
const stalker = document.getElementById('stalker'); 

//変数stalkerをマウスに追従させる
//カーソルが要素内にあるときに発行 マウスが動いた時にそのマウスの座標を取得
document.addEventListener('mousemove', function (event) {
    // マウス座標をマウスストーカーの位置(transform)に指定
    stalker.style.transform = 'translate(' + event.clientX + 'px, ' + event.clientY + 'px)';
});
