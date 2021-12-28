<template>
  <header class="block bg-white">
    <div
      id="header"
      class="w-auto lg:w-full border-b border-gray-200 shadow-sm h-15"
    >
      <div
        id="topbar"
        class="
          justify-between
          hidden
          lg:px-24
          py-2
          mx-auto
          bg-secondary
          sm:block
          md:block
          lg:flex
        "
      ></div>
      <div
        class="
          flex
          lg:container
          items-center
          py-4
          mx-auto
          border-gray-300
          lg:px-24
          border-b-default
          lg:border-none
        "
      >
        <!-- LOGO -->

        <NuxtLink to="/">
          <div id="logo" class="flex w-8 mx-2 md:w-60 lg:mx-8 lg:w-64">
            <IconsShoppingcart />
            <p
              class="
                mt-2
                ml-2
                text-5.5
                font-sans font-bold
                hidden
                md:flex
                lg:block
              "
            >
              Nuxt 3 Ecommerce
            </p>
          </div>
        </NuxtLink>

        <div id="search" class="w-10/12 md:w-6/12 lg:w-8/12 sm:w-full">
          <!-- SEARCH INPUT -->
          <StaticSearch />
        </div>

        <!-- QUICK MENU -->
        <div id="quick-menu" class="lg:flex mx-2 md:w-6/12 lg:w-6/12 sm:w-full">
          <ul class="flex list-none items-center">
            <li
              class="mx-3 hidden lg:block"
              v-for="item in quickMenu"
              :key="item.id"
            >
              <div
                class="grid items-center text-gray-800 hover:text-orange-500"
              >
                <nuxt-link :to="item.slug" class="text-4">{{
                  item.title
                }}</nuxt-link>
              </div>
            </li>
            <div class="flex justify-start items-start">
              <div class="relative">
                <nuxt-link
                  to="/basket"
                  @mouseover="showCartItems = !showCartItems"
                  @blur="showCartItems = false"
                  class="flex flex-row cursor-pointer truncate p-2 px-4 rounded"
                >
                  <div class="flex flex-row-reverse ml-2 w-full">
                    <div class="relative">
                      <div
                        class="
                          absolute
                          text-xs
                          rounded-full
                          -mt-1
                          -mr-2
                          px-1
                          font-bold
                          top-0
                          right-0
                          bg-red-700
                          text-white
                        "
                      >
                        {{ cart.cartItems.length }}
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-shopping-cart w-6 h-6 mt-2"
                      >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path
                          d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </nuxt-link>
                <div
                  v-if="showCartItems"
                  class="absolute w-full rounded-b border-t-0 z-99"
                >
                  <div class="shadow-xl w-64">
                    <div
                      v-for="item in cart.cartItems"
                      :key="item.id"
                      class="
                        p-2
                        flex
                        bg-white
                        hover:bg-gray-100
                        cursor-pointer
                        border-b border-gray-100
                      "
                      style=""
                    >
                      <div class="p-2 w-12">
                        <img :src="item.image" alt="img product" />
                      </div>
                      <div class="flex-auto text-sm w-32">
                        <div class="font-bold truncate">
                          {{ item.title }}
                        </div>
                        <span class="text-3.5 text-seconday font-semibold">
                          {{ item.price }}</span
                        >
                      </div>
                      <div class="flex flex-col w-18 font-medium items-end">
                        <div
                          class="
                            w-4
                            h-4
                            mb-6
                            hover:bg-red-200
                            rounded-full
                            cursor-pointer
                            text-red-700
                          "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-trash-2"
                          >
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path
                              d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                            ></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-start items-start lg:hidden">
              <div class="relative">
                <div
                  @mouseover="showMenu = !showMenu"
                  @blur="showMenu = false"
                  class="flex flex-row cursor-pointer truncate p-2 px-4 rounded"
                >
                  <div class="flex flex-row-reverse ml-2 w-full">
                    <div class="relative">
                      <svg
                        class="fill-current w-8 h-8"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#000"
                          d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  v-if="showMenu"
                  class="absolute w-full rounded-b border-t-0 z-99"
                >
                  <div class="shadow-xl w-32">
                    <div
                      v-for="item in quickMenu"
                      :key="item.id"
                      class="
                        p-2
                        flex
                        bg-white
                        hover:bg-gray-100
                        cursor-pointer
                        border-b border-gray-100
                      "
                      style=""
                    >
                      <nuxt-link :to="item.slug" class="flex-auto text-sm w-32">
                        <div class="font-bold">{{ item.title }}</div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>

    <!-- MAIN MENU -->
  </header>
</template>
<script setup lang="ts">
import { useCart } from "@/store/cart";

const cart = useCart();
const showHistory = ref([]);
const showCartItems = ref(false);
const showMenu = ref(false);
//const showHistory = useState("showHistory", () => []);
const quickMenu = ref([
  {
    id: 1,
    title: "Login",
    slug: "login",
  },
  {
    id: 2,
    title: "Favorites",
    slug: "my-favorites",
  },
]);
</script>
