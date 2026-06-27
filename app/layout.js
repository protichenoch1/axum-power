import "../styles/globals.css";
import BottomNav from "../components/BottomNav";

export const metadata = {
  title: "Axum Power",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
