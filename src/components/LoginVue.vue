<template>
  <div style="min-height: 95vh" class="my-auto flex">
    <div class="p-10 card bg-base-200 m-auto w-96">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Username</span>
        </label>
        <input
          placeholder="Your username: Bret"
          class="input"
          type="text"
          v-model="credential.username"
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input
          placeholder="Your password: Leanne Graham"
          class="input"
          type="password"
          v-model="credential.password"
        />
      </div>
      <div class="form-control mt-4">
        <button class="btn btn-primary" type="submit" @click.prevent="showMe">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "@nanostores/vue";
import { isLoggedIn, checkLogin } from "../stores/user.js";

export default {
  setup() {
    const loginStatus = useStore(isLoggedIn);

    const credential = ref({
      username: "",
      password: "",
    });

    const showMe = async () => {
      await checkLogin({
        username: credential.value.username,
        password: credential.value.password,
      });

      if (isLoggedIn.get()) {
        console.log("Success to Logged in, redirecting ...");
        window.location.replace("http://localhost:3000/");
      } else {
        console.log("Login Failed...");
      }
    };

    return {
      loginStatus,
      credential,
      showMe,
    };
  },
};
</script>

<style></style>
