// app/layout.tsx
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes"; // brinjal customization below
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#7965C1", // brinjal color
          colorText: "#ffffff",
        },
      }}
    >
      <html lang="en">
        <body>
          <Navbar />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
