(function () {
    'use strict';

    var classes = ('tvnet apollo diena chaulatv adv_urls_t adv_urls_b ' +
        'adv_urls left_banner right_banner').split(' ');

    var ids = 'top_adv_box top_adv_box_r top_sub_nav'.split(' ');

    var something = 'ICAgX18gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1' +
            '9fXyAgICAgICAgXyAgIF8gICAgICBfICAgXyAgICANCiAvJ18gYFwgICBfX19f' +
            'X19fICAgX19fX19fXyAgIF9fX19fX18gL1wgIF9gXCAgICAvJyBcLycgXCAgIC' +
            '8nIFwvJyBcICAgLycgXC8nIFwNCi9cIFxMXCBcIC9cX19fX19fXCAvXF9fX19f' +
            'X1wgL1xfX19fX19cXCBcIFwvXCBcIC9cXy9cX18vLyAgL1xfL1xfXy8vICAvXF' +
            '8vXF9fLy8NClwvXz4gXyA8X1wvX19fX19fL19cL19fX19fXy9fXC9fX19fX18v' +
            'X1wgXCBcIFwgXFwvL1wvX18vICAgXC8vXC9fXy8gICBcLy9cL19fLyANCiAgL1' +
            'wgXExcIFwgL1xfX19fX19cIC9cX19fX19fXCAvXF9fX19fX1xcIFwgXF9cIFwN' +
            'CiAgXCBcX19fXy8gXC9fX19fX18vIFwvX19fX19fLyBcL19fX19fXy8gXCBcX1' +
            '9fXy8NCiAgIFwvX19fLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg' +
            'IFwvX19fLyANCg==';

    var removeByClass = function (className) {
        var elements = document.getElementsByClassName(className);

        for (var i = 0; i < elements.length; i++) {
            var child = elements[i];
            var parent = child.parentNode;
            parent.removeChild(child);
            parent.parentNode.removeChild(parent);
        }
    };

    var removeById = function (id) {
        var element = document.getElementById(id);

        if (element) {
            element.parentNode.removeChild(element);
        }
    };

    for (var i = 0; i < classes.length; i++) {
        removeByClass(classes[i]);
    }
    for (var e = 0; e < ids.length; e++) {
        removeById(ids[e]);
    }

    if (parseInt(Math.random() * 9, 10) === 0) {
        console.log(atob(something)); // Heh.
    }
})();
