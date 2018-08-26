$(function() {
  !function() {
    if ($('#world-map').length) {  
      $('#world-map').vectorMap({
        map: 'world_mill',
        backgroundColor: '#ffffff',
        regionsSelectable: true,
        regionStyle: {
        initial: { fill: '#39527b', 'fill-opacity': .6, stroke: 'none', 'stroke-width': 0, 'stroke-opacity': 1 },
          hover: { 'fill-opacity': 0.8, cursor: 'pointer' },
          selected: { fill: '#2980b9' },
        },
        markerStyle: {
          initial: { fill: '#f1c40f', 'fill-opacity': 1, stroke: '#f1c40f', 'stroke-width': 10, 'stroke-opacity': .5 },
          hover: { 'fill-opacity': 1, stroke: '#f1c40f', 'stroke-width': 10, 'stroke-opacity': 1 }
        },
        markers: [
          {latLng: [41.90, 12.45], name: 'Vatican City'},
          {latLng: [37.4200756, -122.0727955], name: 'Mountain View'},
          {latLng: [30.0444196, 31.2357116], name: 'Ciro City'},
          {latLng: [25.697717409104378, 32.6398587481324], name: 'Luxor City'},
          {latLng: [35.71591543556279, 139.73647358577884], name: 'Tokyo'},
          {latLng: [40.432109135597095, -3.6912417157348276], name: 'Madrid'},
          {latLng: [645.9938550249877, -40.7213303307281], name: 'New York'},
          {latLng: [-23.501280327970314, -46.65224788028561], name: 'Sao Paulo'}
        ]
      });
    }
  }(),
  // function() {
  //   var uploads = [[0, 6], [1, 4.5], [2, 6], [3, 5], [4, 6.5], [5, 5], [6, 6],[7, 7], [8, 6], [9, 5], [10, 6], [11, 7], [12, 5.5]];
  //   var downloads = [[0, 5], [1, 4], [2, 5], [3, 4.5], [4, 5.5], [5, 4], [6, 5],[7, 6], [8, 5], [9, 4], [10, 5], [11, 6], [12, 6]];
  //   $.plot($('#dash1-flotchart-1'),
  //     [
  //       {
  //         data: uploads,
  //         label: 'Uploads'
  //       }, {
  //         data: downloads,
  //         label: 'Downloads'
  //       }
  //     ], {
  //     series: {
  //       lines: {
  //         show: true,
  //         zero: true,
  //         fill: true,
  //         fillColor: {
  //           colors: [{ opacity: 0 }, { opacity: .2 }]
  //         }
  //       },
  //       points: { show: !0, radius: 4 },
  //       highlightColor: $.colors.warning
  //     },
  //     colors: ['#71ce60', '#415e8c'],
  //     grid: {
  //       show: !0,
  //       hoverable: !0,
  //       borderWidth: 0,
  //       margin: { left: 0, right: 0, bottom: 0, top: 0 }
  //     },
  //     xaxis: { show: !1 },
  //     yaxis: { show: !1 },
  //     legend : {
  //       position : "nw",
  //       margin : [10, -90],
  //       labelFormatter: function(label, series) {
  //         return "<div class='ml-1' style='color: "+series.color+";'>"+ label +"</div>";
  //       }
  //     },
  //     tooltip: { 
  //       show: !0,
  //       content: '%s',
  //       cssClass: 'flotTip-with-arrow',
  //       defaultTheme: !1,
  //       shifts: { x: -45, y: -60 }
  //     }
  //   });
  // }(),
  // function() {
  //   var data = [ ['SUN', 120], ['MON', 95], ['TUE', 90], ['WED', 74], ['THU', 80], ['FRI', 110], ['SAT', 88] ];
  //   var series = [
  //     {
  //       data: data,
  //       lines: { show: true, fill: 1, fillColor: 'rgba(243, 247, 249, .4)', lineWidth: 2 },
  //       points: { show: true },
  //       color: $.colors.primary
  //     }
  //   ];
  //   $.plot($("#dash1-flotchart-2"), series, {
  //     xaxis: { mode: 'categories' },
  //     yaxis: { min: 0, max: 120, tickSize: 20 },
  //     grid: { 
  //       hoverable: true,
  //       borderWidth: 0,
  //       color: $.colors.primary
  //     },
  //     tooltip: {
  //       show: !0,
  //       content: '%x : %y'
  //     }
  //   });
  // }(),
  // function() {
  //   var data = [], labels = ['A', 'B', 'C', 'D', 'E', 'F'];
  //   for (var i = 0; i < labels.length; i++) {
  //     var val = parseInt(Math.random() * 20);
  //     if (val < 6) val = 6; else if (val > 20) val = 20;
  //     data.push([labels[i], val]);
  //   }
  //   $.plot($('#dash1-flotchart-3'), [ data ], {
  //     series: {
  //       bars: {
  //         show: !0,
  //         barWidth: .12,
  //         align: 'center',
  //         fillColor: $.colors.success
  //       },
  //       highlightColor: $.colors.primary
  //     },
  //     grid: { 
  //       show: !0,
  //       borderWidth: 0,
  //       hoverable: !0,
  //       labelMargin: 24,
  //       color: 'rgba(0,0,0,0)'
  //     },
  //     xaxis: { show: !0, mode: 'categories' },
  //     yaxis: {tickSize: 4},
  //     colors: [$.colors.success],
  //     tooltip: {
  //       show: !0,
  //       cssClass: 'flotTip-with-arrow',
  //       content: '%y',
  //       shifts: {x: -25, y: -50}
  //     }
  //   });
  // }(),
  function () {
    $('.dash1-tasks-peitycharts').peity('pie', {
      fill: [$.colors.success, $.colors.primary],
      width: 20,
      height: 20
    });

    $('.dash1-peity-chart').peity('line', {
      delimiter: ",",
      fill: false,
      height: 16,
      max: null,
      min: 0,
      strokeWidth: 3,
      width: 40
    });

    $('#dash1-easypiechart-1').easyPieChart({
      barColor: $.colors.success,
      scaleLength: false,
      trackColor: '#f7f7f7',
      size: 80
    });
  }();
});