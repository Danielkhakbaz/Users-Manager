import type { Metadata } from "next";
import Navbar from "layout/navbar/navbar";
import AuthProvider from "app/api/auth-provider";
import "styles/globals.css";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Users Manager",
  description: "This website is created by next13 as the full-stack framework.",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
