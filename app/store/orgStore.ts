import { create } from "zustand";

interface OrgStore {
  setting: orgSetting[];
  setSetting: (setting: orgSetting[]) => void;
}

interface orgSetting {
  id: string;
  userId: string;
  name: string;
  phone: string;
  email: string;
  add1?: string;
  add2?: string;
  mtitle: string;
  description: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  logoUrl: string;
  createdAt: string;
  updatedAt: string;
}

const useOrgStore = create<OrgStore>((set) => ({
  setting: [],
  setSetting: (newData) => set({ setting: newData }),
}));

export default useOrgStore;
