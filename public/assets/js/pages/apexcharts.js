// Start: Flux Sensor Chart
Apex.grid = { padding: { right: 0, left: 0 } };
Apex.dataLabels = { enabled: false };

const calculateAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

const groupDataByDayAndAverage = (data) => {
    const groupedData = {};

    data.forEach(item => {
        const date = item.timestamp.split('T')[0];
        if (!groupedData[date]) {
            groupedData[date] = [];
        }
        groupedData[date].push(item.value);
    });

    return Object.keys(groupedData).map(date => ({
        date,
        averageValue: calculateAverage(groupedData[date])
    }));
};

const fetchFluxSensorData = async (chart) => {
    try {
        const response = await fetch('/api/sensor-data/light_sensor');
        const data = await response.json();

        const fluxSensorData = data
            .filter(item => item.sensor === "light_sensor")
            .map(item => ({
                value: item.value,
                timestamp: new Date(item.timestamp).toISOString()
            }));

        const dailyAverages = groupDataByDayAndAverage(fluxSensorData);

        const fluxValues = dailyAverages.map(item => item.averageValue);
        const fluxDates = dailyAverages.map(item => item.date);

        chart.updateOptions({
            series: [{ name: "Flux Sensor (Average per Day)", data: fluxValues }],
            xaxis: { categories: fluxDates }
        });
    } catch (error) {
        console.error("Error fetching Flux Sensor data:", error);
    }
};

const createFluxSensorChart = (selector) => {
    const dataColors = $(selector).data("colors");
    const colors = dataColors ? dataColors.split(",") : ["#00acc1"];

    return {
        chart: {
            height: 380, type: "line",
            shadow: { enabled: false, color: "#bbb", top: 3, left: 2, blur: 3, opacity: 1 }
        },
        stroke: { width: 5, curve: "smooth" },
        series: [{ name: "Flux Sensor (Average per Day)", data: [] }],
        xaxis: { type: "datetime", categories: [] },
        title: { text: "Flux Sensor (Average per Day)", align: "left", style: { fontSize: "14px", color: "#666" } },
        fill: {
            type: "gradient", gradient: {
                shade: "dark", gradientToColors: colors, shadeIntensity: 1,
                opacityFrom: 1, opacityTo: 1, stops: [0, 100]
            }
        },
        markers: {
            size: 4, opacity: 0.9, colors: ["#56c2d6"], strokeColor: "#fff",
            strokeWidth: 2, style: "inverted", hover: { size: 7 }
        },
        yaxis: { title: { text: "Lumens (lm)" } },
        grid: { borderColor: "#185a9d" },
    };
};

document.addEventListener("DOMContentLoaded", function () {
    const fluxSensorChart = new ApexCharts(document.querySelector("#apex-line-2"), createFluxSensorChart("#apex-line-2"));
    fluxSensorChart.render();

    fetchFluxSensorData(fluxSensorChart);

    setInterval(() => fetchFluxSensorData(fluxSensorChart), 10000);
});
// End: Flux Sensor Chart

const generateDayWiseTimeSeries = (baseval, count, yrange) => {
    return Array.from({ length: count }, (_, i) => [baseval + (i * 86400000), Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min]);
};

// Start: South, North, Central Area Chart
const createAreaChart = (selector) => {
    const dataColors = $(selector).data("colors");
    const colors = dataColors ? dataColors.split(",") : ["#00acc1", "#f7b84b", "#CED4DC"];

    return {
        chart: { height: 380, type: "area", stacked: true },
        colors,
        dataLabels: { enabled: false },
        stroke: { width: [2], curve: "smooth" },
        series: [
            { name: "South", data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, { min: 10, max: 60 }) },
            { name: "North", data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, { min: 10, max: 20 }) },

        ],
        fill: { type: "gradient", gradient: { opacityFrom: 0.6, opacityTo: 0.8 } },
        legend: { position: "top", horizontalAlign: "left" },
        xaxis: { type: "datetime" },
    };
};
new ApexCharts(document.querySelector("#apex-area"), createAreaChart("#apex-area")).render();
// End: South, North, Central Area Chart

// Start: Free Cash Flow Bar Chart// Function to fetch consumption data from API endpoints
const fetchConsumptionData = async (endpoint) => {
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error(`Error fetching data from ${endpoint}`);
    }
    return response.json();
};

// Function to group data by weeks and calculate weekly averages
const calculateWeeklyAverages = (data) => {
    // Group data by week
    const weeks = data.reduce((acc, entry) => {
        const week = getWeekFromDate(entry.date); // Assuming 'entry.date' exists in the format YYYY-MM-DD
        if (!acc[week]) acc[week] = {};
        if (!acc[week][entry.metric_type]) acc[week][entry.metric_type] = { total: 0, count: 0 };
        
        acc[week][entry.metric_type].total += parseFloat(entry.metric_value);
        acc[week][entry.metric_type].count += 1;

        return acc;
    }, {});

    // Calculate weekly averages for each metric type
    const weeklyAverages = Object.keys(weeks).map(week => {
        const metrics = Object.keys(weeks[week]).map(metric_type => ({
            metric_type,
            week,
            average: (weeks[week][metric_type].total / weeks[week][metric_type].count).toFixed(2)
        }));
        return metrics;
    }).flat();

    return weeklyAverages;
};

