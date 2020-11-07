import React, { Component } from 'react';
import { VectorMap } from 'react-jvectormap';

class Map extends Component {
  constructor(props) {
    super(props);
    const colors = ['#1ecab8', '#fd3c97', '#6d81f5', '#ffb822', '#0dc8de'];
    this.state = {
      options: {
        chart: {
          events: {
            click: function (chart, w, e) {
              console.log(chart, w, e);
            },
          },
          toolbar: {
            show: false,
          },
          offsetY: -16,
          offsetX: 0,
        },
        legend: {
          show: false,
        },
        colors: colors,
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top',
            },
            columnWidth: '30',
            distributed: true,
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + '%';
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#8997bd'],
            fontWeight: '400',
          },
        },
        xaxis: {
          categories: ['Email', 'Referral', 'Organic', 'Direct', 'Campaign'],
          position: 'top',
          labels: {
            offsetY: 0,
          },
          tooltip: {
            enabled: true,
            offsetY: -20,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },
      series: [
        {
          name: 'Inflation',
          data: [4, 10.1, 6, 8, 9.1],
        },
      ],
    };
  }
  render() {
    return (
      <VectorMap
        map={'africa_mill'}
        backgroundColor='transparent'
        borderColor='#818181'
        regionStyle={{
          initial: {
            fill: '#7474b126',
          },
        }}
        series={{
          regions: [
            {
              values: {
                'US-VA': '#868ff363',
                'US-PA': '#868ff363',
                'US-TN': '#868ff363',
                'US-WY': '#868ff363',
                'US-WA': '#868ff363',
                'US-TX': '#868ff363',
              },
              attribute: 'fill',
            },
          ],
        }}
        ref='map'
        containerStyle={{
          height: '300px',
        }}
        containerClassName='drop-shadow-map'
      />
    );
  }
}

export default Map;
