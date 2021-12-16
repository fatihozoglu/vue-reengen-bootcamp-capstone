<template>
  <div class="dashboard">
    <div
      v-if="factories && factories.length > 0"
      class="factory-table-container"
    >
      <h3 class="text-center">Factories</h3>
      <table class="table">
        <thead>
          <tr>
            <th
              scope="col"
              v-for="(key, index) in Object.keys(this.factories[0])"
              :key="index"
            >
              {{ key | convertTableHeading }}
            </th>
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
            <td class="icon-container" v-if="user.role === 'admin'">
              <span
                ><svg
                  class="edit-icon"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  /></svg
              ></span>
              <span>
                <svg
                  @click="deleteFactoryById(factory.id)"
                  class="delete-icon ms-3"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                  />
                </svg>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="units && units.length > 0" class="unit-table-container">
      <h3 class="text-center">Consumption Details</h3>
      <table class="table">
        <thead>
          <tr>
            <th
              scope="col"
              v-for="(key, index) in Object.keys(this.units[0])"
              :key="index"
            >
              {{ key | convertTableHeading }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(unit, index) in units" :key="index">
            <td>{{ unit.unit_id }}</td>
            <td>{{ unit.factory_id }}</td>
            <td>{{ unit.unit_name }}</td>
            <td>{{ unit.consumption_amount }} kWh</td>
            <td>
              {{ unit.consumption_price | convertCurrency }}
              <span>&#8378;</span>
            </td>
            <td>{{ unit.discount | convertDiscount }}</td>
            <td>
              {{ unit.total_price | convertCurrency }} <span>&#8378;</span>
            </td>
            <td>{{ unit.consumption_date | convertDateRange }}</td>
            <td class="icon-container" v-if="user.role === 'admin'">
              <span
                ><svg
                  class="edit-icon"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  /></svg
              ></span>
              <span>
                <svg
                  @click="
                    deleteUnitById({
                      unit_id: unit.unit_id,
                      factory_id: unit.factory_id,
                    })
                  "
                  class="delete-icon ms-3"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                  />
                </svg>
              </span>
            </td>
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
    ...mapState(["user", "factories", "units"]),
  },
  methods: {
    ...mapActions([
      "getAllFactories",
      "getFactoryUnits",
      "deleteFactoryById",
      "deleteUnitById",
    ]),
  },
  filters: {
    convertDate(val) {
      let date = new Date(val);
      return date.toLocaleDateString();
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
      return `${new Date(newArr[0]).toLocaleDateString()} / ${new Date(
        newArr[1]
      ).toLocaleDateString()}`;
    },
    convertCurrency(val) {
      return Number(val).toLocaleString("en-US");
    },
    convertTableHeading(val) {
      return val.split("_").join(" ").toUpperCase();
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
svg {
  visibility: hidden;
}
tbody tr:hover svg {
  visibility: visible;
}
.edit-icon:hover {
  cursor: pointer;
  color: var(--secondary);
}
.delete-icon:hover {
  cursor: pointer;
  color: rgb(250, 79, 79);
}
.icon-container {
  min-width: 80px;
}
</style>
