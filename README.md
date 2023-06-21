# nuxt-modal

A simple package to manage modals.

## Installation

```shell
yarn add @henrotaymcorp/nuxt-modal
```

Add `@henrotaymcorp/nuxt-modal` to the `modules` section of `nuxt.config.ts`

```typescript
export default defineNuxtConfig({
  modules: [
    '@henrotaymcorp/nuxt-modal'
  ],
  nuxtModal: {}
})
```

That's it! You can now use `nuxt-modal` in your Nuxt app ✨

## Usage

Add `ModalsContainer` to your App.vue (or any component being global to your app)

```vue
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    <NuxtLayout>
    <ModalsContainer>
  <div>
</template>
```

Define your modal. Main container has to be one of these : StylelessModal / CenteredModal / RightModal

```vue
<template>
  <RightModal>
    <div class="flex flex-col gap-8">
      <div>name: {{ name }}</div>
      <div>lastName: {{ lastName }}</div>
      <div class="flex items-center gap-8">
        <AppButton @click="open"> open second modal </AppButton>
        <AppButton @click="close"> close modal </AppButton>
      </div>
    </div>
  </RightModal>
</template>

<script setup lang="ts">
type Props = {
  name: string;
  lastName: string;
  close: () => void; // Close is given magically by this package and allow modal removal.
};

defineProps<Props>();
</script>
```

Define a composable to use your modal

```typescript
import MyModal from "path/to/MyModal.vue"

export const useMyModal = () => useModal(MyModal);
```

Use composable in your code

```vue
<template>
  <button @click="openModal"> Open modal </button>
  <button @click="close"> Close </button>
</template>

<script setup lang="ts">
const { open, close } = useMyModal();

// Open parameters are automatically resolved using your component props (omiting close function)
const openModal = () => open({
  firstName: "Mathieu",
  lastName: "Henrotay"
})
</script>
```

## Development

```shell
./cli bootstrap #bootstrap project
./cli start #start project
./cli stop #stop project
./cli restart  #restart project
```
