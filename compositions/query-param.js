import { ref, getCurrentInstance, watch } from '@vue/composition-api'

export function useQueryParam (key) {
  const { $route } = getCurrentInstance()

  const query = ref($route.query ? $route.query[key] : null)

  watch('$route.query.' + key, (q) => query.value = q)

  return query;
}
