import React from "react";
import "../styles/globals.css";
import {Layout}  from "../components"// Make sure this file exists for global styles

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
  <Component {...pageProps} />
  </Layout>
  );
}
