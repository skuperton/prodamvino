<template lang="pug">
  .b-trade
    .__first(
      data-aos="fade-right"
      data-aos-delay="300"
    )
      .__preview
        .__image
          .__border
            img(
              :src="previewImage || `/images/alcohol/${imageName}.svg`"
            )
    .__second
      .__content
        first-step-component.__step(
          v-model="fields.first.value"
          :result-list="fields.first.resultList"
          :choosed-list="fields.first.choosedList"
          :disable="fields.first.disable"
          ref="first"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-offset="0"
          @input="onSearch"
          @click="chooseProductName"
          @tap="onTap"
        )
        second-step-component.__step(
          v-model="fields.second.value"
          :disable="!fields.first.choosedList.length"
          :options="fields.second.options"
          ref="second"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-offset="0"
          @onChange="chooseYear"
        )
        third-step-component.__step(
          :disable="!fields.second.value"
          :fields="thirdStepFields"
          :price="fields.third.price"
          ref="third"
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
    choosedList: {
      id: number
      name: string
      active: boolean
    }[],
    resultList: {
      id: number
      name: string
      active: boolean
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
    price: number,
    disable: boolean
  }
}

const scrollToOptions = {
  offset: -100,
  cancelable: false
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
  @Prop() readonly currentCategory!: string

  previewImage = ''

  fields: Fields = {
    first: {
      value: '',
      disable: false,
      choosedList: [],
      resultList: []
    },
    second: {
      value: '',
      disable: true,
      options: [
        {
          id: 0,
          name: 'Выберете год производства',
          value: ''
        }
      ]
    },
    third: {
      value: '',
      price: 0,
      disable: true
    }
  }

  get thirdStepFields () {
    return [
      {
        id: 1,
        label: 'Название',
        text: this.shortGradeName
      },
      {
        id: 2,
        label: 'Год производства',
        text: this.fields?.second.value
      }
    ]
  }

  get shortGradeName () {
    const wordLength = 25
    const shortName = this.fields?.first.choosedList[0]?.name.length > wordLength ? `${this.fields?.first.choosedList[0]?.name.slice(0, wordLength)}...` : this.fields?.first.choosedList[0]?.name
    return this.fields?.first.choosedList ? shortName : ''
  }

  createFields () {
    return {
      first: {
        value: '',
        disable: false,
        choosedList: [],
        resultList: []
      },
      second: {
        value: '',
        disable: true,
        options: [
          {
            id: 0,
            name: 'Выберете год производства',
            value: ''
          }
        ]
      },
      third: {
        value: '',
        price: 0,
        disable: true
      }
    }
  }

  async getAlcoholNamesBySearch () {
    return await this.$axios.get(`/alcohol/names/get?category=${this.currentCategory}&name=${this.fields.first.value}`)
      .then((response: { data: { name: string }[] }) => {
        this.fields.first.resultList = response.data.map((alcohol, index) => {
          return {
            id: index,
            name: alcohol.name,
            active: false
          }
        })
      })
      .catch((error: any) => console.log(error))
  }

  async getAlcoholYearByName () {
    return await this.$axios.get(`/alcohol/years/get?category=${this.currentCategory}&name=${this.fields?.first.choosedList[0]?.name}`)
      .then((response: { data: { year: string, price: number }[] }) => {
        // eslint-disable-next-line array-callback-return
        response.data.map((alcohol, index) => {
          this.fields.second.options.push({
            id: index + 1,
            name: alcohol.year.toString(),
            value: alcohol.year.toString()
          })
        })
      })
      .catch((error: any) => console.log(error))
  }

  async getAlcoholPriceAndImageByName () {
    return await this.$axios.get(`/alcohol/price/get?category=${this.currentCategory}&name=${this.fields?.first.choosedList[0]?.name}&year=${this.fields?.second.value}`)
      .then((response: { data: { image: string, price: number } }) => {
        // eslint-disable-next-line array-callback-return
        this.fields.third.price = response.data.price
        this.previewImage = response.data.image
      })
      .catch((error: any) => console.log(error))
  }

  onSearch () {
    this.getAlcoholNamesBySearch()
  }

  onTap () {
    // @ts-ignore
    this.scrollToNextStep(this.$refs.first?.$el, { offset: -140, cancelable: false })
  }

  resetForm () {
    // @ts-ignore
    this.$scrollTo('body')
    this.fields = this.createFields()
    this.previewImage = ''
  }

  chooseProductName (e: Event) {
    this.fields.second.options = [
      {
        id: 0,
        name: 'Выберете год производства',
        value: ''
      }
    ]
    this.fields.second.value = ''
    // @ts-ignore
    const candidate = this.fields.first.resultList.find(candidate => candidate.name === e.target.textContent)
    if (candidate) {
      const candidateIndex = this.fields.first.choosedList.indexOf(candidate)

      if (candidate) {
        if (candidateIndex === -1) {
          this.fields.first.choosedList = []
          // eslint-disable-next-line no-return-assign
          this.fields.first.resultList.map(alcohol => alcohol.active = false)
          this.fields.first.choosedList.push(candidate)
          candidate.active = true
          this.getAlcoholYearByName()
          this.fields.first.value = this.fields.first.choosedList[0].name
          // @ts-ignore
          this.scrollToNextStep(this.$refs.second?.$el, scrollToOptions)
          this.previewImage = ''
        } else {
          this.fields.first.choosedList = []
          candidate.active = false
          this.fields.third.price = 0
          this.fields.first.value = ''
          this.previewImage = ''
        }
      }
    }
  }

  chooseYear (e: Event) {
    const target = e.target as HTMLInputElement
    if (this.fields && target) {
      this.fields.second.value = target.value
      this.getAlcoholPriceAndImageByName()
      // @ts-ignore
      this.scrollToNextStep(this.$refs.third?.$el, scrollToOptions)
    }
  }

  scrollToNextStep (element: HTMLElement, options: any) {
    if (this.$device.isDesktop) {
      // @ts-ignore
      this.$scrollTo(element, 500, options)
    }
  }
}
</script>
