import { AuthContext } from "@/context/auth.context";
import { Home, LogIn, OutdentIcon, Package, Settings, SignalIcon } from "lucide-react"
import { useContext, useState } from "react"
import { Link } from "react-router-dom";

export default function Header() {
    const { auth, setAuth } = useContext(AuthContext);

    console.log(">>> auth: ", auth);

    const items = [
        {
            label: "Trang chủ",
            key: "home",
            icon: <Home size={18} />
        },
        {
            label: "Sản phẩm",
            key: "products",
            icon: <Package size={18} />
        },
        {
            label: `Xin chào bạn ${auth?.user?.username}`,
            key: "subMenu",
            icon: <Settings size={18} />,
            children: [
                ...auth.isAuthenticated ? [
                    {
                        label: "Đăng xuất",
                        icon: <OutdentIcon size={18} />,
                        key: "login",
                        onClick: () => {
                            localStorage.removeItem("access_token");
                            setAuth({
                                isAuthenticated: false,
                                user: {
                                    username: "",
                                    email: "",
                                    role: "",
                                }
                            })
                        }
                    }
                ] : [
                    {
                        label: "Đăng nhập",
                        icon: <LogIn size={18} />,
                        key: "login",
                    },
                    {
                        label: "Đăng ký",
                        icon: <SignalIcon size={18} />,
                        key: "register",
                    },
                ]
            ]
        }
    ]

    const [currentPage, setCurrentPage] = useState('home');
    const [openSubMenu, setOpenSubMenu] = useState(false);

    const changePage = (key) => {
        setCurrentPage(key);
        setOpenSubMenu(false)
    }

    return (
        <div className="fixed top-0 flex items-center justify-between w-full h-20 bg-white shadow-sm z-50 px-6">
            {/* Logo */}
            <Link
                className="font-semibold text-2xl cursor-pointer"
                to={"/"}
            >
                FullStack
            </Link>

            {/* Navigation */}
            <ul className="flex items-center gap-6">
                {items.map(item => {
                    return item.children ? (
                        <li key={item.key} className="relative">
                            <button
                                onClick={() => setOpenSubMenu(!openSubMenu)}
                                className={`flex items-center gap-2 text-md transition-all duration-200 pb-2 text-gray-600 hover:text-gray-800 cursor-pointer hover:bg-slate-100`}
                            >
                                {item.icon}
                                {item.label}
                            </button>

                            {openSubMenu && (
                                <ul className="absolute right-0 w-40 rounded-md bg-white shadow-md">
                                    {item.children.map(child => (
                                        <li key={child.key}>
                                            <Link
                                                onClick={child.onClick}
                                                to={`/${child.key}`}
                                                className="flex items-center justify-start w-full px-3 py-2 text-md gap-3 hover:bg-gray-100 text-gray-600"
                                            >
                                                {child.icon}
                                                {child.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ) : (
                        <li key={item.key}>
                            <Link
                                to={`/${item.key}`}
                                onClick={() => changePage(item.key)}
                                className={`flex items-center gap-2 text-md transition-all duration-200 pb-2 ${currentPage === item.key
                                    ? "text-black font-medium border-b border-black"
                                    : "text-gray-600 hover:text-gray-700"
                                    }`}>
                                {item.icon}
                                {item.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}
