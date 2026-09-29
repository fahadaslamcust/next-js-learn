'use server';
let realCount = 0;// Simulated database
export async function incrementUpvotes() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  realCount += 1;
  return realCount;
}