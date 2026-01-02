export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray: T[] = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1));
    // biome-ignore lint/style/noNonNullAssertion: <explanation> The non-null assertion is safe here because j is always less than or equal to i, which is always a valid index in the array. </explanation>
    [newArray[i], newArray[j]] = [newArray[j]!, newArray[i]!];
  }
  return newArray;
};
