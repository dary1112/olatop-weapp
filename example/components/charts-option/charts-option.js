// components/option-view/option-view.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sourceHTML: {
      type: String,
      observer (val) {
        console.log(this.data.editorCtx)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    editorCtx: ''
  },
  attached () {
    this.createSelectorQuery().select('#editor').context(res => {
      res.context.setContents({
        html: this.properties.sourceHTML
      })
    }).exec()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onEditorReady() {
      console.log('ready')
      this.createSelectorQuery().select('#editor').context((res) => {
        this.data.editorCtx = res.context
      }).exec()
    }
  }
})
