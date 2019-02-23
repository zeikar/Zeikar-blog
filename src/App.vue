<template>
  <div id="app">
    <Articles/>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
import Articles from './components/Articles.vue'

export default {
  name: 'app',
  components: {
    Articles
  }
}
</script>