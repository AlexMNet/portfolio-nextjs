import ReactMarkdown from 'react-markdown';
import CodeBlock from './codeblock';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';

export default function MarkdownWrapper({ children }) {
  return (
    <ReactMarkdown
      components={CodeBlock}
      className='prose prose-quoteless dark:prose-dark  md:prose-xl  prose-a:text-blue-500 hover:prose-a:text-blue-600 dark:prose-a:text-blue-500 dark:hover:prose-a:text-blue-600'
      rehypePlugins={[rehypeRaw, rehypeSlug]}
    >
      {children}
    </ReactMarkdown>
  );
}
