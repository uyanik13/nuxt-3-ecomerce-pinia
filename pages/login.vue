<template>
  <div class="bg-gray-100">
    <div class="px-2 pb-4 my-6 lg:w-full lg:px-24">
      <div class="flex justify-center">
        <div class="w-full lg:w-8/12">
          <div class="py-6">
            <div
              class="
                flex
                max-w-sm
                mx-auto
                overflow-hidden
                bg-white
                rounded-lg
                shadow-lg
                lg:max-w-4xl
              "
            >
              <div
                class="hidden bg-center bg-cover lg:block lg:w-1/2"
                :style="`background-image: url('');`"
              ></div>
              <div class="w-full p-8 lg:w-1/2">
                <h2 class="text-2xl font-semibold text-center text-gray-700">
                  Login
                </h2>

                <div class="flex w-full space-x-2">
                  <button
                    ref="googleButton"
                    @click="authProvider('google')"
                    class="
                      flex
                      items-center
                      w-1/2
                      justify-center
                      mt-4
                      text-white
                      rounded-lg
                      shadow-md
                      hover:bg-gray-100
                    "
                  >
                    <div class="px-4 py-3">
                      <svg class="w-6 h-6" viewBox="0 0 40 40">
                        <path
                          d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                          fill="#FFC107"
                        />
                        <path
                          d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                          fill="#FF3D00"
                        />
                        <path
                          d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                          fill="#4CAF50"
                        />
                        <path
                          d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                          fill="#1976D2"
                        />
                      </svg>
                    </div>
                    <p
                      class="
                        w-5/6
                        px-4
                        py-3
                        font-bold
                        text-center text-gray-600
                      "
                    >
                      Google
                    </p>
                  </button>
                  <button
                    class="
                      flex
                      items-center
                      w-1/2
                      justify-center
                      mt-4
                      text-white
                      rounded-lg
                      shadow-md
                      hover:bg-gray-100
                    "
                  >
                    <div class="px-4 py-3">
                      <svg
                        class="fill-current w-8 h-8"
                        viewBox="0 0 112.197 112.197"
                        style="enable-background: new 0 0 112.197 112.197"
                        xml:space="preserve"
                      >
                        <g>
                          <circle
                            style="fill: #55acee"
                            cx="56.099"
                            cy="56.098"
                            r="56.098"
                          />
                          <g>
                            <path
                              style="fill: #f1f2f2"
                              d="M90.461,40.316c-2.404,1.066-4.99,1.787-7.702,2.109c2.769-1.659,4.894-4.284,5.897-7.417
			c-2.591,1.537-5.462,2.652-8.515,3.253c-2.446-2.605-5.931-4.233-9.79-4.233c-7.404,0-13.409,6.005-13.409,13.409
			c0,1.051,0.119,2.074,0.349,3.056c-11.144-0.559-21.025-5.897-27.639-14.012c-1.154,1.98-1.816,4.285-1.816,6.742
			c0,4.651,2.369,8.757,5.965,11.161c-2.197-0.069-4.266-0.672-6.073-1.679c-0.001,0.057-0.001,0.114-0.001,0.17
			c0,6.497,4.624,11.916,10.757,13.147c-1.124,0.308-2.311,0.471-3.532,0.471c-0.866,0-1.705-0.083-2.523-0.239
			c1.706,5.326,6.657,9.203,12.526,9.312c-4.59,3.597-10.371,5.74-16.655,5.74c-1.08,0-2.15-0.063-3.197-0.188
			c5.931,3.806,12.981,6.025,20.553,6.025c24.664,0,38.152-20.432,38.152-38.153c0-0.581-0.013-1.16-0.039-1.734
			C86.391,45.366,88.664,43.005,90.461,40.316L90.461,40.316z"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p
                      class="
                        w-5/6
                        px-4
                        py-3
                        font-bold
                        text-center text-gray-600
                      "
                    >
                      Twitter
                    </p>
                  </button>
                </div>
                <div class="flex items-center justify-between mt-4">
                  <span class="w-1/5 border-b lg:w-1/4"></span>
                  <a class="text-xs text-center text-gray-500 uppercase"
                    >or login with email</a
                  >
                  <span class="w-1/5 border-b lg:w-1/4"></span>
                </div>
                <div class="mt-4">
                  <label>Email or Username</label>
                  <input
                    v-model="loginForm.email"
                    class="custom-input-2"
                    type="email"
                  />
                </div>
                <div class="mt-4">
                  <div class="flex justify-between">
                    <label>Password</label>
                  </div>
                  <input
                    v-model="loginForm.password"
                    class="custom-input-2"
                    type="password"
                  />
                </div>
                <div class="mt-8 text-center">
                  <button class="btn-primary">Login</button>
                </div>
                <div class="flex items-center justify-between mt-4">
                  <div class="grid mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const nuxtApp = useNuxtApp();
const googleButton = ref(null);
const gapiAuthSetings = ref({
  clientId: nuxtApp.$config.GOOGLE_OAUTH_CLIENT_ID,
  scope: "profile email",
  prompt: "select_account",
  fetch_basic_profile: false,
  // prompt: 'consent',
});

onBeforeMount(() => {
  if (!window.gapi) {
    return;
  } else {
    // Sign in the user if they are currently signed in.
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init(gapiAuthSetings.value).then(() => {
        if (
          window.gapi.auth2.getAuthInstance().isSignedIn.get() &&
          localStorage.getItem("currentUser") != null &&
          localStorage.getItem("token") != null &&
          localStorage.getItem("isSignedInWithGoogle")
        ) {
          console.log("user active");
        } else {
          authProvider();
        }
      });
    });
    //
  }
});

const authProvider = async (provider) => {
  if (process.client) {
    window.gapi.auth2.init(gapiAuthSetings.value).then((auth2) => {
      auth2.attachClickHandler(
        googleButton.value,
        {},
        () => {
          onSuccess(window.gapi.auth2.getAuthInstance().currentUser.get());
        },
        (error) => {
          if (error.error == "popup_closed_by_user")
            console.error("User has closed google authentication popup");
        }
      );
    });
  }
};

const onSuccess = (user) => {
  console.log(user);
  console.log(user.getBasicProfile().getName());
};

const loginForm = {
  email: "",
  password: "",
};
</script>
