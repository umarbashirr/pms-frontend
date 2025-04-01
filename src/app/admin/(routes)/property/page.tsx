"use client";

import { useSearchParams } from "next/navigation";
import PropertyForm from "../../_components/PropertyForm";

const PropertyPage = () => {
  const params = useSearchParams();
  const editing = params.get("edit");

  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold">
          {editing ? "Update Property" : "Create New Property"}
        </h1>
        <p className="text-sm text-muted-foreground">
          {editing
            ? "Fill out the below form to update your property details"
            : "Fill out the below form to create your new property"}
        </p>
      </div>
      <div className="mt-5">
        <PropertyForm />
      </div>
    </div>
  );
};

export default PropertyPage;
