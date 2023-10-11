import { defineStore } from "pinia";


export const useAuthStore = defineStore("user", () => {
  const email = ref("");

  const updateEmail = (payload: string) => {
    email.value = payload;
  }

  return { email, updateEmail };
})
