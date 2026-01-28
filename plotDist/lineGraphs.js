export function createLineGraph(elementId, data = null) {
    const xArray = data?.x || [50,60,70,80,90,100,110,120,130,140,150];
    const yArray = data?.y || [7,8,8,9,9,9,10,11,14,14,15];

    // Define Data
    const plotData = [{
        x: xArray,
        y: yArray,
        mode: "lines",
        type: "scatter"
    }];

    // Define Layout
    const layout = {
        xaxis: {range: [40, 160], title: "Square Meters"},
        yaxis: {range: [5, 16], title: "Price in Millions"},
        title: data?.title || "House Prices vs Size",
        autosize: true,
        margin: { t: 40, r: 20, b: 40, l: 40 }
    };

    const config = {
        responsive: true
    };

    // Display using Plotly
    Plotly.newPlot(elementId, plotData, layout, config);
}