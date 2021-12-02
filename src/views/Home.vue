<template>
  <div class="home">
    <HomeLanding />
    <HomeBanners />
  </div>
</template>

<script>
// @ is an alias to /src

import HomeBanners from '@/components/HomeBanners.vue'
import HomeLanding from '@/components/HomeLanding.vue'

export default {
  name: 'Home',
  components: {
    HomeLanding,
    HomeBanners
  }
}
</script>
