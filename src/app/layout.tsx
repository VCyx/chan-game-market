import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="w-full h-full flex flex-col">
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  );
}
