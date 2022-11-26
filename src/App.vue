<template>
  <RouterView v-slot="{ Component, route: routeViewRoute }">
    <component :is="routeViewRoute.meta.layout">
      <component :is="Component" />
    </component>
  </RouterView>
</template>
