import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import 'remixicon/fonts/remixicon.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#13CF36] disabled:hover">
            <TableHead className="w-[100px]">ID Role</TableHead>
            <TableHead>Name Roles</TableHead>
            <TableHead>Privileges</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">LBE0001</TableCell>
            <TableCell>Junaidi PCII</TableCell>
            <TableCell><Badge>ACS View</Badge> <Badge>Sales View</Badge></TableCell>
            <TableCell className="text-right"><Button variant="outline" size="icon">
            <i className="ri-pencil-line"></i>
          </Button> <Button variant="destructive" size="icon">
            <i className="ri-delete-bin-6-line"></i>
          </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">LBE0002</TableCell>
            <TableCell>Burhan PCII</TableCell>
            <TableCell><Badge>Superadmin</Badge></TableCell>
            <TableCell className="text-right"><Button variant="outline" size="icon">
            <i className="ri-pencil-line"></i>
          </Button> <Button variant="destructive" size="icon">
            <i className="ri-delete-bin-6-line"></i>
          </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
