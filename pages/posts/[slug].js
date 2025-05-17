import { getAllPostSlugs, getPostData } from '../../lib/posts';
import ReactMarkdown from 'react-markdown';

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.slug);
  return {
    props: {
      postData
    }
  };
}

export default function Post({ postData }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>{postData.title}</h1>
      <small>{postData.date}</small>
      <hr />
      <ReactMarkdown>{postData.content}</ReactMarkdown>
    </div>
  );
}
