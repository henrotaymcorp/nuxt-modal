<template>
  <div
    class="h-screen w-screen flex items-center justify-center bg-gradient-to-br to-cyan-600 from-blue-500"
  >
    <div
      class="text-center p-8 rounded-full bg-white w-[650px] h-[650px] shadow-lg"
    >
      <div>
        <div class="text-[300px]">🎉</div>
        <AppButton @click="openFirst"> open first </AppButton>
        <AppButton @click="openSecond"> open second </AppButton>
      </div>
    </div>
    <ModalsContainer overlay="bg-red-500 opacity-50" />
  </div>
</template>

<script setup lang="ts">
import useFirstModal from "./composables/useFirstModal";
import useSecondModal from "./composables/useSecondModal";

const { open: openFirst } = useFirstModal();
const { open: openSecond } = useSecondModal();
</script>
