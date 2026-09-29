'use client';
import { useOptimistic, useTransition } from 'react';
import { incrementUpvotes } from './actions';
type Props = {
  initialCount: number;
};
export function UpvoteButton({ initialCount }: Props) {
  const [isPending, startTransition] = useTransition();
  const [optimisticCount, addOptimistic] = useOptimistic(
    initialCount,
    (currentCount: number, optimisticValue: number) => currentCount + optimisticValue
  );
  const handleClick = () => {
    startTransition(async () => {
      addOptimistic(1);
      await incrementUpvotes();
    });
  };
  return (
    <button
      onClick={handleClick}
      disabled={isPending}
    >
      👍 {optimisticCount}
      {isPending}
    </button>
  );
}