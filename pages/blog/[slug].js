import Link from 'next/link';
import Head from 'next/head';
import { getPostData, getAllPostSlugs } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title} - वैदिक परंपरा</title>
      </Head>
      <div className="post-section">
        <Link href="/blog" className="floating-back-button">
          &larr;
        </Link>
        <div className="container post-container">
          <h1 className="post-title">{postData.title}</h1>
          <div className="post-meta" style={{textAlign: 'center', marginBottom: '40px', color: '#777'}}>
            <span>{postData.date}</span>
          </div>
          <div className="post-content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </div>
    </>
  );
}
