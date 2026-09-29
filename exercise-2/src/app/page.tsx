import { UpvoteButton } from './upvote-button';
export default function Home() {
  const initialCount = 0;
  return (
    <main>
      <h1>Optimistic Upvote Demo</h1><br/>
      <UpvoteButton initialCount={initialCount} />
    </main>
  );
}
