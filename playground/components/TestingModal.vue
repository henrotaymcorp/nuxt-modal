<template>
  <RightModal>
    <div class="flex flex-col gap-8">
      <div>name: {{ name }}</div>
      <div>lastName: {{ lastName }}</div>
      <div class="flex items-center gap-8">
        <AppButton @click="open"> open second modal </AppButton>
        <AppButton @click="close"> close modal </AppButton>
        <AppButton @click="destroyAll"> close all </AppButton>
      </div>
    </div>
  </RightModal>
</template>

<script setup lang="ts">
import useSecondModal from "~/composables/useSecondModal";
import { useModalContainer } from "#imports";

type Props = {
  name: string;
  lastName: string;
  close: () => void;
};

defineProps<Props>();
const { open } = useSecondModal();
const { destroyAll } = useModalContainer();
console.log("created first modal");
</script>
