<template>
  <CenteredModal>
    <div class="flex flex-col gap-8">
      <div>name: {{ name }}</div>
      <div>lastName: {{ lastName }}</div>
      <div class="flex items-center gap-8">
        <AppButton @click="open"> open first modal </AppButton>
        <AppButton @click="close"> close modal </AppButton>
      </div>
    </div>
  </CenteredModal>
</template>

<script setup lang="ts">
import useFirstModal from "~/composables/useFirstModal";

type Props = {
  name: string;
  lastName: string;
  close: () => void;
};
defineProps<Props>();

const { open } = useFirstModal();
console.log("created second modal");
</script>
