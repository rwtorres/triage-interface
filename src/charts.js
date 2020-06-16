/*
 *  Triage interface built with Javascript
 *  Copyright (C) 2020  Cláudio Ricardo Torres W. F.
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

// Representa graficamente temperaturas em Celsius.
function createTemperatureChart(container, chartTitle) {
  const canvasContainer = document.createElement("div");
  const canvas = document.createElement("canvas");

  Chart.defaults.global.defaultFontColor = "black";
  const myChart = new Chart(canvas, {
      type: 'bar',
      data: {
          labels: ['Paciente 1', 'Paciente 2', 'Paciente 3', 'Paciente 4',
                   'Paciente 5', 'Paciente 6'],
          datasets: [
            {
              label: 'Normal',
              data: [37, 36.5, 0, 36, 0, 0],
              backgroundColor: 'rgba(54, 162, 235, 0.4)',
              hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
              borderColor: "black",
              borderWidth: 1,
              hoverBorderWidth: 1.5
            },
            {
              label: 'Alta',
              data: [0, 0, 38, 0, 40, 39],
              backgroundColor: "rgba(255, 80, 80, 0.4)",
              hoverBackgroundColor: "rgba(255, 80, 80, 0.8)",
              borderColor: "black",
              borderWidth: 1
            }
          ]
      },
      options: {
        title:{
          //fontColor: "black",
          display: true,
          text: chartTitle,
          fontSize: 25
        },
        legend: {
          display: true,
          position: "right"
        },
          scales: {
              yAxes: [{
                  ticks: {
                    min: 30,
                    suggestedMax: 40,
                    maxTicksLimit: 6
                  }
              }],
              xAxes: [{
                  ticks: {
                      beginAtZero: true
                  },
                  stacked: true
              }]
          }
      }
  });

  canvasContainer.appendChild(canvas);
//  canvasContainer.style.border = "solid black 1px";
  container.appendChild(canvasContainer);
}

// Representa graficamente a pressão sistólica em mm Hg.
function createPressureChart(container, chartTitle) {
  const canvasContainer = document.createElement("div");
  const canvas = document.createElement("canvas");

  Chart.defaults.global.defaultFontColor = "black";
  const myChart = new Chart(canvas, {
      type: 'bar',
      data: {
          labels: ['Paciente 1', 'Paciente 2', 'Paciente 3', 'Paciente 4',
                   'Paciente 5', 'Paciente 6'],
          datasets: [
            {
              label: 'Normal',
              data: [110, 103, 97, 86, 0, 0],
              backgroundColor: 'rgba(54, 162, 235, 0.4)',
              hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
              borderColor: "black",
              borderWidth: 1,
              hoverBorderWidth: 1.5
            },
            {
              label: 'Alta',
              data: [0, 0, 0, 0, 126, 138],
              backgroundColor: "rgba(255, 80, 80, 0.4)",
              hoverBackgroundColor: "rgba(255, 80, 80, 0.8)",
              borderColor: "black",
              borderWidth: 1
            },
          ]
      },
      options: {
        title:{
          display: true,
          text: chartTitle,
          fontSize: 25
        },
        legend: {
          display: true,
          position: "right"
        },
          scales: {
              yAxes: [{
                  ticks: {
                    min: 60,
                    suggestedMax: 150,
                    maxTicksLimit: 6
                  }
              }],
              xAxes: [{
                  ticks: {
                      beginAtZero: true
                  },
                  stacked: true
              }]
          }
      }
  });

  canvasContainer.appendChild(canvas);
//  canvasContainer.style.border = "solid black 1px";
  container.appendChild(canvasContainer);
}

// Representa graficamente a saturação de oxigênio em porcentagem.
function createOxigenationChart(container, chartTitle) {
  const canvasContainer = document.createElement("div");
  const canvas = document.createElement("canvas");

  Chart.defaults.global.defaultFontColor = "black";
  const myChart = new Chart(canvas, {
      type: 'bar',
      data: {
          labels: ['Paciente 1', 'Paciente 2', 'Paciente 3', 'Paciente 4',
                   'Paciente 5', 'Paciente 6'],
          datasets: [
            {
              label: 'Normal',
              data: [96, 100, 0, 97, 95, 0],
              backgroundColor: 'rgba(54, 162, 235, 0.4)',
              hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
              borderColor: "black",
              borderWidth: 1,
              hoverBorderWidth: 1.5
            },
            {
              label: 'Baixa',
              data: [0, 0, 84, 0, 0, 83],
              backgroundColor: "rgba(255, 80, 80, 0.4)",
              hoverBackgroundColor: "rgba(255, 80, 80, 0.8)",
              borderColor: "black",
              borderWidth: 1
            }
          ]
      },
      options: {
        title:{
          //fontColor: "black",
          display: true,
          text: chartTitle,
          fontSize: 25
        },
        legend: {
          display: true,
          position: "right"
        },
          scales: {
              yAxes: [{
                  ticks: {
                    min: 50,
                    max: 100,
                    maxTicksLimit: 6
                  }
              }],
              xAxes: [{
                  ticks: {
                      beginAtZero: true
                  },
                  stacked: true
              }]
          }
      }
  });

  canvasContainer.appendChild(canvas);
//  canvasContainer.style.border = "solid black 1px";
  container.appendChild(canvasContainer);
}

// Representa graficamente a frequência cardíaca em bpm.
function createHeartRateChart(container, chartTitle) {
  const canvasContainer = document.createElement("div");
  const canvas = document.createElement("canvas");

  Chart.defaults.global.defaultFontColor = "black";
  const myChart = new Chart(canvas, {
      type: 'bar',
      data: {
          labels: ['Paciente 1', 'Paciente 2', 'Paciente 3', 'Paciente 4',
                   'Paciente 5', 'Paciente 6'],
          datasets: [
            {
              label: 'Normal',
              data: [80, 76, 0, 67, 96, 0],
              backgroundColor: 'rgba(54, 162, 235, 0.4)',
              hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
              borderColor: "black",
              borderWidth: 1,
              hoverBorderWidth: 1.5
            },
            {
              label: 'Alta', // Taquicardia
              data: [0, 0, 127, 0, 0, 126],
              backgroundColor: "rgba(255, 80, 80, 0.4)",
              hoverBackgroundColor: "rgba(255, 80, 80, 0.8)",
              borderColor: "black",
              borderWidth: 1
            }
          ]
      },
      options: {
        title:{
          display: true,
          text: chartTitle,
          fontSize: 25
        },
        legend: {
          display: true,
          position: "right"
        },
          scales: {
              yAxes: [{
                  ticks: {
                    min: 60,
                    suggestedMax: 150,
                    maxTicksLimit: 6
                  }
              }],
              xAxes: [{
                  ticks: {
                      beginAtZero: true
                  },
                  stacked: true
              }]
          }
      }
  });

  canvasContainer.appendChild(canvas);
//  canvasContainer.style.border = "solid black 1px";
  container.appendChild(canvasContainer);
}

export {createTemperatureChart, createPressureChart, createOxigenationChart,
        createHeartRateChart};
