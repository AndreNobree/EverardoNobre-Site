import localFont from "next/font/local";

export const inter = localFont({
  src: [
    {
      path: "./fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf",
      weight: "700",
    },
  ],
});

export const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "700",
    },
  ],
});
