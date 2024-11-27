<template>
  <div class="reservation-form">
    <el-button @click="dialogVisible = true" class="floating-button">
      Criar reserva
    </el-button>

    <el-dialog
      v-model="dialogVisible"
      title="Reservar espaço"
    >
      <el-form :model="form">
        <el-form-item label="Responsável" :label-width="formLabelWidth">
          <el-input v-model="form.renter" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Data" :label-width="formLabelWidth">
          <el-input type="date" v-model="form.start_date" />
        </el-form-item>
        <el-form-item label="Hora" :label-width="formLabelWidth">
          <el-select v-model="form.start_hour" placeholder="Selecione a hora desejada">
            <el-option v-for="hour in hours" :key="hour" :label="hour.toString().padStart(2, '0')" :value="hour" />
          </el-select>
        </el-form-item>
        <el-form-item label="Espaço" :label-width="formLabelWidth">
          <el-select v-model="form.space_id" placeholder="Selecione o que deseja reservar">
             <el-option v-for="option in reservationOptions" :key="option.value" :label="option.name" :value="option.value" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="resetReservation">Cancelar</el-button>
          <el-button type="primary" @click="createReservation">
            Reservar
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useReservationStore } from '@/store/reservation';

const reservationStore = useReservationStore();

const dialogVisible = ref(false);
const formLabelWidth = '140px'
const hours = Array.from({ length: 16 }, (_, i) => i + 6)

const reservationOptions = [{
  name: 'Natação/Olímpica',
  value: 1 //'swimming'
},
{
  name: 'Mergulho',
  value: 2 //'diving'
},
{
  name: 'Poliesportiva',
  value: 3 //'poli'
},
{
  name: 'Voleibol',
  value: 4 //'volley'
},
{
  name: 'Areia',
  value: 5 //'sand'
},
{
  name: 'Tennis',
  value: 6 //'tennis'
}]

const form = reactive({
  renter: '',
  start_date: '',
  start_hour: '',
  space_id: ''
})

const createReservation = () => {
  const payload = {
    start_date: form.start_date,
    start_hour: (form.start_hour + 3).toString().padStart(2, '0') + ':00',
    space_id: form.space_id,
    type: form.space_id === 1 || form.space_id === 2 ? 'Pool' : 'Court',
    renter: form.renter
  }
  reservationStore.createReservation(payload).then(() => {
    dialogVisible.value = false;
  });
}

const resetReservation = () => {
  form.renter = '';
  form.start_date = '';
  form.start_hour = '';
  form.space_id = '';

  dialogVisible.value = false;
}
</script>

<style lang="scss" scoped>
.floating-button {
  position: fixed;
  top: 16px;
  right: 20px;
}

:deep(.el-dialog) {
  width: 500px;
}

@media screen and (max-width: 600px) {
  .floating-button {
    top: unset;
    bottom: 76px;
    width: 80px;
    height: 60px;
    text-wrap: auto;
  }

  :deep(.el-dialog) {
    width: 100% !important;
    position: absolute;
    bottom: -50px;
  }
}
</style>