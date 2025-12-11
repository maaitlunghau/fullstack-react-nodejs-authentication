import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table";

export default function Products() {
    return (
        <div className="p-4 px-20">
            <h1 className="mb-4 font-semibold">
                Quản lý sản phẩm
            </h1>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Tên sản phẩm</TableHead>
                        <TableHead>Giá tiền</TableHead>
                        <TableHead>Số lượng</TableHead>
                        <TableHead>Hình sản phẩm</TableHead>
                        <TableHead>Tình trạng</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>#1</TableCell>
                        <TableCell>John</TableCell>
                        <TableCell>1300</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>
                            <img
                                src="https://i.pinimg.com/736x/b9/12/be/b912be58fd415901f4cb65e084b6b337.jpg" alt=""
                                width="60px"
                                className="rounded-full"
                            />
                        </TableCell>
                        <TableCell>Còn hàng</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
