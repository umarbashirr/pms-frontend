export interface IPropertyRes {
  id: string;
  propertyCode: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  website: string;
  mapURL: string;
  checkInTime: string;
  checkOutTime: string;
  currency: string;
  GSTIN: string;
  beneficiaryName: string;
  gstAddress1: string;
  gstAddress2: string;
  gstState: string;
  gstPincode: string;
  createdAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp
  isMembershipExpired: boolean;
  membershipExpireDate: string; // ISO timestamp
  isActive: boolean;
  isLaunched: boolean;
}
