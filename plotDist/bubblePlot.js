export function createBubblePlot(elementId, data = null) {
  const xArray = data?.x || [1,2,3,4];
  const yArray = data?.y || [10,20,30,40];

  const trace1 = {
    x: xArray,
    y: yArray,
    mode: 'markers',
    marker: {
        color: ['red', 'green', 'blue', 'orange'],
        size: [20, 30, 40, 50]
    }
  };

  const trace2 = {
    x: [1, 2, 3, 4],
    y: [15, 30, 45, 60],
    mode: 'markers',
    marker: {
        color: 'rgb(31, 119, 180)',
        size: 18,
        symbol: ['circle', 'square', 'diamond', 'cross']
    },
  };

  const plotData = [trace1, trace2];

  const layout = {
    title: "Plotting Bubbles",
    autosize: true,
    margin: { t: 40, r: 20, b: 40, l: 40 }
  };

  const config = {
    responsive: true
  };

  return Plotly.newPlot(elementId, plotData, layout, config);
}