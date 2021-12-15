<template>
  <div class="dashboard">
    <div class="factory-table-container">
      <h3 class="text-center">Factories</h3>
      <table v-if="factories" class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Membership Start</th>
            <th scope="col">Membership End</th>
            <th scope="col">Employee Number</th>
            <th scope="col">VIP Status</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            v-for="factory in factories"
            :item="factory"
            :key="factory.factory_id"
          />
        </tbody>
      </table>
    </div>
    <div class="unit-table-container">
      <h3 class="text-center">Consumption Details</h3>
      <table v-if="units" class="table">
        <thead>
          <tr>
            <th scope="col">Unit ID</th>
            <th scope="col">Unit Name</th>
            <th scope="col">Consumption Dates</th>
            <th scope="col">Consumption Amount</th>
            <th scope="col">Consumption Price</th>
            <th scope="col">Discount Rate</th>
            <th scope="col">Total Price</th>
          </tr>
        </thead>
        <tbody>
          <TableRow v-for="unit in units" :item="unit" :key="unit.unit_id" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TableRow from "../components/TableRow.vue";

export default {
  name: "Dashboard",
  components: {
    TableRow,
  },
  computed: {
    ...mapState(["factories", "units"]),
  },
  methods: {
    ...mapActions(["getAllFactories", "getUnits"]),
  },
  created() {
    this.getAllFactories();
    this.getUnits();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard {
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  gap: 100px;
}
.factory-table-container,
.unit-table-container {
  overflow-x: scroll;
}
.table {
  background-color: var(--primary);
  color: white;
}
tbody > tr {
  cursor: pointer;
}

::-webkit-scrollbar {
  height: 8px;
}
/* Track */
::-webkit-scrollbar-track {
  background: var(--primary);
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--light);
  border-radius: 20px;
}
</style>
