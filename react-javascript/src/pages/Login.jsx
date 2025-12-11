import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
    FieldSet,
    FieldLegend,
    FieldGroup,
    Field,
    FieldLabel,
    FieldContent,
    FieldError,
} from "@/components/ui/field"
import { Link, useNavigate } from "react-router-dom"
import { ChevronLeftIcon } from "lucide-react"
import { toast } from "sonner";
import { loginUser } from "@/utils/auth.api"
import { useContext, useState } from "react"
import { AuthContext } from "@/context/auth.context"

export default function Login() {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const [dataSubmit, setDataSubmit] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        setDataSubmit((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await loginUser(dataSubmit);

            if (res && res.code === 0) {
                localStorage.setItem("access_token", res.accessToken);
                setAuth({
                    isAuthenticated: true,
                    user: {
                        username: res?.user?.username ?? "",
                        email: res?.user?.email ?? "",
                        role: res?.user?.role ?? "",
                    }
                })

            } else {
                toast.error(res.message);
            }

            toast.success("Login user successfully");
            navigate("/");

        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <div className="mx-auto mt-20 max-w-md flex flex-col gap-5">
            {/* Back Navigation */}
            <Link
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                to={"/"}
            >
                <ChevronLeftIcon size={16} />
                Quay lại trang chủ
            </Link>

            <form onSubmit={handleSubmit}>
                <FieldSet>
                    <FieldLegend>Đăng nhập</FieldLegend>

                    <FieldGroup>
                        {/* Email */}
                        <Field>
                            <FieldLabel>Email</FieldLabel>
                            <FieldContent>
                                <Input
                                    name="email"
                                    placeholder="abc@gmail.com"
                                    value={dataSubmit.email}
                                    onChange={handleInputChange}
                                />
                            </FieldContent>
                            <FieldError />
                        </Field>

                        {/* Password */}
                        <Field>
                            <FieldLabel>Mật khẩu</FieldLabel>
                            <FieldContent>
                                <Input
                                    name="password"
                                    type="password"
                                    placeholder="••••••••"
                                    value={dataSubmit.password}
                                    onChange={handleInputChange}
                                />
                            </FieldContent>
                            <FieldError />
                        </Field>
                    </FieldGroup>

                    <Button type="submit" className="w-full h-11 cursor-pointer">
                        Login
                    </Button>
                </FieldSet>
            </form>

            <div className="flex items-center justify-between mt-3">
                <div className="flex gap-2">
                    <input className="cursor-pointer" type="checkbox" name="" id="" /> Ghi nhớ tôi
                </div>
                <Link
                    to={"/register"}
                    className="text-gray-600 hover:underline cursor-pointer"
                >
                    Bạn chưa có tài khoản?
                </Link>
            </div>
        </div >
    )
}
