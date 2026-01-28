export function createHorizBarChart(elementId, data = null) {
  const xArray = data?.x || [55, 49, 44, 24, 15];
  const yArray = data?.y || ["Italy","France","Spain","USA","Argentina"];

  const plotData = [{
    x: xArray,
    y: yArray,
    type: "bar",
    orientation: "h",
    marker: {color: "rgba(255,0,0,0.6)"}
  }];

  const layout = {
    title: data?.title || "World Wide Wine Production (Horizontal)",
    autosize: true,
    margin: { t: 40, r: 20, b: 40, l: 80 }
  };

  const config = {
    responsive: true
  };

  return Plotly.newPlot(elementId, plotData, layout, config);
}