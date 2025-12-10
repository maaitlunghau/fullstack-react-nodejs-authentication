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
        <div className="p-4 border px-20">
            <h1 className="mb-4 font-semibold">
                Products
            </h1>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Quantity</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>#1</TableCell>
                        <TableCell>John</TableCell>
                        <TableCell>1300</TableCell>
                        <TableCell>5</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>#1</TableCell>
                        <TableCell>John</TableCell>
                        <TableCell>1300</TableCell>
                        <TableCell>5</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>#1</TableCell>
                        <TableCell>John</TableCell>
                        <TableCell>1300</TableCell>
                        <TableCell>5</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
