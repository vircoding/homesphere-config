import { ref } from 'vue';

const confirmAccess = ref(false);

function setConfirmAccess(newValue: boolean) {
  confirmAccess.value = newValue;
}

export default function () {
  return {
    confirmAccess,
    setConfirmAccess,
  };
}
