export function estimateTokensFromText(text: string): number {
  const normalized = text.trim();

  if (normalized.length === 0) {
    return 0;
  }

  return Math.ceil(normalized.length / 4);
}