<template lang="pug">
  .b-trade
    .__first(
      data-aos="fade-right"
      data-aos-delay="300"
    )
      .__preview
        .__image
          .__border
            nuxt-img(
              :src="`/images/alcohol/${imageName}.svg`"
            )
    .__second
      .__content
        first-step-component.__step(
          v-model="fields.first.value"
          :result-list="fields.first.resultList"
          :disable="fields.first.disable"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-offset="0"
        )
        second-step-component.__step(
          v-model="fields.second.value"
          :disable="!fields.first.value.length"
          :options="fields.second.options"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-offset="0"
          @onChange="chooseYear"
        )
        third-step-component.__step(
          :disable="!fields.second.value.length"
          :fields="thirdStepFields"
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-offset="0"
          @resetForm="resetForm"
        )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import DealStep from '~/components/blanks/deal-step.vue'
import FirstStep from '~/components/blanks/first-step.vue'
import SecondStep from '~/components/blanks/second-step.vue'
import ThirdStep from '~/components/blanks/third-step.vue'

export type Fields = {
  first: {
    value: string,
    disable: boolean,
    choosedList: string[],
    resultList: {
      name: string
    }[]
  },
  second: {
    value: string,
    disable: boolean,
    options:
      {
        id: number,
        name: string,
        value: string
      }[]
  },
  third: {
    value: string,
    disable: boolean
  }
}

@Component({
  components: {
    'third-step-component': ThirdStep,
    'second-step-component': SecondStep,
    'deal-step-component': DealStep,
    'first-step-component': FirstStep
  }
})
export default class Trade extends Vue {
  @Prop() readonly imageName!: string

  fields: Fields = {
    first: {
      value: '',
      disable: false,
      choosedList: [],
      resultList: [
        {
          name: 'Macallan Sherry Oak 12 Years Old 0.7 л'
        },
        {
          name: 'Macallan A Night on Earth In Scotland 0.7 л'
        },
        {
          name: 'Macallan Fine Oak, 21'
        }
      ]
    },
    second: {
      value: '',
      disable: true,
      options: [
        {
          id: 0,
          name: 'Выберете год производства',
          value: ''
        },
        {
          id: 1,
          name: '2011',
          value: '2011'
        },
        {
          id: 2,
          name: '2012',
          value: '2012'
        },
        {
          id: 3,
          name: '2013',
          value: '2013'
        },
        {
          id: 4,
          name: '2014',
          value: '2014'
        }
      ]
    },
    third: {
      value: '',
      disable: true
    }
  }

  get thirdStepFields () {
    return [
      {
        id: 1,
        label: 'Название',
        text: this.fields?.first.value
      },
      {
        id: 2,
        label: 'Год производства',
        text: this.fields?.second.value
      }
    ]
  }

  get createFields () {
    return {
      first: {
        value: '',
        disable: false,
        choosedList: [],
        resultList: [
          {
            name: 'Macallan Sherry Oak 12 Years Old 0.7 л'
          },
          {
            name: 'Macallan A Night on Earth In Scotland 0.7 л'
          },
          {
            name: 'Macallan Fine Oak, 21'
          }
        ]
      },
      second: {
        value: '',
        disable: true,
        options: [
          {
            id: 0,
            name: 'Выберете год производства',
            value: ''
          },
          {
            id: 1,
            name: '2011',
            value: '2011'
          },
          {
            id: 2,
            name: '2012',
            value: '2012'
          },
          {
            id: 3,
            name: '2013',
            value: '2013'
          },
          {
            id: 4,
            name: '2014',
            value: '2014'
          }
        ]
      },
      third: {
        value: '',
        disable: true
      }
    }
  }

  resetForm () {
    this.fields = this.createFields
    console.log(this.fields, 'current fields')
  }

  chooseYear (e: Event) {
    const target = e.target as HTMLInputElement
    if (this.fields && target) {
      this.fields.second.value = target.value
    }
  }
}
</script>
