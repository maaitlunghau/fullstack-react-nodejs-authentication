import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table";

export default function User() {
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
                        <TableHead>Mật khẩu</TableHead>
                        <TableHead>Vai trò</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>
                            <img
                                src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg" alt=""
                                width="60px"
                                className="rounded-full"
                            />
                        </TableCell>
                        <TableCell>#1</TableCell>
                        <TableCell>John</TableCell>
                        <TableCell>john@gmail.com</TableCell>
                        <TableCell>gwhgwobtkwbgkwghkwbfgkw43875934</TableCell>
                        <TableCell>Admin</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
