const registryCircle = document.querySelectorAll(".registry__circle");
const registryRadio = document.querySelector(".registry__radio");
const registryForm = document.querySelector(".registry__form");
const registryPage = document.querySelectorAll(".registry__page");
const registrySubmitFinish = document.querySelector(
    ".registry__submit--finish"
);

let num;

registryRadio.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("registry__circle")) {
        registryCircle.forEach((c) => {
            c.classList.remove("registry__circle--active");
        });
        target.classList.add("registry__circle--active");
        num = +e.target.textContent;
        registryPage.forEach((r) => {
            r.classList.add("visually-hidden");
        });
        registryPage[num - 1].classList.remove("visually-hidden");
    }
});

registryForm.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("registry__submit")) {
        registryCircle.forEach((c, index) => {
            if (c.classList.contains("registry__circle--active")) {
                num = index;
                registryPage.forEach((r) => {
                    r.classList.add("visually-hidden");
                });
            }
            if (num < 2) {
                c.classList.remove("registry__circle--active");
                registryPage[num + 1].classList.remove("visually-hidden");
            }
        });
        if (num < 2) {
            registryCircle[num + 1].classList.add("registry__circle--active");
        }
    }
});

registrySubmitFinish.addEventListener("click", () => {
    const registryDescription = document.querySelector(
        ".registry__description"
    );
    const registry = document.querySelector(".registry");
    registryRadio.classList.add("visually-hidden");
    registryDescription.classList.add("visually-hidden");
    registry.insertAdjacentHTML(
        "beforeend",
        `<div class="registry__success">
            <div class="registry__check-img"></div>
            <div class="registry__text">
                Вы успешно зарегистрировались на платформе C-Money!
            </div>
            <div class="registry__text-description">
                Ссылка для входа в личный кабинет отправлена на вашу
                электронную почту (не забудьте проверить папку «Спам»)
            </div>
        </div>`
    );
});
