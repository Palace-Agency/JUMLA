function getChartColorsArray(r) {
    if (null !== document.getElementById(r)) {
        var t = document.getElementById(r).getAttribute("data-colors");
        if (t)
            return (t = JSON.parse(t)).map(function (r) {
                var t = r.replace(" ", "");
                if (-1 === t.indexOf(",")) {
                    var e = getComputedStyle(
                        document.documentElement
                    ).getPropertyValue(t);
                    return e || t;
                }
                var a = r.split(",");
                return 2 != a.length
                    ? t
                    : "rgba(" +
                          getComputedStyle(
                              document.documentElement
                          ).getPropertyValue(a[0]) +
                          "," +
                          a[1] +
                          ")";
            });
    }
}
// var options1,
//     chart1,
//     BarchartTotalReveueColors = getChartColorsArray("total-revenue-chart");
// BarchartTotalReveueColors &&
//     ((options1 = {
//         series: [{ data: [25, 66, 41, 89, 63, 25, 44, 20, 36, 40, 54] }],
//         fill: { colors: BarchartTotalReveueColors },
//         chart: {
//             type: "bar",
//             width: 70,
//             height: 40,
//             sparkline: { enabled: !0 },
//         },
//         plotOptions: { bar: { columnWidth: "50%" } },
//         labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
//         xaxis: { crosshairs: { width: 1 } },
//         tooltip: {
//             fixed: { enabled: !1 },
//             x: { show: !1 },
//             y: {
//                 title: {
//                     formatter: function (r) {
//                         return "";
//                     },
//                 },
//             },
//             marker: { show: !1 },
//         },
//     }),
//     (chart1 = new ApexCharts(
//         document.querySelector("#total-revenue-chart"),
//         options1
//     )).render());
// var RadialchartOrdersChartColors = getChartColorsArray("orders-chart");
// RadialchartOrdersChartColors &&
//     ((options = {
//         fill: { colors: RadialchartOrdersChartColors },
//         series: [70],
//         chart: {
//             type: "radialBar",
//             width: 45,
//             height: 45,
//             sparkline: { enabled: !0 },
//         },
//         dataLabels: { enabled: !1 },
//         plotOptions: {
//             radialBar: {
//                 hollow: { margin: 0, size: "60%" },
//                 track: { margin: 0 },
//                 dataLabels: { show: !1 },
//             },
//         },
//     }),
//     (chart = new ApexCharts(
//         document.querySelector("#orders-chart"),
//         options
//     )).render());
// var RadialchartCustomersColors = getChartColorsArray("customers-chart");
// RadialchartCustomersColors &&
//     ((options = {
//         fill: { colors: RadialchartCustomersColors },
//         series: [55],
//         chart: {
//             type: "radialBar",
//             width: 45,
//             height: 45,
//             sparkline: { enabled: !0 },
//         },
//         dataLabels: { enabled: !1 },
//         plotOptions: {
//             radialBar: {
//                 hollow: { margin: 0, size: "60%" },
//                 track: { margin: 0 },
//                 dataLabels: { show: !1 },
//             },
//         },
//     }),
//     (chart = new ApexCharts(
//         document.querySelector("#customers-chart"),
//         options
//     )).render());
// var options2,
//     chart2,
//     BarchartGrowthColors = getChartColorsArray("growth-chart");
// BarchartGrowthColors &&
//     ((options2 = {
//         series: [{ data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] }],
//         fill: { colors: BarchartGrowthColors },
//         chart: {
//             type: "bar",
//             width: 70,
//             height: 40,
//             sparkline: { enabled: !0 },
//         },
//         plotOptions: { bar: { columnWidth: "50%" } },
//         labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
//         xaxis: { crosshairs: { width: 1 } },
//         tooltip: {
//             fixed: { enabled: !1 },
//             x: { show: !1 },
//             y: {
//                 title: {
//                     formatter: function (r) {
//                         return "";
//                     },
//                 },
//             },
//             marker: { show: !1 },
//         },
//     }),
//     (chart2 = new ApexCharts(
//         document.querySelector("#growth-chart"),
//         options2
//     )).render());
$(document).ready(function () {
    function fetchPageViews() {
        $.ajax({
            url: "/dashboard/page-views",
            method: "GET",
            success: function (data) {
                const months = Array.from(
                    new Set(
                        Object.values(data).flatMap((page) => Object.keys(page))
                    )
                ).sort();

                const series = Object.keys(data).map((page) => {
                    return {
                        name: page,
                        type: "line",
                        data: months.map((month) => data[page][month] || 0),
                    };
                });

                renderChart(series, months);
            },
            error: function (xhr, status, error) {
                console.error("Error fetching page views:", error);
            },
        });
    }

    function renderChart(series, categories) {
        const options = {
            chart: {
                height: 350,
                type: "line",
                stacked: false,
            },
            stroke: {
                width: [2],
                curve: "smooth",
            },
            series: series,
            xaxis: {
                categories: categories,
                title: { text: "Month" },
            },
            yaxis: {
                title: { text: "Views" },
            },
            tooltip: {
                shared: true,
                intersect: false,
            },
            grid: {
                borderColor: "#f1f1f1",
            },
            colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560"],
        };

        const chart = new ApexCharts(
            document.querySelector("#page-views-chart"),
            options
        );

        chart.render();
    }

    fetchPageViews();

    function fetchActiveUsersData() {
        $.ajax({
            url: "/dashboard/active-users",
            method: "GET",
            success: function (data) {
                const dates = data.map((item) => item.date);
                const activeUsers = data.map((item) => item.active_users);

                renderActiveUsersChart(activeUsers, dates);
            },
            error: function (xhr, status, error) {
                console.error("Error fetching active users data:", error);
            },
        });
    }

    function renderActiveUsersChart(data, categories) {
        const options = {
            chart: {
                height: 350,
                type: "line",
                stacked: false,
            },
            stroke: {
                width: [2],
                curve: "smooth",
            },
            series: [
                {
                    name: "Active Users",
                    type: "line",
                    data: data,
                },
            ],
            xaxis: {
                categories: categories,
                title: { text: "Date" },
            },
            yaxis: {
                title: { text: "Active Users" },
            },
            tooltip: {
                shared: true,
                intersect: false,
            },
            grid: {
                borderColor: "#f1f1f1",
            },
            colors: ["#00E396"],
        };

        const chart = new ApexCharts(
            document.querySelector("#active-users-chart"),
            options
        );

        chart.render();
    }

    fetchActiveUsersData();
    function fetchActiveUsersByCountry() {
        $.ajax({
            url: "/dashboard/active-users-by-country",
            method: "GET",
            success: function (data) {
                const countries = data.map((item) => item.country);
                const activeUsers = data.map((item) => item.active_users);

                renderCountryPieChart(activeUsers, countries);
            },
            error: function (xhr, status, error) {
                console.error("Error fetching active users by country:", error);
            },
        });
    }

    function renderCountryPieChart(data, labels) {
        var PiechartPieColors = getChartColorsArray("pie_chart");

        PiechartPieColors &&
            ((options = {
                chart: {
                    height: 320,
                    type: "pie",
                },
                series: data, // Total active users for each country
                labels: labels, // Country names
                colors: PiechartPieColors,
                legend: {
                    show: true,
                    position: "bottom",
                    horizontalAlign: "center",
                    verticalAlign: "middle",
                    floating: false,
                    fontSize: "14px",
                    offsetX: 0,
                },
                responsive: [
                    {
                        breakpoint: 600,
                        options: {
                            chart: {
                                height: 240,
                            },
                            legend: {
                                show: false,
                            },
                        },
                    },
                ],
            }),
            (chart = new ApexCharts(
                document.querySelector("#pie_chart"), // Chart container
                options
            )).render());
    }

    fetchActiveUsersByCountry();
});
