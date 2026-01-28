export function createScatterPlot(elementId, data = null) {
    const xArray = data?.x || [50,60,70,80,90,100,110,120,130,140,150];
    const yArray = data?.y || [7,8,8,9,9,9,10,11,14,14,15];

    const plotData = [{
        x: xArray,
        y: yArray,
        mode: "markers",
        type: "scatter"
    }];

    const layout = {
        xaxis: {range: [40, 160], title: "x-Achse"},
        yaxis: {range: [5, 16], title: "y-Achse"},
        title: data?.title || "No Title",
        autosize: true,
        margin: { t: 40, r: 20, b: 40, l: 40 }
    };

    const config = {
        responsive: true
    };

    return Plotly.newPlot(elementId, plotData, layout, config);

}