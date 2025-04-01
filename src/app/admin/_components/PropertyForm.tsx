"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PropertyFormSchema } from "@/schemas/property.schema";
import { useForm } from "react-hook-form";
import { api } from "@/lib/axios";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/FormInput";
import { LoadingButton } from "@/components/LoadingButton";
import { toast } from "sonner";
import { ToggleField } from "@/components/ToggleField";
import { DatePickerField } from "@/components/DatePickerField";
import { addDays } from "date-fns";
import { Separator } from "@/components/ui/separator";
import { useRouter, useSearchParams } from "next/navigation";

const PropertyForm = () => {
  const router = useRouter();
  const params = useSearchParams();
  const editing = params.get("edit");
  const form = useForm<z.infer<typeof PropertyFormSchema>>({
    resolver: zodResolver(PropertyFormSchema),
    defaultValues: {
      propertyCode: "",
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      website: "",
      mapURL: "",
      checkInTime: "",
      checkOutTime: "",
      currency: "",
      GSTIN: "",
      beneficiaryName: "",
      gstAddress1: "",
      gstAddress2: "",
      gstState: "",
      gstPincode: "",
      isActive: true,
      isLaunched: false,
      isMembershipExpired: false,
      membershipExpireDate: new Date(),
    },
  });

  const onFormSubmit = async (values: z.infer<typeof PropertyFormSchema>) => {
    try {
      let response;
      // TODO: Change :propertyId with the dynamic property ID coming from api
      if (editing) {
        response = await api.put(`/properties/:propertyId}`, values);
      } else {
        response = await api.post("/properties", values);
      }

      const result = response.data;

      if (response.status > 299) {
        throw new Error(result.error);
      }

      toast.success(editing ? "Property Updated" : "Property Created");

      router.push("/admin/properties");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error.response.data.error);
      toast.error(error?.response?.data?.error || "Error while logging in");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-5">
          {/* Text/Date Inputs */}
          <ToggleField
            control={form.control}
            name="isActive"
            label="Active"
            description="Make property visible and operational."
            disabled={form.formState.isSubmitting}
          />
          <ToggleField
            control={form.control}
            name="isLaunched"
            label="Launched"
            description="Mark property as launched."
            disabled={form.formState.isSubmitting}
          />
          <ToggleField
            control={form.control}
            name="isMembershipExpired"
            label="Membership Expired"
            description="Mark if membership is no longer active."
            disabled={form.formState.isSubmitting}
          />
          <DatePickerField
            control={form.control}
            name="membershipExpireDate"
            label="Membership Expiry Date"
            disabled={form.formState.isSubmitting}
            maxDate={addDays(new Date(), 900)}
          />
        </div>
        <Separator orientation="horizontal" />
        <div className="grid grid-cols-2 gap-5">
          <FormInput
            control={form.control}
            name="propertyCode"
            label="Property Code"
            placeholder="Enter property code"
            disabled={form.formState.isSubmitting}
          />
          <FormInput
            control={form.control}
            name="name"
            label="Property Name"
            placeholder="Enter name"
            disabled={form.formState.isSubmitting}
          />
          <FormInput
            control={form.control}
            name="email"
            label="Email"
            type="email"
            placeholder="Enter email"
            disabled={form.formState.isSubmitting}
          />
          <FormInput
            control={form.control}
            name="phoneNumber"
            label="Phone Number"
            placeholder="Enter phone number"
            disabled={form.formState.isSubmitting}
          />
        </div>
        <Separator orientation="horizontal" />

        <div className="grid grid-cols-2 gap-5">
          <FormInput
            control={form.control}
            name="address"
            label="Address"
            disabled={form.formState.isSubmitting}
          />
          <FormInput
            control={form.control}
            name="city"
            label="City"
            disabled={form.formState.isSubmitting}
          />
          <FormInput
            control={form.control}
            name="state"
            label="State"
            disabled={form.formState.isSubmitting}
          />
          <FormInput
            control={form.control}
            name="country"
            label="Country"
            disabled={form.formState.isSubmitting}
          />
          <FormInput
            control={form.control}
            name="pincode"
            label="Pincode"
            disabled={form.formState.isSubmitting}
          />
        </div>
        <Separator orientation="horizontal" />

        <div className="grid grid-cols-2 gap-5">
          <FormInput
            control={form.control}
            name="website"
            label="Website"
            disabled={form.formState.isSubmitting}
          />
          <FormInput
            control={form.control}
            name="mapURL"
            label="Map URL"
            disabled={form.formState.isSubmitting}
          />
          <FormInput
            control={form.control}
            name="checkInTime"
            label="Check-In Time"
            type="time"
            disabled={form.formState.isSubmitting}
          />
          <FormInput
            control={form.control}
            name="checkOutTime"
            label="Check-Out Time"
            type="time"
            disabled={form.formState.isSubmitting}
          />
          <FormInput
            control={form.control}
            name="currency"
            label="Currency"
            disabled={form.formState.isSubmitting}
          />
        </div>
        <Separator orientation="horizontal" />
        <div className="grid grid-cols-2 gap-5">
          <FormInput
            control={form.control}
            name="GSTIN"
            label="GSTIN"
            disabled={form.formState.isSubmitting}
          />
          <FormInput
            control={form.control}
            name="beneficiaryName"
            label="Beneficiary Name"
            disabled={form.formState.isSubmitting}
          />
          <FormInput
            control={form.control}
            name="gstAddress1"
            label="GST Address 1"
            disabled={form.formState.isSubmitting}
          />
          <FormInput
            control={form.control}
            name="gstAddress2"
            label="GST Address 2"
            disabled={form.formState.isSubmitting}
          />
          <FormInput
            control={form.control}
            name="gstState"
            label="GST State"
            disabled={form.formState.isSubmitting}
          />
          <FormInput
            control={form.control}
            name="gstPincode"
            label="GST Pincode"
            disabled={form.formState.isSubmitting}
          />
        </div>

        <div>
          <LoadingButton
            loadingText="Please wait..."
            isLoading={form.formState.isSubmitting}
            type="submit"
          >
            {editing ? "Update Now" : "Create Now"}
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
};

export default PropertyForm;
