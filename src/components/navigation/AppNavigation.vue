<template>
  <div class="navigation-border">
    <el-menu
      :default-active="activeIndex"
      :ellipsis="false"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item
        v-for="({ name, to }, index) in items"
        :key="index"
        :index="index"
      >
        <router-link :to="{ name: to }">
          {{ name }}
        </router-link>
      </el-menu-item>
      <div class="flex-grow" />
    </el-menu>
  </div>
</template>

<script setup>
import {
  computed, ref, watch,
} from 'vue';
import { useRoute } from 'vue-router';

const items = [
  {
    name: 'Piscinas',
    to: 'pools',
    path: '/piscinas',
  },
  {
    name: 'Quadras',
    to: 'courts',
    path: '/quadras',
  },
];

const activeIndex = ref(0);

const route = useRoute();

const setIndex = computed(() => items.findIndex((item) => item.path === route.path));

watch(setIndex, (value) => {
  activeIndex.value = value;
});

</script>

<style lang="scss" scoped>
.navigation-border {
  border-bottom: 1px solid #e6e6e6;
  background-color: #0088b7;
}

.el-menu-demo {
  margin: auto;
  width: 243px;

  .el-menu-item {
    background-color: #0088b7;
  }

  a {
    padding: 10px;
    text-decoration: none;
    font-weight: bold;
  }

  .flex-grow {
    flex-grow: 1;
  }

  .name {
    font-weight: 500;
    height: 100%;
  }
}

.el-menu {
  background-color: unset;
}

.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: unset;
  color: white !important;
  background-color: #097CA5;
}
.el-menu--horizontal>.el-menu-item {
  color: white !important;
}

.el-menu-item {
  &:hover {
    background-color: #097CA5 !important;
  }
}

@media screen and (max-width: 600px) {
  .navigation-border {
    position: absolute;
    bottom: 0;
    width: 100vw;
  }
}
</style>
