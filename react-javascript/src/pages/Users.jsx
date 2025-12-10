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
        <div className="p-4 border px-20">
            <h1 className="mb-4 font-semibold">
                Users
            </h1>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>John</TableCell>
                        <TableCell>john@gmail.com</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
