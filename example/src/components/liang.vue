<template>
  <v-container fluid>
    <h4>Group Controls independent from Model-Structure with Type 'wrap' </h4>

    <v-form class="border-frame">
      <!-- FORM-BASE-COMPONENT -->
      <!-- See for attribute 'row' handling <v-row></v-row> https://vuetifyjs.com/en/components/grids/ -->
      <v-form-base
        :model="myModel"
        :schema="mySchema"
        :row="{align:'center', justify:'center', noGutters:false}"
        @input="log"
      >
        <!-- Label Slot for Group1-->
        <template #slot-label-key-group1="{obj}">
          <span class="blue--text">{{obj.schema.label}} (Slot-Label)</span>
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


  const name1 = { type: 'text', label:'Name 1' }
  const check1 = { type: 'checkbox', label: 'Checkbox 1'  }
  const name2 = { type: 'text', label:'Name 2', color: 'red' }
  const check2 = { type: 'checkbox', label: 'Checkbox 2', color: 'red' }
  export default {
    name: 'Wrapper',
    components: { VFormBase, Infoline },
    data () {
      return {
        myModel: {

        },
        mySchema: {
      liang: {
        type: 'wrap',
        class: 'border rounded my-1 p-2 flex',
        style: 'border-color: #00BCD4;',
        schema: {
          content: {
            type: "text",
            label: "内容",
            clearable: true,
            hint: "请输入文字内容或tips",
            col: 11
          },
          removeTureOrFalseText: { type: 'btn', col: 1, iconLeft: 'mdi-minus', label:'移除', dark: true, small: true, rounded: true, class:'mb-2', color: 'error lighten-2', class: 'mt-3' }
        }
      }
    }
      }
    },
    methods: {
      log
    }
  }
</script>
