import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
        <Head>
            <title>First Page</title>
        </Head>
        <img style={{height:'144px', width: '144px'}} src="/images/profile.jpg" alt="My Name" />
        <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
        <h1>First Post</h1>
        <h2>
        <Link href='/'>Back to home page</Link>

        </h2>
        </Layout>
        )
};