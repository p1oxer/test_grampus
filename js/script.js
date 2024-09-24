document.querySelector(".icon-menu").addEventListener("click", () => {
    document.body.classList.toggle("lock");
    document.body.classList.toggle("menu-open");
});
const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
        document.body.classList.remove("lock");
    });
});

const modalButtons = document.querySelectorAll(".modal-open");
const modal = document.querySelector(".modal");

modalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        new Fancybox(
            [
                {
                    src: modal,
                    type: "html",
                },
            ],
            {
                closeButton: false,
                hideScrollbar: false,
            }
        );
    });
});

const modalDoneButton = document.querySelector(".next-popup");
const modalDone = document.querySelector(".modal__done");
modalDoneButton.addEventListener("click", () => {
    new Fancybox(
        [
            {
                src: modalDone,
                type: "html",
            },
        ],
        {
            closeButton: false,
            hideScrollbar: false,
        }
    );
});

var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);