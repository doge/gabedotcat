import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import Code from "../components/MarkdownComponents/Code";
import { MarkdownComponents } from "../components/MarkdownComponents/MarkdownComponents";

export default function BlogContent() {
  let { blogId } = useParams();

  const markdown = `
  # How I Created a Blog using Rust and React
  ### 2024-10-19
  A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done

  ~~~rust
  fn foo() -> &str {
    // this is a comment inside of a function
    'bar'
  }
  ~~~

  ## Crazy
  > It's crazy times we live in.

  ![code-picture](https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg)
  `;

  return (
    <>
      <body>
        <Markdown
          children={markdown}
          remarkPlugins={[remarkGfm]}
          components={MarkdownComponents}
        />
      </body>
    </>
  );
}
