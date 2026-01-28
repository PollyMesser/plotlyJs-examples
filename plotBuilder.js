import { createBarChart } from './plotDist/barChart.js';
import { createHorizBarChart } from './plotDist/horiz_barChart.js';
import { createPieChart } from './plotDist/pieChart.js';
import { createEquationChart } from './plotDist/equationPlot.js';
import { createScatterPlot } from './plotDist/scatterPlot.js';
import { createLineGraph } from './plotDist/lineGraphs.js';
import { createBubblePlot } from './plotDist/bubblePlot.js';
import { createMultipleLinePlot } from './plotDist/multipleLines.js';

const plotBuilder = {
  plots: {
    'vertical-bar': createBarChart,
    'horizontal-bar': createHorizBarChart,
    'pie-chart': createPieChart,
    'equation-chart': createEquationChart,
    'scatterPlot': createScatterPlot,
    'lineGraph': createLineGraph,
    'bubblePlot': createBubblePlot,
    'multipleLinePlot': createMultipleLinePlot
  },

  renderPlots: function(plotConfigs) {
    const contentDiv = document.querySelector('.content');
    
    /* Entferne alte Plots
    const oldContainers = contentDiv.querySelectorAll('.plot-container');
    oldContainers.forEach(container => container.remove()); */

    // Erstelle neue Plots
    plotConfigs.forEach((config, index) => {
      if (this.plots[config.type]) {
        const plotId = `plot-${index}`;
        
        // Erstelle Container
        const container = document.createElement('div');
        container.className = 'plot-container';
        
        const plotDiv = document.createElement('div');
        plotDiv.id = plotId;
        
        container.appendChild(plotDiv);
        
        // Füge vor dem <p> ein
        const paragraph = contentDiv.querySelector('p');
        contentDiv.insertBefore(container, paragraph);
        
        // Rendere Plot mit optionalen Daten
        this.plots[config.type](plotId, config.data);
      }
    });
  }
};

// Initial-Rendering
document.addEventListener('DOMContentLoaded', function() {
  plotBuilder.renderPlots([
    { type: 'vertical-bar' },
    { type: 'horizontal-bar' },
    { type: 'pie-chart'},
    { type: 'equation-chart'},
    { type: 'scatterPlot'},
    { type: 'lineGraph'},
    { type: 'bubblePlot'},
    { type: 'multipleLinePlot'}
  ]);
});

// Exportiere für externe Nutzung
export default plotBuilder;