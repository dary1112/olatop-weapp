// components/pie/pie.js
import * as echarts from '../common/ec-canvas/echarts';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    data: Array,
  },

  /**
   * 组件的初始数据
   */
  data: {
    ec: {},
  },
  lifetimes: {
    attached() {
      this.setData({
        ec: {
          onInit: this.initChart.bind(this),
        },
      });
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    initChart(canvas, width, height, dpr) {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr,
      });
      canvas.setChart(chart);
      const option = this.formatOption();
      chart.setOption(option);
      return chart;
    },
    //  根据props构建图表所需option
    formatOption() {
      const option = {
        series: [
          {
            type: 'pie',
            data: this.properties.data
          }
        ]
      }
      return option
    }
  }
})
