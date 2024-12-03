const stop = [
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "but",
  "by",
  "for",
  "if",
  "in",
  "into",
  "is",
  "it",
  "no",
  "not",
  "of",
  "on",
  "or",
  "such",
  "that",
  "the",
  "their",
  "then",
  "there",
  "these",
  "they",
  "this",
  "to",
  "was",
  "will",
  "with",
  "here",
  "who",
  "its",
  "what",
  "where",
  "when",
  "why",
  "whats",
  "we",
  "how"
];

export default function tokenize(str) {
  return str
    ?.toLowerCase()
    .split(/\s+/)
    .map((d) => d.replace(/[^a-z]/g, ""))
    .filter((d) => d && !stop.includes(d));
}
