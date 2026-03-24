<script setup lang="ts">
import { onMounted, ref } from "vue";
import SwaggerUI from "swagger-ui-dist/swagger-ui-es-bundle";
import "swagger-ui-dist/swagger-ui.css";

const props = defineProps<{
  specUrl?: string;
}>();

const container = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!container.value) return;

  SwaggerUI({
    domNode: container.value,
    url: props.specUrl || "/openapi/swagger.json",
    deepLinking: true,
    docExpansion: "list",
    persistAuthorization: true,
  });
});
</script>

<template>
  <div class="swagger-wrapper">
    <div ref="container" />
  </div>
</template>

<!-- <style scoped>
.swagger-page {
  margin-top: 1rem;
  background: #ffffff;
  padding: 16px;
  border-radius: 12px;
}
</style> -->
