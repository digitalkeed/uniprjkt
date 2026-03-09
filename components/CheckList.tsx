export default function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item, i) => (
        <li key={i} className="check-item">
          <svg viewBox="0 0 16 16" fill="none">
            <path
              d="M2 8l4.5 4.5L14 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
