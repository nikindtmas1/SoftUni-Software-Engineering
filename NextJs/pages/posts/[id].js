import Layout from "../../components/layout";
import { getAllPostIds } from "../../lib/posts";

export default function Post() {
    <Layout>

    </Layout>
};

export async function getStaticPaths() {
    // Return a list of possible value for id
  };

  export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
  };

  export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }