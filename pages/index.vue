<template>
    <section class="w-full flex flex-col gap-y-2">
        <NavBar />

        <div class="px-4 md:px-8 lg:px-20 xl:px-32 flex flex-col gap-y-3 mt-20">
            <div
                class="w-full flex flex-col items-center gap-y-14 pt-8 sm:pt-16 bg-custom-color rounded-3xl min-h-[100vh] sm:h-[90vh] bg-[url('~/assets/wave_vector.svg')] bg-no-repeat bg-bottom bg-contain"
            >
                <div class="flex flex-col gap-y-1 sm:gap-y-3 items-center justify-center">
                    <h3 class="text-2xl sm:text-3xl md:text-5xl font-[700]">Find disaster-stricken regions.</h3>
                    <h3 class="text-lg sm:text-2xl md:text-3xl font-medium">Interpret visually plotted data.</h3>
                </div>
                <div class="flex flex-col gap-y-4 items-center justify-center w-full">
                    <div class="flex flex-col md:flex-row gap-3 items-center justify-center w-full">
                        <div
                            class="flex flex-col gap-y-1.5 w-[86%] sm:w-[80%] md:w-[40%] xl:w-[30%] bg-app-bg rounded-l-md px-3 py-2 transition-length duration-200"
                        >
                            <span class="text-neutral-500 text-sm md:text-base lg:text-lg font-light">Location</span>
                            <div class="relative">
                                <input
                                    id="location"
                                    type="text"
                                    class="block w-full py-2.5 sm:py-3 pl-4 tracking-wide text-sm md:text-base lg:text-lg text-gray-900 border border-gray-200 rounded-sm bg-gray-50 focus:ring-1 focus:ring-green-500 focus:border-green-500 focus:outline-none transition duration-200"
                                    placeholder="Enter location"
                                />
                            </div>
                        </div>
                        <div
                            class="flex flex-col gap-y-1.5 w-[86%] sm:w-[80%] md:w-[40%] xl:w-[30%] bg-app-bg rounded-l-md px-3 py-2 transition-length duration-200"
                        >
                            <span class="text-neutral-500 text-sm md:text-base lg:text-lg font-light">Disaster</span>
                            <div class="relative flex items-center">
                                <input
                                    id="disaster"
                                    type="text"
                                    class="block w-full py-2.5 sm:py-3 pl-4 tracking-wide text-sm md:text-base lg:text-lg text-gray-900 border border-gray-200 rounded-sm bg-gray-50 focus:ring-1 focus:ring-green-500 focus:border-green-500 focus:outline-none transition duration-200"
                                    placeholder="Select disaster"
                                />
                                <button
                                    type="submit"
                                    class="text-gray-400 hover:text-gray-500 absolute right-1.5 sm:right-2.5 bg-custom-color focus:outline-none font-medium rounded-lg text-sm md:text-base lg:text-lg px-3 py-1.5 sm:py-2 focus:ring-2 ring-neutral-200 transition duration-200"
                                >
                                    <div class="w-6 h-6">
                                        <IconsChevronY />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row gap-x-3 items-center justify-center w-full">
                        <div
                            class="flex flex-col gap-y-1.5 w-[86%] sm:w-[80%] md:w-[60%] bg-app-bg rounded-l-md px-3 py-2 transition-length duration-200"
                        >
                            <span class="text-neutral-500 text-sm md:text-base lg:text-lg font-light"
                                >Month of the Year</span
                            >
                            <div class="relative flex items-center">
                                <input
                                    id="dates"
                                    type="text"
                                    class="block w-full py-2.5 sm:py-3 pl-4 tracking-wide text-sm md:text-base lg:text-lg text-gray-900 border border-gray-200 rounded-sm bg-gray-50 focus:ring-1 focus:ring-green-500 focus:border-green-500 focus:outline-none transition duration-200"
                                    placeholder="Select date"
                                />
                                <button
                                    type="submit"
                                    class="text-gray-400 hover:text-gray-500 absolute right-1.5 sm:right-2.5 bg-custom-color focus:outline-none font-medium rounded-lg text-sm md:text-base lg:text-lg px-3 py-1.5 sm:py-2 focus:ring-2 ring-neutral-200 transition duration-200"
                                >
                                    <div class="w-6 h-6">
                                        <IconsChevronY />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-[86%] sm:w-[80%] md:w-[60%] lg:w-[30%] transition-length duration-200">
                        <button
                            @click="() => useRouter().push('/home')"
                            type="button"
                            class="w-full text-white bg-green-500 hover:bg-green-600 focus:bg-green-600 ring-2 ring-green-300 focus:ring-green-400 font-medium rounded-sm text-xl font-serif px-5 py-3 focus:outline-none transition duration-200"
                        >
                            Find Monitored Data
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
