export function createEquationChart(elementId, data = null) {
    let exp = "Math.sin(x)";

    // Werte generieren
    const xValues = [];
    const yValues = [];
    for (let x = 0; x <= 10; x+=0.1) {
        xValues.push(x);
        yValues.push(eval(exp));
    }

    const plotData = [{
        x:xValues, 
        y:yValues, 
        mode: "lines" // alternativ mode: "markers"
    }];
    const layout = {title: "y = " + exp};

    const config = {
        responsive: true
    };

    return Plotly.newPlot(elementId, plotData, layout, config);
}