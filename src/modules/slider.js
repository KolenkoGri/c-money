import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const windowWidth = window.screen.width;
// eslint-disable-next-line no-unused-vars
const swiper = new Swiper(".swiper", {
    modules: [Navigation],
    loop: true,
    slidesPerView: windowWidth < 580 ? 1 : windowWidth < 820 ? 2 : 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
