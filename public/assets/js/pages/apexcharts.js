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

// Start: TDS Sensor Chart
const fetchTDSSensorData = async (chart) => {
    try {
        const response = await fetch('/api/sensor-data/tds');
        const data = await response.json();

        const tdsSensorData = data
            .filter(item => item.sensor === "tds")
            .map(item => ({
                value: item.value,  
                timestamp: new Date(item.timestamp).toISOString()
            }));

        const dailyAverages = groupDataByDayAndAverage(tdsSensorData);
        const tdsValues = dailyAverages.map(item => item.averageValue);
        const tdsDates = dailyAverages.map(item => item.date);

        chart.updateOptions({
            series: [{ name: "TDS Sensor (Average per Day)", data: tdsValues }],
            xaxis: { categories: tdsDates }
        });
    } catch (error) {
        console.error("Error fetching TDS Sensor data:", error);
    }
};

const createTDSSensorChart = (selector) => {
    const dataColors = $(selector).data("colors");
    const colors = dataColors ? dataColors.split(",") : ["#00acc1"];

    return {
        chart: {
            height: 380, type: "line",
            shadow: { enabled: false, color: "#bbb", top: 3, left: 2, blur: 3, opacity: 1 }
        },
        stroke: { width: 5, curve: "smooth" },
        series: [{ name: "TDS Sensor (Average per Day)", data: [] }],
        xaxis: { type: "datetime", categories: [] },
        title: { text: "TDS Sensor (Average per Day)", align: "left", style: { fontSize: "14px", color: "#666" } },
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
        yaxis: { 
            title: { text: "Total Dissolved Solids (ppm)" },
            labels: {
                formatter: function (value) {
                    return Math.round(value);
                }
            }
        },
        grid: { borderColor: "#185a9d" },
        tooltip: {
            y: {
                formatter: function(value) {
                    return Math.round(value) + " ppm";
                }
            }
        }
    };
};

document.addEventListener("DOMContentLoaded", function () {
    const tdsSensorChart = new ApexCharts(document.querySelector("#apex-line-45"), createTDSSensorChart("#apex-line-45"));
    tdsSensorChart.render();

    fetchTDSSensorData(tdsSensorChart);

    setInterval(() => fetchTDSSensorData(tdsSensorChart), 10000);
});
// End: TDS Sensor Chart


// Start: pH Level Chart (apex-line-100)
const fetchPHSensorData = async (chart) => {
    try {
        const response = await fetch('/api/sensor-data/ph_sensor');
        const data = await response.json();

        const phSensorData = data
            .filter(item => item.sensor === "ph_sensor")
            .map(item => ({
                value: item.value,  
                timestamp: new Date(item.timestamp).toISOString()
            }));

        const dailyAverages = groupDataByDayAndAverage(phSensorData);
        const phValues = dailyAverages.map(item => item.averageValue);
        const phDates = dailyAverages.map(item => item.date);

        chart.updateOptions({
            series: [{ name: "pH Level (Average per Day)", data: phValues }],
            xaxis: { categories: phDates }
        });
    } catch (error) {
        console.error("Error fetching pH Sensor data:", error);
    }
};

const createPHSensorChart = (selector) => {
    const dataColors = $(selector).data("colors");
    const colors = dataColors ? dataColors.split(",") : ["#00acc1"];

    return {
        chart: {
            height: 380, type: "line",
            shadow: { enabled: false, color: "#bbb", top: 3, left: 2, blur: 3, opacity: 1 }
        },
        stroke: { width: 5, curve: "smooth" },
        series: [{ name: "pH Level (Average per Day)", data: [] }],
        xaxis: { type: "datetime", categories: [] },
        title: { text: "pH Level (Average per Day)", align: "left", style: { fontSize: "14px", color: "#666" } },
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
        yaxis: { 
            title: { text: "pH Level" },
            labels: {
                formatter: function (value) {
                    return Math.round(value);  
                }
            }
        },
        grid: { borderColor: "#185a9d" },
        tooltip: {
            y: {
                formatter: function(value) {
                    return Math.round(value) + " pH";
                }
            }
        }
    };
};

document.addEventListener("DOMContentLoaded", function () {
    const phSensorChart = new ApexCharts(document.querySelector("#apex-line-100"), createPHSensorChart("#apex-line-100"));
    phSensorChart.render();

    fetchPHSensorData(phSensorChart);

    setInterval(() => fetchPHSensorData(phSensorChart), 10000);
});
// End: pH Level Chart


// Start: Free Cash Flow Bar Chart

