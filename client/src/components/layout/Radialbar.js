import React from 'react'
import ReactApexChart from 'react-apexcharts'

const RadialApexChart = ({showLabel, showValue1, showValue2, showValue, maxValue, startColor, endColor}) => {
  const startAngle = showValue / maxValue * 180 - 90 - 25
  const endAngle = showValue / maxValue * 180 - 90 + 25
  const fixedSeries = [0]
  const fixedOptions = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 0,
          size: '70%',
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: '#888',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px'
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: '#111',
            fontSize: '36px',
            show: false,
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ABE5A1'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: [''],
  }
  const series = [100]
  const options = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        startAngle: (startAngle > -90 ? startAngle : -90),
        endAngle: (endAngle < 90 ? endAngle : 90),
        hollow: {
          margin: 0,
          size: '70%',
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: '#888',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -50,
            show: true,
            color: '#888',
            fontSize: '17px'
          },
          value: {
            formatter: function (val) {
              return `${showValue1} - ${showValue2}`
            },
            offsetY: -20,
            color: '#fff',
            fontSize: '32px',
            show: true,
          }
        }
      }
    },
    fill: {
      colors: [startColor],
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [endColor],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      },
    },
    stroke: {
      lineCap: 'round'
    },
    labels: [showLabel],
  }

  return (
    <div id="card">
      <div id="chart">
        <ReactApexChart options={fixedOptions} series={fixedSeries} type="radialBar" height={350} />
        <div style={{ marginTop: '-243px' }}>
          <ReactApexChart options={options} series={series} type="radialBar" height={350} />
        </div>
      </div>
    </div>
  )
}

export default RadialApexChart