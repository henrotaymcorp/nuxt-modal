import TestingSecondModal from "../components/TestingSecondModal.vue";
import { useModal, useRandomText } from "~/.nuxt/imports";

const useSecondModal = () => {
  const { open: rawOpen, close } = useModal(TestingSecondModal);
  const open = () =>
    rawOpen({
      name: useRandomText(),
      lastName: "second",
    });

  return { open, close };
};

export default useSecondModal;
