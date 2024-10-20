export default function Link(
  { children }: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
) {
  return (
    <>
      <a className="hover:underline font-medium hover:cursor-pointer">
        {children}
      </a>
    </>
  );
}
