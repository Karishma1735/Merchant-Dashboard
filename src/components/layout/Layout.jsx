import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

export default function Layout({ children, currentPage, setCurrentPage, sidebarOpen, setSidebarOpen }) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} isOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} currentPage={currentPage} />
        <main className="flex-1 overflow-auto bg-background">{children}</main>
      </div>
    </div>
  )
}
