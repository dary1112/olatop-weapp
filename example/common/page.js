export default function(options = {}) {
  return Page({
    onShareAppMessage() {
      return {
        title: 'olatop-weapp 组件库演示'
      };
    },
    ...options
  });
}
