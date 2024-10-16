export default function Container(props: React.PropsWithChildren) {
  return (
    <div className="p-2">
      {props.children}
    </div>
  );
}
