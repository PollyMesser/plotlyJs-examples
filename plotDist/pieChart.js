export function createPieChart(elementId, data = null, ) {
    const xArray = data?.x || ["Andy", "Claudia", "Janusch", "Cosima", "Juna"];
    const yArray = data?.y || [45, 44, 20, 18, 16];

    const plotData = [{
        labels: xArray,
        values: yArray,
        type: "pie"
    }];

    const layout = {
        title: data?.title || "Pie Chart",
        autosize: true,
        margin: { t: 40, r: 20, b: 40, l: 40 }
    }

    const config = {
        responsive: true
    };

    return Plotly.newPlot(elementId, plotData, layout, config);
}