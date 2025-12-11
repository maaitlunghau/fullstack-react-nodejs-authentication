import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table";
import { getAllProducts } from "@/utils/products.api";
import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await getAllProducts();
            if (res) setProducts(res.data);
        }

        fetchProducts();
    }, []);

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
                    {products.map(item => (
                        <TableRow key={item._id}>
                            <TableCell>{item._id}</TableCell>
                            <TableCell>{item.proName}</TableCell>
                            <TableCell>{item.proPrice}</TableCell>
                            <TableCell>{item.proQuantity}</TableCell>
                            {item.proImageUrl ? (
                                <TableCell>
                                    <img
                                        src={item.proImageUrl} alt=""
                                        className="rounded-full max-w-15"
                                    />
                                </TableCell>
                            ) : (
                                <TableCell>N/A</TableCell>
                            )}
                            <TableCell>{item.isStock === true ? "Còn hàng" : "Đã hết hàng"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
