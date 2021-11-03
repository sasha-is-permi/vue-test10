<template>  
 <Weather/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Weather from './components/Weather.vue';

export default defineComponent({
  name: 'App',
  components: {
    Weather
  }
});
</script>
