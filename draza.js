var paras = document.getElementsByTagName("p");
for (i = 0; i < paras.length; ++i) {
    if (parseInt(Math.random() * 3, 10) === 0) {
        paras[i].textContent = 'Labtien! ' + paras[i].textContent;
    }
}

var removeShit = function (className) {
    var shits = document.getElementsByClassName(className);
    for (i = 0; i < shits.length; ++i) {
        var parent = shits[i].parentNode;
        parent.removeChild(shits[i]);
        parent.parentNode.removeChild(parent);
    }
}

var removeOtherShit = function (id) {
    var shit = document.getElementById(id)
    if (shit) {
        shit.parentNode.removeChild(shit);
    }
}

removeShit('tvnet');
removeShit('apollo');
removeShit('diena');
removeShit('chaulatv');
removeShit('adv_urls_t');
removeShit('adv_urls_b');
removeShit('adv_urls');
removeShit('right_banner');
removeShit('left_banner');

removeOtherShit('top_adv_box');
removeOtherShit('top_adv_box_r');
removeOtherShit('top_sub_nav');

console.log('8===D~~~')
