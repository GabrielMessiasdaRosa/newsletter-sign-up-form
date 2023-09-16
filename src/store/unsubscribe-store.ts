"use client";
import { create } from "zustand";

type unsubscribeStoreType = {
  status: "idle" | "pending" | "success" | "error";
  updateStatus: (status: "idle" | "pending" | "success" | "error") => void;
  finished: boolean;
};

export const unsubscribeStore = create<unsubscribeStoreType>()((set) => ({
  status: "idle",
  updateStatus: (status) => {
    set({ status });
    if (status === "success" || status === "error") {
      set({ finished: true });
    }
  },
  finished: false,
}));
