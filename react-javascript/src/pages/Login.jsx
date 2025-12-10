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
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "lucide-react"

export default function Login() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="mx-auto mt-20 max-w-md flex flex-col gap-5">
            {/* Back Navigation */}
            <Link
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                to={"/"}
            >
                <ChevronLeftIcon size={16} />
                Back to home
            </Link>

            <form onSubmit={handleSubmit}>
                <FieldSet>
                    <FieldLegend>Đăng nhập</FieldLegend>

                    <FieldGroup>
                        {/* Email */}
                        <Field>
                            <FieldLabel>Email</FieldLabel>
                            <FieldContent>
                                <Input name="email" placeholder="abc@gmail.com" />
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
                    Bạn đã quên mật khẩu?
                </Link>
            </div>
        </div >
    )
}
