window.onload = function () {
  L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

  var map = L.mapquest.map('map', {
    center: [42.4438, -76.4837],
    layers: L.mapquest.tileLayer('map'),
    zoom: 15.5
  });
  L.mapquest.textMarker([42.440731, -76.485046], {
    text: 'COLLEGETOWN CROSSING',
    subtext: 'Click on markers for more details',
    position: 'right',
    type: 'marker',
    icon: {
      primaryColor: '#333333',
      secondaryColor: '#333333',
      size: 'md'
    }
  }).bindPopup('Pop-ups display distance and approximate walk times').addTo(map);

  L.mapquest.textMarker([42.4417031, -76.4854087], {
    text: 'Starbucks',
    subtext: '',
    position: 'left',
    type: 'marker',
    icon: {
      primaryColor: '#999999',
      secondaryColor: '#999999',
      size: 'sm'
    }
  }).bindPopup('2 min walk | 400 ft | 121 m').addTo(map);

  L.mapquest.textMarker([42.4459406, -76.4833626], {
    text: 'Johnson School',
    subtext: '',
    position: 'left',
    type: 'marker',
    icon: {
      primaryColor: '#999999',
      secondaryColor: '#999999',
      size: 'sm'
    }
  }).bindPopup('9 min walk | 0.4 mi | 0.64 km').addTo(map);

  L.mapquest.textMarker([42.443572, -76.4858], {
    text: 'Law School Building',
    subtext: '',
    position: 'right',
    type: 'marker',
    icon: {
      primaryColor: '#999999',
      secondaryColor: '#999999',
      size: 'sm'
    }
  }).bindPopup('6 min walk | 0.3 mi | 0.5 km').addTo(map);

  L.mapquest.textMarker([42.447561, -76.4884], {
    text: 'Bethe House',
    subtext: '',
    position: 'left',
    type: 'marker',
    icon: {
      primaryColor: '#999999',
      secondaryColor: '#999999',
      size: 'sm'
    }
  }).bindPopup('14 min walk | 0.7 mi | 1.1 km').addTo(map);

  L.mapquest.textMarker([42.4488, -76.4848], {
    text: 'Arts Quad',
    subtext: '',
    position: 'left',
    type: 'marker',
    icon: {
      primaryColor: '#999999',
      secondaryColor: '#999999',
      size: 'sm'
    }
  }).bindPopup('15 min walk | 0.7 mi | 1.1 km').addTo(map);

  L.mapquest.textMarker([42.4487974, -76.4780183], {
    text: 'Ag Quad',
    subtext: '',
    position: 'right',
    type: 'marker',
    icon: {
      primaryColor: '#999999',
      secondaryColor: '#999999',
      size: 'sm'
    }
  }).bindPopup('22 min walk | 1.0 mile | 1.6 km').addTo(map);

  L.mapquest.textMarker([42.4446803, -76.48307], {
    text: 'Engineering Quad',
    subtext: '',
    position: 'right',
    type: 'marker',
    icon: {
      primaryColor: '#999999',
      secondaryColor: '#999999',
      size: 'sm'
    }
  }).bindPopup('8 min walk | 0.5 mi | 0.8 km').addTo(map);

  L.mapquest.textMarker([42.4459342, -76.480762], {
    text: 'Barton Hall',
    subtext: '',
    position: 'right',
    type: 'marker',
    icon: {
      primaryColor: '#999999',
      secondaryColor: '#999999',
      size: 'sm'
    }
  }).bindPopup('15 min walk | 0.7 mi | 1.1 km').addTo(map);

  L.mapquest.textMarker([42.4491145, -76.48207], {
    text: 'Rockefeller Hall',
    subtext: '',
    position: 'right',
    type: 'marker',
    icon: {
      primaryColor: '#999999',
      secondaryColor: '#999999',
      size: 'sm'
    }
  }).bindPopup('20 min walk | 0.9 mi | 1.45 km').addTo(map);

  L.mapquest.textMarker([42.44740, -76.485], {
    text: 'McGraw Clocktower',
    subtext: '',
    position: 'right',
    type: 'marker',
    icon: {
      primaryColor: '#999999',
      secondaryColor: '#999999',
      size: 'sm'
    }
  }).bindPopup('11 min walk | 0.6 mi | 1.0 km').addTo(map);

};