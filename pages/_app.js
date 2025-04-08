import "tailwindcss/tailwind.css";
import "../styles/global.css";
import splitbee from "@splitbee/web";
export const runtime = "edge";
function MyApp({ Component, pageProps }) {
  splitbee.init({
    scriptUrl: "/bee.js",
    apiUrl: "/_hive",
  });
  return <Component {...pageProps} />;
}

export default MyApp;
