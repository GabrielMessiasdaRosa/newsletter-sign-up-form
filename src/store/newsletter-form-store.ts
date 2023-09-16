"use client";
import { create } from "zustand";

type newsletterFormStoreType = {
  status: "idle" | "pending" | "success" | "error";
  updateStatus: (status: "idle" | "pending" | "success" | "error") => void;
  finished: boolean;
  data?: any;
  setData: (data: any) => void;
};

export const newsletterFormStore = create<newsletterFormStoreType>()((set) => ({
  status: "idle",
  updateStatus: (status) => {
    set({ status });
    if (status === "success" || status === "error") {
      set({ finished: true });
    }
  },
  data: undefined,
  setData: (data) => set({ data }),
  finished: false,
}));
