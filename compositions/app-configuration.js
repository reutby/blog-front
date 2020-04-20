import Vue from 'vue'
import { onServerPrefetch, getCurrentInstance } from '@vue/composition-api'

const configuration = Vue.observable({
  name: '',
  description: '',
  language: 'en',
  direction: 'ltr',
})

export default function useConfiguration () {
  const { $axios } = getCurrentInstance()

  const promise = (function getConfiguration () {
    return $axios
      .$get(`api/configurations/app-configuration`)
      .then(config => Object.assign(configuration, config.metadata))
  })();

  onServerPrefetch(() => promise)

  return configuration
}
