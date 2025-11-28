import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar/Navbar";
import "./global.css";
import Footer from "@/components/Footer/Footer";
import GeoRedirect from "./geo-redirect";
export const dynamic = "force-dynamic";

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
      <script
  dangerouslySetInnerHTML={{
    __html: `
      (function () {
        // read prefix
        const prefix = localStorage.getItem("countryPrefix");
        if (!prefix) return;

        function updateLinks() {
          const links = document.querySelectorAll("a[href]");
          links.forEach(link => {
            const href = link.getAttribute("href");

            // Skip external links
            if (!href || href.startsWith("http")) return;

            // Skip phone and email
            if (href.startsWith("tel:") || href.startsWith("mailto:")) return;

            // Skip already-prefixed
            if (href.startsWith(prefix + "/") || href === prefix) return;

            // Skip if it already contains a country (like /in/...)
            const firstSeg = href.split("/")[1];
            const validCountries = ["in","us","de","ae","uk","ca","fr","au","sa","nl","my","qa","pl","it"];
            if (validCountries.includes(firstSeg)) return;

            // rewrite
            link.setAttribute("href", prefix + href);
          });
        }

        // Run on load
        document.addEventListener("DOMContentLoaded", updateLinks);

        // Run again if hydration changes DOM
        setTimeout(updateLinks, 1000);
        setTimeout(updateLinks, 3000);

      })();
    `,
  }}
/>

      <body>
        <GeoRedirect/>
        <Navbar />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
