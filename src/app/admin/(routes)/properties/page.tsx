"use client";

import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, EditIcon, Loader2 } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IPropertyRes } from "@/interfaces/property.interface";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fetchProperties = async () => {
  const { data } = await api.get("/properties");
  return data;
};

const PropertiesListPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["properties"],
    queryFn: fetchProperties,
  });

  if (isLoading) {
    return (
      <div className="w-full h-full min-h-screen p-6 flex items-center justify-center">
        <Loader2 className="w-5 h-5 animate-spin" />
      </div>
    );
  }

  if (isError) return <div>Failed to load users</div>;

  console.log(data.properties);

  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold">Properties List</h1>
        <p className="text-sm text-muted-foreground">
          Here you can see all the properties created till date
        </p>
      </div>
      <div className="mt-5 border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Serial</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Launched</TableHead>
              <TableHead>Active</TableHead>
              <TableHead>Validity Till</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.properties.map((property: IPropertyRes, index: number) => (
              <TableRow key={property?.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{property?.name}</TableCell>
                <TableCell>{property?.email}</TableCell>
                <TableCell>{property?.phoneNumber}</TableCell>
                <TableCell>
                  <Badge
                    variant={property?.isLaunched ? "outline" : "destructive"}
                  >
                    {property?.isLaunched ? "Launched" : "Not Yet"}{" "}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={property?.isActive ? "outline" : "destructive"}
                  >
                    {property?.isActive ? "Active" : "Paused"}{" "}
                  </Badge>
                </TableCell>
                <TableCell>
                  {property?.membershipExpireDate
                    ? format(property?.membershipExpireDate, "MMM dd, yyyy")
                    : ""}
                </TableCell>
                <TableCell className="flex items-center gap-2">
                  <Button asChild size="icon" variant="outline">
                    <Link href="/admin/property?edit=true">
                      <EditIcon className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild size="icon" variant="outline">
                    <Link href={`/admin/properties/${property?.id}`}>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PropertiesListPage;
