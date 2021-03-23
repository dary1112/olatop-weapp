// components/barline/barline.js
import * as echarts from "../common/ec-canvas/echarts";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    color: Array,
    xAxis: Array,
    series: Array,
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
      const option = this.formatOption()
      chart.setOption(option);
      return chart;
    },
    //  根据props构建图表所需option
    formatOption() {
      const option = {
        title: {
          text: this.properties.title,
          left: "center",
        },
        color: this.properties.color,
        legend: {
          data: this.properties.series.map((item) => item.name),
          bottom: 20,
          z: 100,
        },
        grid: {
          containLabel: true,
        },
        tooltip: {
          show: true,
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.properties.xAxis,
        },
        yAxis: {
          x: "center",
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
        },
        series: this.properties.series,
      };;
      return option;
    },
  },
});
