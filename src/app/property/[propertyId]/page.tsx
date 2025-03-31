import { redirect } from "next/navigation";

const SinglePropertyPage = async ({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) => {
  const { propertyId } = await params;
  redirect(`/property/${propertyId}/dashboard`);
};

export default SinglePropertyPage;
