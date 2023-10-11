<script setup lang="ts">
import { useAuthStore } from '~/store/user';
const router = useRouter()
const userStore = useAuthStore();
const isLoading = ref(false);
const email = ref("");

const loginFunc = () => {
  isLoading.value = true;
  userStore.updateEmail(email.value)
  setTimeout(() => {
    isLoading.value = false;
    router.push("/");
  }, 1000);
}
</script>
<template>
  <section class="w-full flex flex-col items-center pb-8">
    <div
      class="w-full px-6 md:px-0 md:max-w-[400px] flex flex-col gap-y-4 mt-12 text-neutral-800 bg-white border border-neutral-200 rounded-lg shadow-md">
      <div class="w-full py-2.5">
        <div class="flex items-center justify-center py-6">
          <h1 class="text-3xl md:text-4xl">Login to Account</h1>
        </div>
        <div class="w-full flex flex-col mt-4 px-10 gap-y-6">
          <div class="relative bg-inherit w-full">
            <input v-model="email" type="email" id="email" name="email"
              class="peer text-base bg-white h-12 w-full rounded-lg text-gray-700 placeholder-transparent ring-1 px-2 ring-neutral-200 focus:ring-neutral-400/60 focus:outline-none"
              placeholder="Email" /><label for="email"
              class="absolute cursor-text left-1.5 -top-2 text-sm text-gray-500 bg-white mx-1 px-1 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:text-t-gray peer-focus:text-xs transition-all">Email</label>
          </div>
          <div class="relative bg-inherit w-full">
            <input type="password" id="password" name="password"
              class="peer text-base bg-white h-12 w-full rounded-lg text-gray-700 placeholder-transparent ring-1 px-2 ring-neutral-200 focus:ring-neutral-400/60 focus:outline-none"
              placeholder="Password" /><label for="password"
              class="absolute cursor-text left-1.5 -top-2 text-sm text-gray-500 bg-white mx-1 px-1 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:text-t-gray peer-focus:text-xs transition-all">Password</label>
          </div>
          <div class="w-full flex flex-col pb-7">
            <button @click="loginFunc"
              class="w-full py-4 text-lg font-semibold bg-[#db95f9] text-white tracking-wide rounded transition flex items-center justify-center">
              <Transition>
                <span v-if="!isLoading" class="leading-none">Login</span>
                <Loading v-else />
              </Transition>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
