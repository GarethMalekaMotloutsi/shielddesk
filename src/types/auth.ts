export type AppRole = 'owner' | 'technician' | 'admin';

export interface UserProfile {
  id: string;
  full_name: string | null;
  role: AppRole;
  phone: string | null;
  business_id: string | null;
}