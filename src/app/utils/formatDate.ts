export default function formatDate(date: Temporal.PlainDate) {
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}