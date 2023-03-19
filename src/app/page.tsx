import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Card from "@/components/Card/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-3xl font-bold underline co">Hello world!</h1>

      <Card />
    </main>
  );
}
