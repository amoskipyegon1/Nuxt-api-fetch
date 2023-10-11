<script setup lang="ts">
const router = useRouter()
const isLoading = ref(false);

const registerFunc = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    router.push("/login");
  }, 1000);
}
</script>
<template>
  <section class="w-full flex flex-col items-center pb-8">
    <div
      class="w-full px-6 md:px-0 md:max-w-[400px] flex flex-col gap-y-4 mt-12 text-neutral-800 bg-white border border-neutral-200 rounded-lg shadow-md">
      <div class="w-full py-2.5">
        <div class="flex items-center justify-center py-6">
          <h1 class="text-3xl md:text-4xl">Account Registration</h1>
        </div>
        <div class="w-full flex flex-col mt-4 px-10 gap-y-6">
          <div class="relative bg-inherit w-full">
            <input type="text" id="username" name="username"
              class="peer text-base bg-white h-12 w-full rounded-lg text-gray-700 placeholder-transparent ring-1 px-2 ring-neutral-200 focus:ring-neutral-400/60 focus:outline-none"
              placeholder="Username" /><label for="username"
              class="absolute cursor-text left-1.5 -top-2 text-sm text-gray-500 bg-white mx-1 px-1 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:text-t-gray peer-focus:text-xs transition-all">Username</label>
          </div>
          <div class="relative bg-inherit w-full">
            <input type="email" id="email" name="email"
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
          <div class="w-full flex items-center justify-center">
            <p class="text-sm text-t-gray text-center leading-relaxed">
              By signing up, you agree to our
              <span class="text-sm font-medium text-base-green">Terms</span>
              and
              <span class="text-sm font-medium text-base-green">Privacy Policy</span>.
            </p>
          </div>
          <div class="w-full flex flex-col pb-7">
            <button @click="registerFunc"
              class="w-full py-4 text-lg font-semibold bg-[#db95f9] text-white tracking-wide rounded transition flex items-center justify-center">
              <Transition>
                <span v-if="!isLoading" class="leading-none">Sign up</span>
                <Loading v-else />
              </Transition>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
