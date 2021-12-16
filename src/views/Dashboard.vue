<template>
  <div class="dashboard">
    <div v-if="factories" class="factory-table-container">
      <h3 class="text-center">Factories</h3>
      <table class="table">
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
          <tr
            v-for="factory in factories"
            :key="factory.id"
            @click="getFactoryUnits(factory.id)"
          >
            <td>{{ factory.id }}</td>
            <td>{{ factory.name }}</td>
            <td>{{ factory.membership_start | convertDate }}</td>
            <td>{{ factory.membership_end | convertDate }}</td>
            <td>{{ factory.population }}</td>
            <td>{{ factory.vip | convertVip }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="units" class="unit-table-container">
      <h3 class="text-center">Consumption Details</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Unit Name</th>
            <th scope="col">Consumption Dates</th>
            <th scope="col">Consumption Amount</th>
            <th scope="col">Consumption Price</th>
            <th scope="col">Discount Rate</th>
            <th scope="col">Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(unit, index) in units" :key="index">
            <td>{{ unit.unit_name }}</td>
            <td>{{ unit.consumption_date | convertDateRange }}</td>
            <td>{{ unit.consumption_amount }} kWh</td>
            <td>{{ unit.consumption_price }} <span>&#8378;</span></td>
            <td>{{ unit.discount | convertDiscount }}</td>
            <td>{{ unit.total_price }} <span>&#8378;</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapState(["factories", "units"]),
  },
  methods: {
    ...mapActions(["getAllFactories", "getFactoryUnits"]),
  },
  filters: {
    convertDate(val) {
      let date = new Date(val);
      return date.toDateString();
    },
    convertVip(val) {
      if (val) return "VIP";
      return "NOT VIP";
    },
    convertDiscount(val) {
      if (val) return "20%";
      return "No discount";
    },
    convertDateRange(val) {
      let newArr = val.slice(1, val.length - 1);
      newArr = newArr.split(",");
      return `${new Date(newArr[0]).toDateString()} / ${new Date(
        newArr[1]
      ).toDateString()}`;
    },
  },
  created() {
    this.getAllFactories();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard {
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.factory-table-container,
.unit-table-container {
  overflow-x: scroll;
}
.table {
  background-color: var(--primary);
  color: white;
}
.factory-table-container tbody tr {
  cursor: pointer;
}

.factory-table-container tbody tr:hover {
  background-color: var(--light);
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
