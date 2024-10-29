'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div >
        <h1>
          Hello World
        </h1>
        {/* Additional content can go here */}
      </div>
    </Layout>
  );
}
