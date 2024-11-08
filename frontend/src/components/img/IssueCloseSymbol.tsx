export default function IssueCloseSymbol({
  height = '16',
  color = '#000',
}) {
  return (
    <svg
      aria-hidden="true"
      height={height}
      style={{ width: 'auto' }}
      viewBox="0 0 16 16"
      version="1.1"
      data-view-component="true"
      className="octicon octicon-issue-closed flex-items-center mr-1"
    >
      <path d="M11.28 6.78a.75.75 0 0 0-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l3.5-3.5Z" fill={color}></path>
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z" fill={color}></path>
    </svg>
  );
}
