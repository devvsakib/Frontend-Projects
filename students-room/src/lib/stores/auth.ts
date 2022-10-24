import type { User } from "firebase/auth";
import { writable } from "svelte/store";

export const defaultAuth = {
  user: null,
  uid: "",
};

export const authStore = writable<{
  user?: User;
  uid: string;
}>({
  user: null,
  uid: "",
});
