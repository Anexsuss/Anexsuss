import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';

export default function BlogPost({ content, metadata }) {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{metadata.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{metadata.date}</p>
      <ReactMarkdown className="prose prose-lg">{content}</ReactMarkdown>
    </div>
  );
}

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'pages/posts');
  const filenames = fs.readdirSync(postsDir).filter(name => name.endsWith('.md'));

  const paths = filenames.map(name => ({
    params: { slug: name.replace(/\.md$/, '') }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'pages/posts', `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    props: {
      content,
      metadata: data
    }
  };
}
