import AdminHeader from "@/components/AdminHeader";
import AdminSidebar from "@/components/AdminSidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
    return (
        <div>
            {/* Sidebar */}
            <AdminSidebar />

            {/* Main Content */}
            <main>
                {/* Header */}
                <AdminHeader />

                <Outlet />
            </main>
        </div>
    )
}
