import Vue from 'vue'
import { computed, getCurrentInstance, onServerPrefetch } from '@vue/composition-api'

const configuration = Vue.observable({
  loaded: false,
  name: 'not loaded',
  logoUrl: '',
  description: '',
  keywords: '',
  slogan: '',
  language: 'en',
  direction: 'ltr',
  titleSuffix: 'not loaded'
})

export function fetchConfiguration () {
  const { $axios } = getCurrentInstance()

  const promise = $axios.$get(`api/configurations/app-configuration`)
    .then(({ metadata }) => {
      Object.assign(configuration, metadata)
      configuration.titleSuffix = `${configuration.name} - ${configuration.slogan}`
    })
    .catch(() => null)
    .finally(() => configuration.loaded = true)

  return onServerPrefetch(() => promise)
}

export function useConfiguration () {
  return computed(() => configuration)
}
