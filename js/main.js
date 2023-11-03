'use strict';

{
  document.addEventListener("DOMContentLoaded", function () {
    var elements = document.querySelectorAll(".fade-in");
    elements.forEach(function (element, index) {
        element.style.opacity = "0";
        element.style.transition = "opacity 5s";
        setTimeout(function () {
            element.style.opacity = "1";
        }, 300 * index); // 適切な遅延を設定
    });
});
}