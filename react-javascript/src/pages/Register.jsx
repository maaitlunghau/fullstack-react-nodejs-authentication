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

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Link, useNavigate } from "react-router-dom"
import { ChevronLeftIcon } from "lucide-react"
import { registerUser } from "@/utils/auth.api"
import { useState } from "react"
import { toast } from "sonner";

export default function Register() {
    const [dataSubmit, setDataSubmit] = useState({
        username: "",
        email: "",
        password: "",
        role: ""
    })

    const navigate = useNavigate();

    const handleInputChange = async (e) => {
        const { name, value } = e.target;

        setDataSubmit((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(dataSubmit);

        try {
            await registerUser(dataSubmit);

            toast.success("Registered successfully");
            navigate("/login");
        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <div className="mx-auto mt-9 max-w-md flex flex-col gap-5">
            {/* Back Navigation */}
            <Link
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                to={"/"}
            >
                <ChevronLeftIcon size={16} />
                Quay lại trang chủ
            </Link>

            {/* Form */}
            <form onSubmit={handleSubmit}>
                <FieldSet>
                    <FieldLegend>Đăng ký</FieldLegend>

                    <FieldGroup>
                        {/* Username */}
                        <Field>
                            <FieldLabel>Họ và tên</FieldLabel>
                            <FieldContent>
                                <Input
                                    name="username" placeholder="Nguyễn Văn A"
                                    value={dataSubmit.username}
                                    onChange={handleInputChange}
                                />
                            </FieldContent>
                            <FieldError />
                        </Field>

                        {/* Email */}
                        <Field>
                            <FieldLabel>Email</FieldLabel>
                            <FieldContent>
                                <Input
                                    name="email" placeholder="abc@gmail.com"
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

                        {/* Role */}
                        <Field>
                            <FieldLabel>Vai trò</FieldLabel>
                            <FieldContent>
                                <Select
                                    name="role"
                                    value={dataSubmit.role}
                                    onValueChange={(value) => setDataSubmit((prev) => ({ ...prev, role: value }))}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Chọn vai trò" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="admin">Admin</SelectItem>
                                        <SelectItem value="user">User</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FieldContent>
                            <FieldError />
                        </Field>

                    </FieldGroup>

                    <Button type="submit" className="w-full h-11 cursor-pointer">
                        Đăng ký
                    </Button>
                </FieldSet>

                {/* Footer Form */}
                <div className="flex items-center justify-between mt-3">
                    <div className="flex gap-2">
                        <input className="cursor-pointer" type="checkbox" name="" id="" /> Ghi nhớ tôi
                    </div>
                    <Link
                        to={"/login"}
                        className="text-gray-600 hover:underline cursor-pointer"
                    >
                        Bạn đã có tài khoản?
                    </Link>
                </div>
            </form>
        </div >
    )
}
