import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table";
import { getAllUsers } from "@/utils/users.api";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await getAllUsers();
            if (!res?.message) {
                setUsers(res.data);
            } else {
                toast.error(`Unauthorized: ${res.message}`);
            }
        }

        fetchUsers();
    }, []);

    return (
        <div className="p-4 px-20">
            <h1 className="mb-4 font-semibold">
                Quản lý người dùng
            </h1>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Ảnh đại diện</TableHead>
                        <TableHead>ID</TableHead>
                        <TableHead>Tên người dùng</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Vai trò</TableHead>
                    </TableRow>
                </TableHeader>

                {/* <TableBody>
                    {users.map(user => (
                        <TableRow key={user._id}>
                            <TableCell>
                                <img
                                    src={user.avatar} alt="default-avatar"
                                    width="60px"
                                    className="rounded-full"
                                />
                            </TableCell>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                        </TableRow>
                    ))}
                </TableBody> */}
            </Table>
        </div>
    );
}
