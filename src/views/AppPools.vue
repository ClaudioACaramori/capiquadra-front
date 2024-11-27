<template>
  <el-radio-group v-model="selectedDate" size="large" @change="fetchPoolReservations">
    <el-radio-button v-for="date in dateList" :key="date" :value="date == selectedDate ? selectedDate : date">{{ date.getDate() }}/{{ date.getMonth() + 1 }}/{{ date.getFullYear() }}</el-radio-button>
  </el-radio-group>
  <div class="reservation-list">
    <div v-for="reservation in poolReservations" :key="reservation.id" class="reservation-card">
      <div class="justify-content-space-between">
        <span>{{ reservation.renter }}</span>
        <span>{{ moment(reservation.start_date).format("DD/MM/YYYY") }} {{ moment(reservation.start_hour).format("HH:mm") }}</span>
      </div>
      <p>{{ ensureKindName(reservation.space.kind) }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useReservationStore } from '@/store/reservation';

import moment from 'moment';

const reservationStore = useReservationStore();

const poolReservations = ref([]);
const dateList = ref([]);
const selectedDate = ref(new Date());

const reservationParams = {
  by_start_date: selectedDate.value,
  by_space_type: 'Pool'
}

const today = new Date();

const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();

for (let i = 0; i < 30; i++) {
  let day = new Date(year, month, date + i);
  dateList.value.push(day);
}

const fetchPoolReservations = () => {
  reservationParams.by_start_date = selectedDate.value;
  reservationStore.fetchReservations(reservationParams).then(() => {
    poolReservations.value = reservationStore.getReservations;
  });
}

const ensureKindName = (kind) => {
  if (kind === 'swimming') {
    return 'Natação/Olímpica';
  } else {
    return 'Mergulho';
  }
}

onMounted(() => {
  reservationStore.fetchReservations(reservationParams).then(() => {
    poolReservations.value = reservationStore.getReservations;
  });

  selectedDate.value = dateList.value[0];
})
</script>

<style lang="scss" scoped>
.el-radio-group {
  display: flex;
  margin-bottom: 20px;
  flex-wrap: nowrap;
  overflow: scroll;
}

.reservation-list {
  width: 800px;
  margin: auto;

  .reservation-card {
    background-color: rgb(243, 243, 243);
    border: 1px solid rgb(56, 56, 56);
    border-top: none;
    padding: 16px;

    &:first-child {
      border-top: 1px solid rgb(56, 56, 56);
    }
  }
}

.justify-content-space-between {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 600px) {
  .reservation-list {
    width: 100%;
  }
}
</style>