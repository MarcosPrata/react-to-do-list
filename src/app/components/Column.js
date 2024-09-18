export default function Column({ children, columnName }) {
  return (
    <div className="flex flex-col mx-4">
      <div>{columnName}</div>
      <div>{children}</div>
    </div>
  );
}
