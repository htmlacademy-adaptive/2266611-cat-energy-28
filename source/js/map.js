function init(ymaps) {
  const map = new ymaps.Map('map', {
    center: [59.93863106417265, 30.323036499999905],
    zoom: 14
  });

  const placemark = new ymaps.Placemark([59.93863106417265, 30.323036499999905], {
    balloonContentHeader: 'Cat Energy',
    balloonContentBody: 'Большая Конюшенная ул., 19/8, 191186',
    balloonContentFooter: 'Адмиралтейский р-н'
  }, {
    iconLayout: 'default#image',
    iconImageHref: "img/svg/map-marker.svg",
    iconImageSize: [57, 53],
    iconImageOffset: [-24, -42]
  });

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('rulerControl');
  map.behaviors.disable('scrollZoom');
  map.geoObjects.add(placemark);
}
