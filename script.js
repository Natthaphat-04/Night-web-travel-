document.addEventListener("DOMContentLoaded", function () {
    var menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(function (item) {
        item.addEventListener("click", function () {
            var target = this.getAttribute("data-target");
            var section = document.getElementById(target);

            if (section.style.display === "none" || section.style.display === "") {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }

            menuItems.forEach(function (otherItem) {
                var otherTarget = otherItem.getAttribute("data-target");
                if (otherTarget !== target) {
                    var otherSection = document.getElementById(otherTarget);
                    otherSection.style.display = "none";
                }
            });
        });
    });
});

let btntop = document.getElementById('Btn-top');

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop >
        20) {
        btntop.style.display = "block";
    } else {
        btntop.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
