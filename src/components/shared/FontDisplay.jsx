"use client"
import { Playfair_Display, Poppins  } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })


export const fonts = {playfair, poppins}
