import localFont from "next/font/local";
import "./global.css";

const poppins = localFont({
  src: [
    { path: "./fonts/Poppins-Thin.ttf", weight: "100", style: "normal" },
    { path: "./fonts/Poppins-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "./fonts/Poppins-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Poppins-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Poppins-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Poppins-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Poppins-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./fonts/Poppins-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./fonts/Poppins-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-poppins", // Allows using in CSS
});

export const metadata = {
  title: "Learning Journal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
