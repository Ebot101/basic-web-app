export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your name")) {
    return ("Eyob");
  }

  const numbersRegex = /\b\d+\b/g; // Regular expression to match numbers

  const numbers = query.match(numbersRegex);
  
  if (numbers && numbers.length >= 2) {
    const largestNumber = Math.max(...numbers.map(Number));
    return `${largestNumber}.`;
  }
  return "";
}
