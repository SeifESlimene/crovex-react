import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Audience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          stacked: true,
          toolbar: {
            show: false,
            autoSelected: 'zoom',
          },
          dropShadow: {
            enabled: true,
            top: 12,
            left: 0,
            bottom: 0,
            right: 0,
            blur: 2,
            color: '#45404a2e',
            opacity: 0.35,
          },
        },
        colors: ['#2a77f4', '#1ccab8', '#f02fc2'],
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: false,
            },
            columnWidth: '30',
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight',
          width: [4, 4],
          dashArray: [0, 3],
        },
        grid: {
          borderColor: '#45404a2e',
          padding: {
            left: 0,
            right: 0,
          },
        },
        markers: {
          size: 0,
          hover: {
            size: 0,
          },
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2019-09-20GMT00:00:00',
            '2019-09-20GMT01:30:00',
            '2019-09-20GMT02:30:00',
            '2019-09-20GMT03:30:00',
            '2019-09-20GMT04:30:00',
            '2019-09-20GMT05:30:00',
            '2019-09-20GMT06:30:00',
            '2019-09-20GMT07:30:00',
            '2019-09-20GMT08:30:00',
            '2019-09-20GMT09:30:00',
            '2019-09-20GMT10:30:00',
            '2019-09-20GMT11:30:00',
          ],
          labels: {
            format: 'HH:00',
          },
          axisBorder: {
            show: true,
            color: '#45404a2e',
          },
          axisTicks: {
            show: true,
            color: '#45404a2e',
          },
        },

        fill: {
          type: 'gradient',
          gradient: {
            gradientToColors: ['#F55555', '#B5AC49', '#6094ea'],
          },
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
        },
      },
      series: [
        {
          name: 'New Visits',
          data: [0, 60, 20, 90, 45, 110, 55, 130, 44, 110, 75, 200],
        },
        {
          name: 'Unique Visits',
          data: [0, 45, 10, 75, 35, 94, 40, 115, 30, 105, 65, 190],
        },
      ],
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type='line'
        height='418'
        className='apex-charts'
      />
    );
  }
}

export default Audience;
