<template>
  <tr>
    <td v-for="(el, index) in item" :key="index">{{ el }}</td>
  </tr>
</template>

<script>
export default {
  name: "TableRow",
  props: {
    item: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
