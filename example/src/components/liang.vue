<template>
  <v-container fluid>
    <h4>Handling of undefined Properties in Model or in Schema</h4>

    <v-form class="border-frame">
      <!-- FORM-BASE-COMPONENT -->
      <v-form-base
        :model="myModel"
        :schema="mySchema"
        col=6
        @change="log"
      >
      <template v-slot:tttttrt="{obj}">
        <h1>Here might be a page title {{ obj }}</h1>
      </template>

      <template v-slot:kkkkrkk="{obj}">
        <h1>Here might be a page title {{ obj }}</h1>
      </template>
    </v-form-base>
    </v-form>

    <!-- Stuff  -->
    <infoline :model="myModel" :schema="mySchema"/>

  </v-container>
</template>

<script>
import VFormBase from '@/components/vFormBase'
import Infoline from '@/components/infoline'
import log from '@/lib'

export default {
  name: 'undefinedProperties',
  components: { VFormBase, Infoline },
  data () {
    return {
      myModel: {
      type: 2,
      list: [{
        src: [],
        src2: []
      }],
      btn: ''
    },
      mySchema: {
      list: {
        type: "array",
        col: 12,
        schema: {
          src: {
            customSlotKey: 'tttttt',
            type: "file",
            label: "图片文件",
            showSize: true,
            counter: true,
            accept: "image/*",
            col: 12
          },
          src2: {
            customSlotKey: 'kkkkkk',
            type: "file",
            label: "图片文件",
            showSize: true,
            counter: true,
            accept: "image/*",
            col: 12
          }
        }
      },
      addImageListItem: { type: 'btn', iconLeft: 'mdi-plus', label:'添加', dark: true, small: true, rounded: true, class:'mb-2', color: 'blue lighten-2' },
      removeImageListItem: { type: 'btn', iconLeft: 'mdi-minus', label:'减少', dark: true, small: true, rounded: true, class:'mb-2', color: 'blue lighten-2' }
    }
    }
  },
  methods: {
    log
  }
}
</script>
