import "./../Styles/Header.css"


export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <li>Topic Suggestions</li>
        <li>Interactive Features</li>
        <li>Accessibility Options</li>
        <li>Support Resources</li>
      </ul>
      <div className="sidebar-auth">
        <button>Sign in to sync features</button>
        <a href="/signin">Sign in</a>
      </div>
    </aside>
  );
}
