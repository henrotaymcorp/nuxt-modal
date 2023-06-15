import TestingModal from "../components/TestingModal.vue";
import { useModal, useRandomText } from "~/.nuxt/imports";

const useFirstModal = () => {
  const { open: rawOpen, close } = useModal(TestingModal);
  const open = () =>
    rawOpen({
      name: useRandomText(),
      lastName: "first",
    });

  return { open, close };
};

export default useFirstModal;
