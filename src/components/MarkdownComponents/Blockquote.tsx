export default function Blockquote(
  { children }: React.DetailedHTMLProps<
    React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  >,
) {
  return (
    <>
      <div className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 rounded-md">
        {children}
      </div>
    </>
  );
}
