export function createBarChart(elementId, data = null) {
  const xArray = data?.x || ["Italy","France","Spain","USA","Argentina"];
  const yArray = data?.y || [55, 49, 44, 24, 15];

  const plotData = [{
    x: xArray,
    y: yArray,
    type: "bar",
    orientation: "v",
    marker: {color: "rgba(0,0,255,0.6)"}
  }];

  const layout = {
    title: data?.title || "World Wide Wine Production",
    autosize: true,
    margin: { t: 40, r: 20, b: 40, l: 40 }
  };

  const config = {
    responsive: true
  };

  return Plotly.newPlot(elementId, plotData, layout, config);
}