// components/radar/radar.js
import * as echarts from '../common/ec-canvas/echarts';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    data: Array,
    max: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    ec: {}
  },
  lifetimes: {
    attached() {
      this.setData({
        ec: {
          onInit: this.initChart.bind(this)
        }
      });
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    initChart(canvas, width, height, dpr) {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      canvas.setChart(chart);
      const option = this.formatOption();
      chart.setOption(option);
      return chart;
    },
    //  根据props构建图表所需option
    formatOption() {
      const option = {
        title: {
          text: '基础雷达图'
        },
        legend: {
          data: this.properties.data.map(item => item.name)
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: this.properties.max
        },
        series: [
          {
            type: 'radar',
            data: this.properties.data.map(item => {
              item.value = item.value.map(value => value.value)
              return item
            })
          }
        ]
      };
      return option;
    }
  }
})
