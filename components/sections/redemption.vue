<template lang="pug">
  section.b-redemption
    .container.__container
      h2.__title Какой алкоголь мы выкупаем
      .__content
        .__head
          tag-component(
            v-for="tag in tags"
            :key="tag.id"
            :img-name="tag.imgName"
            :name="tag.name"
          )
        p.__text {{text}}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Tag from '~/components/ui/tag.vue'

@Component({
  components: {
    'tag-component': Tag
  }
})
export default class Redemption extends Vue {
  text = 'Повседневная практика показывает, что дальнейшее развитие различных форм деятельности позволяет оценить значение систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий.'

  tags = [
    {
      id: 1,
      name: 'Вино',
      imgName: 'vine'
    },
    {
      id: 2,
      name: 'Коньяк',
      imgName: 'kon'
    },
    {
      id: 3,
      name: 'Виски',
      imgName: 'viski'
    },
    {
      id: 4,
      name: 'Водка',
      imgName: 'vodka'
    },
    {
      id: 5,
      name: 'Шампанское',
      imgName: 'shamp'
    }
  ]
}
</script>
