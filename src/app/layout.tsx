import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar/Navbar";
import "./global.css";
import Footer from "@/components/Footer/Footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/faviconPerfect.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/* ---gtag--- */}
      </head>
      <body>
        <Navbar />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
