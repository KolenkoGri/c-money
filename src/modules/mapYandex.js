/* eslint-disable no-undef */
ymaps.ready(init);
function init() {
    const myMap = new ymaps.Map("map", {
        center: [55.791076, 37.59047],
        zoom: 15,
    });

    const mark = new ymaps.Placemark(
        [55.791076, 37.59047],
        {},
        {
            iconLayout: "default#image",
            iconImageHref: "/icon/geo.svg",
        }
    );

    myMap.geoObjects.add(mark);
}
