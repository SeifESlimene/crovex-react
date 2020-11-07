import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          parentHeightOffset: 50,
          dropShadow: {
            enabled: true,
            top: 10,
            left: 0,
            bottom: 0,
            right: 0,
            blur: 2,
            color: '#45404a2e',
            opacity: 0.15,
          },
        },
        plotOptions: {
          pie: {
            donut: {
              size: '65%',
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent'],
        },

        legend: {
          show: true,
          position: 'bottom',
          horizontalAlign: 'center',
          verticalAlign: 'middle',
          floating: false,
          fontSize: '14px',
          offsetX: 0,
          offsetY: 10,
        },
        labels: ['Tablet', 'Desktop', 'Mobile'],
        colors: ['#34bfa3', '#5d78ff', '#fd3c97'],

        responsive: [
          {
            breakpoint: 600,
            options: {
              plotOptions: {
                donut: {
                  customScale: 0.2,
                },
              },
              chart: {
                height: 240,
              },
              legend: {
                show: false,
              },
            },
          },
        ],

        tooltip: {
          y: {
            formatter: function (val) {
              return val + ' %';
            },
          },
        },
      },
      series: [10, 65, 25],
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type='donut'
        className='apex-charts'
        height='350'
      />
    );
  }
}

export default Session;
