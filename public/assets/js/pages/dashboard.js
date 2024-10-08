$(function() {
    "use strict";
    $("#morris-bar-example").length && Morris.Bar({
        element: "morris-bar-example",
        barColors: ["#ebeef1", "#00c2b2"],
        data: [{
            y: "Sun",
            a: 80,
            b: 100
        },{
            y: "Mon",
            a: 80,
            b: 100
        }, {
            y: "Tue",
            a: 110,
            b: 130
        }, {
            y: "Wed",
            a: 90,
            b: 110
        }, {
            y: "Thu",
            a: 80,
            b: 100
        }, {
            y: "Fri",
            a: 110,
            b: 130
        }, {
            y: "Sat",
            a: 90,
            b: 110
        }],
        xkey: "y",
        ykeys: ["a", "b"],
        hideHover: "auto",
        gridLineColor: "#eef0f2",
        resize: !0,
        barSizeRatio: .4,
        labels: ["iPhone 8", "Samsung Gallexy"]
    }), $("#morris-donut-example").length && Morris.Donut({
        element: "morris-donut-example",
        resize: !0,
        colors: ["#7266bb", "#1d84c6", "#f85359"],
        data: [{
            label: "Samsung Company",
            value: 12
        }, {
            label: "Apple Company",
            value: 30
        }, {
            label: "Vivo Mobiles",
            value: 20
        }]
    }), $(document).ready(function() {
        function a() {
            $("#sparkline1").sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {
                type: "line",
                width: "100%",
                height: "297",
                chartRangeMax: 35,
                lineColor: "#1991eb",
                fillColor: "rgba(25,118,210,0.18)",
                highlightLineColor: "rgba(0,0,0,.1)",
                highlightSpotColor: "rgba(0,0,0,.2)",
                maxSpotColor: !1,
                minSpotColor: !1,
                spotColor: !1,
                lineWidth: 1
            })
        }
        var o;
        a(), $(window).resize(function(e) {
            clearTimeout(o), o = setTimeout(function() {
                a()
            }, 300)
        })
    }), $("#morris-line-example").length && Morris.Line({
        element: "morris-line-example",
        gridLineColor: "#eef0f2",
        lineColors: ["#f15050", "#e9ecef"],
        data: [{
            y: "2013",
            a: 80,
            b: 100
        }, {
            y: "2014",
            a: 110,
            b: 130
        }, {
            y: "2015",
            a: 90,
            b: 110
        }, {
            y: "2016",
            a: 120,
            b: 140
        }, {
            y: "2017",
            a: 110,
            b: 125
        }, {
            y: "2018",
            a: 170,
            b: 190
        }, {
            y: "2019",
            a: 120,
            b: 140
        }],
        xkey: "y",
        ykeys: ["a", "b"],
        hideHover: "auto",
        resize: !0,
        labels: ["Series A", "Series B"]
    })
});