const fetchConsumptionData = async (endpoint) => {
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error(`Error fetching data from ${endpoint}`);
    }
    return response.json();
};

const calculateWeeklyAverages = (data) => {
    const filteredData = data.filter(entry => 
        ['water_pump_consumption', 'misting_consumption', 'shade_net_consumption'].includes(entry.metric_type)
    );

    const weeks = filteredData.reduce((acc, entry) => {
        const week = getWeekFromDate(entry.timestamp);
        if (!acc[week]) acc[week] = {};
        if (!acc[week][entry.metric_type]) acc[week][entry.metric_type] = { total: 0, count: 0 };
        
        acc[week][entry.metric_type].total += parseFloat(entry.metric_value);
        acc[week][entry.metric_type].count += 1;

        return acc;
    }, {});

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

const getWeekFromDate = (dateString) => {
    const date = new Date(dateString);
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

const initChart = async () => {
    const endpoints = [
        '/api/water-pump-consumption',
        '/api/misting-consumption',
        '/api/shade-net-consumption'
    ];

    try {
        const dataPromises = endpoints.map(fetchConsumptionData);
        const results = await Promise.all(dataPromises);
        
        const allData = results.flat();

        const weeklyAverages = calculateWeeklyAverages(allData);

        let weeks = [...new Set(weeklyAverages.map(entry => entry.week))].sort((a, b) => b - a);

        const weekLabels = weeks.map((week, index) => `Week ${index + 1}`).reverse();

        const seriesData = weeklyAverages.reduce((acc, entry) => {
            let metricSeries = acc.find(series => series.name === entry.metric_type);
            if (!metricSeries) {
                metricSeries = { name: entry.metric_type, data: [] };
                acc.push(metricSeries);
            }
            metricSeries.data[weeks.indexOf(entry.week)] = parseFloat(entry.average);
            return acc;
        }, []);

        seriesData.forEach(series => {
            series.data = series.data.reverse();
        });

        const chartOptions = createColumnChart("#apex-column-1", seriesData, weekLabels);
        new ApexCharts(document.querySelector("#apex-column-1"), chartOptions).render();

    } catch (error) {
        console.error('Error initializing chart:', error.message);
    }
};

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
        xaxis: { categories },
        yaxis: { title: { text: "Consumption (units)" } },
        fill: { opacity: 1 },
        grid: { row: { colors: ["transparent"], opacity: 0.2 }, borderColor: "#f1f3fa", padding: { bottom: 10 } },
        tooltip: { y: { formatter: (val) => `${val} units` } },
    };
};

initChart();
// End: Free Cash Flow Bar Chart


// Start: Battery History Chart (apex-line-99)
const fetchBatteryHistoryData = async (chart) => {
    try {
        const response = await fetch('/api/battery-percentage'); // Changed endpoint
        const data = await response.json();

        const batteryHistoryData = data
            .filter(item => item.metric_type === "battery_percentage")  // Changed key to match the new sample
            .map(item => ({
                value: parseFloat(item.metric_value), // Ensure metric_value is parsed to float
                timestamp: new Date(item.timestamp).toISOString()
            }));

        const dailyAverages = groupDataByDayAndAverage(batteryHistoryData);
        const batteryValues = dailyAverages.map(item => item.averageValue);
        const batteryDates = dailyAverages.map(item => item.date);

        chart.updateOptions({
            series: [{ name: "Battery History (Average per Day)", data: batteryValues }],
            xaxis: { categories: batteryDates }
        });
    } catch (error) {
        console.error("Error fetching Battery History data:", error);
    }
};

const createBatteryHistoryChart = (selector) => {
    const dataColors = $(selector).data("colors");
    const colors = dataColors ? dataColors.split(",") : ["#00acc1"];

    return {
        chart: {
            height: 380, type: "line",
            shadow: { enabled: false, color: "#bbb", top: 3, left: 2, blur: 3, opacity: 1 }
        },
        stroke: { width: 5, curve: "smooth" },
        series: [{ name: "Battery History (Average per Day)", data: [] }],
        xaxis: { type: "datetime", categories: [] },
        title: { text: "Battery History (Average per Day)", align: "left", style: { fontSize: "14px", color: "#666" } },
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
        yaxis: { 
            title: { text: "Battery Percentage (%)" },
            labels: {
                formatter: function (value) {
                    return Math.round(value);  
                }
            }
        },
        grid: { borderColor: "#185a9d" },
        tooltip: {
            y: {
                formatter: function(value) {
                    return Math.round(value) + " %";
                }
            }
        }
    };
};

