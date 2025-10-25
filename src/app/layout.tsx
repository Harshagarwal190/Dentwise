// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";
// import UserSync from "@/components/UserSync";
// import TanStackProvider from "@/components/providers/TanStackProvider";
// import { Toaster } from "sonner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "DentWise - AI Powered Dental Assistant",
//   description:
//     "Get instant dental advice through voice calls with our AI assistant. Avaiable 24/7.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <TanStackProvider>
//       <ClerkProvider
//         appearance={{
//           variables: {
//             colorPrimary: "#e78a53",
//             colorBackground: "#f3f4f6",
//             colorText: "#111827",
//             colorTextSecondary: "#6b7280",
//             colorInputBackground: "#f3f4f6",
//           },
//         }}
//       >
//         <html lang="en">
//           <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
//             {/* this is done in the home page component */}
//             {/* <UserSync /> */}
//             <Toaster />
//             {children}
//           </body>
//         </html>
//       </ClerkProvider>
//     </TanStackProvider>
//   );
// }

// ...existing code...
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import UserSync from "@/components/UserSync";
import TanStackProvider from "@/components/providers/TanStackProvider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentWise - AI Powered Dental Assistant",
  description:
    "Get instant dental advice through voice calls with our AI assistant. Available 24/7.",
  themeColor: "#f3f4f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanStackProvider>
      <ClerkProvider
        appearance={{
          variables: {
            colorPrimary: "#e78a53",
            colorBackground: "#f3f4f6",
            colorText: "#111827",
            colorTextSecondary: "#6b7280",
            colorInputBackground: "#f3f4f6",
          },
        }}
      >
        <html lang="en" className="antialiased">
          <body className={`${geistSans.variable} ${geistMono.variable} dark`}>
            {/* accessibility: skip link */}
            <a
              href="#content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 rounded bg-white px-3 py-2 shadow"
            >
              Skip to content
            </a>

            {/* keep user synchronization at the app root so auth state stays in sync */}
            <UserSync />

            {/* global toaster */}
            <Toaster position="top-right" />

            {/* main content area */}
            <main id="content" className="min-h-screen">
              {children}
            </main>

            {/* optional global footer / analytics can be added here */}
          </body>
        </html>
      </ClerkProvider>
    </TanStackProvider>
  );
}
// ...existing code...