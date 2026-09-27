import PreviewButton from "./PreviewButton";
export default async function DemoPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
  const items=await response.json();
  return (
    <div>
      {items.map((item: any) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <PreviewButton item={item} />
        </div>
      ))}
    </div>
  );
}