// Helper function to get the week number from a date
const getWeekFromDate = (dateString) => {
    const date = new Date(dateString);
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

// Main function to initialize the chart
const initChart = async () => {
    const endpoints = [
        '/api/harvested-power',
        '/api/system-power-consumption',
        '/api/water-pump-consumption',
        '/api/misting-consumption',
        '/api/shade-net-consumption'
    ];

    try {
        // Fetch data from all endpoints
        const dataPromises = endpoints.map(fetchConsumptionData);
        const results = await Promise.all(dataPromises);
        
        // Flatten the array of results
        const allData = results.flat();

        // Calculate weekly averages
        const weeklyAverages = calculateWeeklyAverages(allData);

        // Prepare data for the chart
        const weeks = [...new Set(weeklyAverages.map(entry => entry.week))].sort(); // Unique weeks sorted
        const seriesData = weeklyAverages.reduce((acc, entry) => {
            let metricSeries = acc.find(series => series.name === entry.metric_type);
            if (!metricSeries) {
                metricSeries = { name: entry.metric_type, data: [] };
                acc.push(metricSeries);
            }
            metricSeries.data[weeks.indexOf(entry.week)] = parseFloat(entry.average);
            return acc;
        }, []);

        // Fill missing data points with 0
        seriesData.forEach(series => {
            series.data = series.data.map(val => val || 0);
        });

        // Create and render the chart
        const chartOptions = createColumnChart("#apex-column-1", seriesData, weeks);
        new ApexCharts(document.querySelector("#apex-column-1"), chartOptions).render();

    } catch (error) {
        console.error('Error initializing chart:', error.message);
    }
};

// Update the createColumnChart function to accept chart data and weeks
const createColumnChart = (selector, seriesData, categories) => {
    const dataColors = $(selector).data("colors");
    const colors = dataColors ? dataColors.split(",") : ["#00acc1", "#f672a7", "#1abc9c"];

    return {
        chart: { height: 380, type: "bar", toolbar: { show: false } },
        plotOptions: { bar: { horizontal: false, endingShape: "rounded", columnWidth: "55%" } },
        dataLabels: { enabled: false },
        stroke: { show: true, width: 2, colors: ["transparent"] },
        colors,
        series: seriesData,
        xaxis: { categories }, // Dynamic categories (weeks)
        yaxis: { title: { text: "$ (thousands)" } },
        fill: { opacity: 1 },
        grid: { row: { colors: ["transparent"], opacity: 0.2 }, borderColor: "#f1f3fa", padding: { bottom: 10 } },
        tooltip: { y: { formatter: (val) => `$ ${val} thousands` } },
    };
};

// Initialize the chart on page load
initChart();

// End: Free Cash Flow Bar Chart

// Start: Team A, B, C Mixed Chart
const createMixedChart = (selector) => {
    const dataColors = $(selector).data("colors");
    const colors = dataColors ? dataColors.split(",") : ["#00acc1", "#f672a7", "#1abc9c"];

    return {
        chart: { height: 380, type: "line", stacked: false, toolbar: { show: false } },
        stroke: { width: [0, 2, 4], curve: "smooth" },
        plotOptions: { bar: { columnWidth: "50%" } },
        colors,
        series: [
            { name: "Team A", type: "column", data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30] },
            { name: "Team B", type: "area", data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43] },
            { name: "Team C", type: "line", data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39] }
        ],
        fill: {
            opacity: [.85, .25, 1], gradient: {
                inverseColors: false, shade: "light", type: "vertical",
                opacityFrom: 0.85, opacityTo: 0.55, stops: [0, 100, 100, 100]
            }
        },
        labels: ["01/01/2003", "02/01/2003", "03/01/2003", "04/01/2003", "05/01/2003", "06/01/2003", "07/01/2003", "08/01/2003", "09/01/2003", "10/01/2003", "11/01/2003"],
        markers: { size: 0 },
        legend: { offsetY: 7 },
        xaxis: { type: "datetime" },
        yaxis: {
            title: { text: "Points" }, min: 0,
            tickAmount: 5, max: 100
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (y) => typeof y !== "undefined" ? `${y.toFixed(0)} points` : y
            }
        },
        grid: { borderColor: "#f1f3fa" }
    };
};
new ApexCharts(document.querySelector("#apex-mixed-2"), createMixedChart("#apex-mixed-2")).render();
// End: Team A, B, C Mixed Chart


// Battery Percentage Radial Bar Chart
document.addEventListener("DOMContentLoaded", function() {
    function fetchBatteryPercentage(chart) {
        fetch('/api/battery-percentage', {
                headers: {
                    'Accept': 'application/json',
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log("API Response for battery percentage:", data);

                if (Array.isArray(data) && data.length > 0) {
                    const latestEntry = data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];
                    const latestValue = parseFloat(latestEntry.metric_value);

               
                    chart.updateSeries([latestValue]);
                }
            })
            .catch(error => {
                console.error("Error fetching battery percentage data:", error);
            });
    }

    var dataColorsBattery = $("#apex-radialbar-3").data("colors"),
        batteryOptions = {
            chart: {
                height: 375,
                type: "radialBar"
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    dataLabels: {
                        name: {
                            fontSize: "16px",
                            offsetY: 120
                        },
                        value: {
                            offsetY: 76,
                            fontSize: "22px",
                            formatter: function(e) {
                                return e + "%";
                            }
                        }
                    }
                }
            },
            fill: {
                gradient: {
                    enabled: true,
                    shade: "dark",
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                }
            },
            stroke: {
                dashArray: 4
            },
            colors: dataColorsBattery ? dataColorsBattery.split(",") : ["#f1556c"],
            series: [0],
            labels: ["Battery Percentage"],
            responsive: [{
                breakpoint: 380,
                options: {
                    chart: {
                        height: 280
                    }
                }
            }]
        };

    const batteryChart = new ApexCharts(document.querySelector("#apex-radialbar-3"), batteryOptions);
    batteryChart.render();

    fetchBatteryPercentage(batteryChart);

    setInterval(() => fetchBatteryPercentage(batteryChart), 10000); 
});

// BATTERY CHART END