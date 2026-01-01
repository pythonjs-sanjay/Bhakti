import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      allPostsData,
    },
  };
}

export default function BlogIndex({ allPostsData }) {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('blog_page_title')} - {t('site_title')}</title>
      </Head>
      <div className="page-header">
        <div className="container">
            <h1>{t('blog_page_title')}</h1>
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
                      <Link href={`/blog/${slug}`} className="read-more" dangerouslySetInnerHTML={{ __html: t('read_more') }} />
                  </div>
              </div>
            ))}
          </div>
      </div>
    </>
  );
}