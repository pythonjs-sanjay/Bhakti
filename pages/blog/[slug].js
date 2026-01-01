import Link from 'next/link';
import Head from 'next/head';
import { getPostData, getAllPostSlugs } from '../../lib/posts';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticPaths({ locales }) {
  const slugs = getAllPostSlugs();
  const paths = slugs.flatMap((slug) =>
    locales.map((locale) => ({
      ...slug,
      locale,
    }))
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Post({ postData }) {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{postData.title} - {t('site_title')}</title>
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
