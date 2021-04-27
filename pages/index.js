import Head from "next/head";
import styles from "../styles/Home.module.css";
import AppBar from "../src/components/AppBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <AppBar />
    </div>
  );
}
