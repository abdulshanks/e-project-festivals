import Header from './Header';
import Sidebar from './Sidebar';
import "./../Styles/Layout.css"
export default function Layout({ children }) {
  return (
    <div className="layout-container">
      {/* <Header /> */}
      <div className="main-content">
        {/* <Sidebar /> */}
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
}
