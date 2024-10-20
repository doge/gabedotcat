import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  darcula,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Code(
  { children, className, ref, ...rest }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >,
) {
  const match = /language-(\w+)/.exec(className || "");
  return match
    ? (
        <SyntaxHighlighter
          {...rest}
          PreTag="div"
          children={String(children).replace(/\n$/, "")}
          language={match[1]}
          style={darcula}
          customStyle={{borderRadius:".25rem"}}
        />
    )
    : (
      <>
        {children}
        <code {...rest} className={className}>
          {children}
        </code>
      </>
    );
}
