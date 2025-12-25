import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function BlogIndex({ allPostsData }) {
  return (
    <>
      <Head>
        <title>ब्लॉग - वैदिक परंपरा</title>
      </Head>
      <div className="page-header">
        <div className="container">
            <h1>ब्लॉग</h1>
        </div>
      </div>
      <div className="blog-list-section">
          <div className="container">
            {allPostsData.map(({ slug, date, title, excerpt }) => (
              <div className="blog-card" key={slug}>
                  <div className="blog-card-content">
                      <h2><Link href={`/blog/${slug}`}>{title}</Link></h2>
                      <small style={{display: 'block', marginBottom: '10px', color: '#777'}}>{date}</small>
                      <p>{excerpt}</p>
                      <Link href={`/blog/${slug}`} className="read-more">पूरा पढ़ें &rarr;</Link>
                  </div>
              </div>
            ))}
          </div>
      </div>
    </>
  );
}