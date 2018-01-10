var n;
init();
setInterval(function() {
    makeLeave(getImage(n))
        .one('transitionend', (e) => {
        	console.log($(e.currentTarget))
            makeEnter($(e.currentTarget))
        })
    makeCurrent(getImage(n + 1))
    /*makeLeave(getImage(n))
    makeCurrent(getImage(n + 1))
    makeEnter(getImage(n + 2))*/
    n += 1
}, 3000)

function init() {
    n = 1;
    getImage(n).addClass('current').siblings().addClass('enter');
}

function getImage(n) {
    var num = (n % 3 === 0) ? 3 : n % 3;
    return $(`.images > img:nth-child(${num})`)
}

function makeCurrent($node) {
    $node.removeClass('enter leave').addClass('current')
    return $node;
}

function makeEnter($node) {
    $node.removeClass('current leave').addClass('enter');
    return $node;
}

function makeLeave($node) {
    $node.removeClass('enter current').addClass('leave');
    return $node;
}