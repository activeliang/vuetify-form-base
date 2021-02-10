<template>
  <v-container fluid>
    <h4>Add or Select Item from List (Array in Value) with Result '.model' in Schema and Event </h4>
    <v-form-base
      id="form-base-list"
      :model="myModel"
      :schema="mySchema"
      @change:form-base-list="log"
    >
    <template v-slot:kkkkkkkkt="{ obj }">
      <div>---------------> : {{ obj }}</div>
    </template>
     <!-- Label Slot -->
      <template #slot-label-key-listString="{obj}">
        <v-toolbar dark color="red lighten-2" >
          <v-toolbar-title>{{ obj.schema.label }} (SLOT)</v-toolbar-title>
        </v-toolbar>
      </template>
    </v-form-base>

    <!-- Stuff  -->
    <infoline :model="myModel" :schema="mySchema"/>

  </v-container>
</template>

<script>
import VFormBase from '@/components/vFormBase'
import Infoline from '@/components/infoline'
import change from '@/lib'

export default {
  name: 'Lists',
  components: { VFormBase, Infoline },
  data () {
    return {
      audio: {
        model: {
          type: 3,
          src: null,
          src_volume: null,
          src_title: null
        },
        schema: {
          src: {
            type: "file",
            label: "音频文件(mp3)",
            showSize: true,
            accept: "audio/mp3",
            col: 6,
            clearable: true,
            customSlotKey: 'course-audio-src'
          },
          src_volume: {
            type: 'number',
            hidden: true
          },
          src_title: {
            type: 'text',
            hidden: true
          }
        }
      },
      myModel: {
        type: 5,
        description: "判断题，Please choose the correct answer...",
        material: [],
        answer: []
      },
      mySchema: {
        material: {
          type: 'group',
          class: 'border-4 mt-3 rounded p-2 flex',
          style: 'border-color: #00BCD4;',
          col: 12,
          schema: []
        },
        addTureOrFalseImageListItem: { type: 'btn', iconLeft: 'mdi-plus', label:'图片', dark: true, small: true, rounded: true, class:'mb-2', color: 'blue lighten-2', class: 'mt-3' },
        addTureOrFalseAudioItem: { type: 'btn', iconLeft: 'mdi-plus', label:'音频', dark: true, small: true, rounded: true, class:'mb-2', color: 'blue lighten-2', class: 'mt-3' },
        addTureOrFalseTextItem: { type: 'btn', iconLeft: 'mdi-plus', label:'文字', dark: true, small: true, rounded: true, class:'mb-2', color: 'blue lighten-2', class: 'mt-3' },
        addTureOrFalseAnswer: { type: 'btn', iconLeft: 'mdi-plus', label:'答案选项', dark: true, small: true, rounded: true, class:'mb-2', color: 'blue lighten-2', class: 'mt-3' }
      },
      imgItem: {
        model: {
          list: [{
            src: null
          }]
        },
        schema: {
          type: 'group',
          schema: {
            list: [{
              src: {
                type: 'file',
                label: "图片文件",
                showSize: true,
                accept: "image/*",
                class: 'w-full',
                col: 11,
                clearable: true,
                customSlotKey: 'kkkkkkkkt'
              },
              removeImageListItem: { type: 'btn', col: 1, iconLeft: 'mdi-minus', label:'移除', dark: true, small: true, rounded: true, class:'mb-2', color: 'error lighten-2', class: 'mt-3' },
            }],
            addImageListItem: { type: 'btn', iconLeft: 'mdi-plus', label:'添加', dark: true, small: true, rounded: true, class:'mb-2', color: 'blue lighten-2', class: 'mt-3' }
          }
        }
      }
    }
  },
  methods: {

    log(val, idx) {
      let { on, id, index, key, value, obj, data } = val
      console.log('log: ', val)

      if (key == 'addTureOrFalseImageListItem') {
        if (!Array.isArray(this.myModel.material)) this.myModel.material = []
        this.myModel.material.push(this.imgItem.model)
        this.mySchema.material.schema.push(this.imgItem.schema)
      }

      if (key == '0.addImageListItem') {
        this.myModel.material[0].list.push(this.imgItem.model.list[0])
        this.mySchema.material.schema[0].list.push(this.imgItem.schema.list[0])
      }

      if (key == 'addTureOrFalseAudioItem') {
        console.log('9999999999: ', this.myModel.material)
        if (!Array.isArray(this.myModel.material)) this.myModel.material = []
        this.myModel.material.push(this.audio.model)
        this.mySchema.material.schema.push(this.audio.schema)
      }
    }
  }
}
</script>
