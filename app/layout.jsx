import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import localfont from "next/font/local";
import Footer from "../components/footer/footer";
import Header from "@/components/header/header";

import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";
import ReduxToolkitProvider from "@/utils/ReduxToolkitProvider";


const PinarFont = localfont({
  src: "../public/fonts/Pinar-FD-VF.woff2",
});

export const metadata = {
  title: {
    template: '%s | کلاکت 360',
    default: 'کلاکت 360 | سریال ایرانی',
  },
  description: "مرجع سریال های ایرانی",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="fa">
      <body className={PinarFont.className}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <SessionProvider session={session}>
          <ReduxToolkitProvider>
            <Header />
            {children}
            <Footer />
          </ReduxToolkitProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