document.addEventListener("DOMContentLoaded", function () {
    const batteryHistoryChart = new ApexCharts(document.querySelector("#apex-line-99"), createBatteryHistoryChart("#apex-line-99"));
    batteryHistoryChart.render();

    fetchBatteryHistoryData(batteryHistoryChart);

    setInterval(() => fetchBatteryHistoryData(batteryHistoryChart), 10000);
});
// End: Battery History Chart

// Start: Battery Percentage Radial Bar Chart

document.addEventListener("DOMContentLoaded", function() {
    function fetchBatteryPercentage(chart) {
        fetch('/api/battery-percentage', {
            headers: { 'Accept': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data) && data.length > 0) {
                const latestEntry = data
                    .filter(item => item.metric_type === "battery_percentage")  // Changed key to match the new sample
                    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];
                const latestValue = parseFloat(latestEntry.metric_value);  // Ensure metric_value is parsed to float
                chart.updateSeries([latestValue]);
            }
        })
        .catch(error => console.error("Error fetching battery percentage data:", error));
    }

    const dataColorsBattery = $("#apex-radialbar-3").data("colors"),
        batteryOptions = {
            chart: { height: 375, type: "radialBar" },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    dataLabels: {
                        name: { fontSize: "16px", offsetY: 120 },
                        value: {
                            offsetY: 76,
                            fontSize: "22px",
                            formatter: function(e) { return e + "%"; }
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
            stroke: { dashArray: 4 },
            colors: dataColorsBattery ? dataColorsBattery.split(",") : ["#f1556c"],
            series: [0],
            labels: ["Battery Percentage"],
            responsive: [{ breakpoint: 380, options: { chart: { height: 280 } } }]
        };

    const batteryChart = new ApexCharts(document.querySelector("#apex-radialbar-3"), batteryOptions);
    batteryChart.render();

    fetchBatteryPercentage(batteryChart);
    setInterval(() => fetchBatteryPercentage(batteryChart), 10000);
});
// End: Battery Percentage Radial Bar Chart



// Start: Mixed Chart for Harvested Power and System Power Consumption

const fetchData = async (endpoint) => {
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error(`Error fetching data from ${endpoint}`);
    }
    return response.json();
};

const mapApiData = (data) => {
    return data.map(entry => ({
        x: new Date(entry.timestamp).getTime(),
        y: parseFloat(entry.metric_value)
    }));
};

const initMixedChart = async () => {
    try {
        const harvestedPowerData = await fetchData('/api/harvested-power');
        const systemPowerConsumptionData = await fetchData('/api/system-power-consumption');

        const harvestedPowerSeries = mapApiData(harvestedPowerData);
        const systemPowerConsumptionSeries = mapApiData(systemPowerConsumptionData);

        const seriesData = [
            { name: "Harvested Power", type: "area", data: harvestedPowerSeries },
            { name: "System Power Consumption", type: "line", data: systemPowerConsumptionSeries }
        ];

        new ApexCharts(document.querySelector("#apex-mixed-2"), createMixedChart("#apex-mixed-2", seriesData)).render();
    } catch (error) {
        console.error("Error initializing mixed chart:", error.message);
    }
};

const createMixedChart = (selector, seriesData) => {
    const dataColors = $(selector).data("colors");
    const colors = dataColors ? dataColors.split(",") : ["#00acc1", "#f672a7"];

    return {
        chart: { height: 380, type: "line", stacked: false, toolbar: { show: false } },
        stroke: { width: [2, 4], curve: "smooth" },
        plotOptions: { bar: { columnWidth: "50%" } },
        colors,
        series: seriesData,
        fill: {
            opacity: [.25, 1], gradient: {
                inverseColors: false, shade: "light", type: "vertical",
                opacityFrom: 0.85, opacityTo: 0.55, stops: [0, 100, 100, 100]
            }
        },
        labels: seriesData[0]?.data.map(entry => new Date(entry.x).toISOString().slice(0, 10)) || [],
        markers: { size: 0 },
        legend: { offsetY: 7 },
        xaxis: { type: "datetime" },
        yaxis: {
            title: { text: "Watts" },
            min: 0,
            tickAmount: 5,
            max: Math.max(...seriesData.flatMap(s => s.data.map(point => point.y))) + 50
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: { formatter: (y) => typeof y !== "undefined" ? `${y.toFixed(2)} Watts` : y }
        },
        grid: { borderColor: "#f1f3fa" }
    };
};

initMixedChart();
// End: Mixed Chart for Harvested Power and System Power Consumption
