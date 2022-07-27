<template lang="pug">
  section.b-redemption
    .container.__container
      h2.__title(
        data-aos="fade-right"
        data-aos-delay="100"
      ) Какой алкоголь мы выкупаем
      .__content(
        data-aos="fade-left"
        data-aos-delay="200"
      )
        .__head
          tag-component(
            v-for="(tag, index) in tags"
            :key="tag.id"
            :img-name="tag.imgName"
            :name="tag.name"
            :data-aos-delay="300 + (index * 100)"
            data-aos="fade-down"
          )
        p.__text(
          data-aos="fade"
          data-aos-delay="800"
        ) {{text}}
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
