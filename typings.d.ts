interface LinkProps {
  isMulti: string;
  id: string;
  title: string;
  slug: string;
  order: number;
  status: "ACTIVE" | "INACTIVE";
  pageType: "dynamic" | "static";
  userId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  sublinks: SubLinkProps[];
  user: User;
}

interface SubLinkProps {
  id: string;
  linkId: string;
  userId: string;
  title: string;
  subtitle: string;
  slug: string;
  order: number;
  status: "ACTIVE" | "INACTIVE";
  content: string;
  pageType: "static" | "dynamic";
  createdAt: string;
  updatedAt: string;
  Subsublinks: SubsubLinkProps[];
  user: User;
  link: LinkProps;
}

interface SubsubLinkProps {
  id: string;
  sublinkId: string;
  userId: string;
  title: string;
  slug: string;
  order: number;
  status: "ACTIVE" | "INACTIVE";
  content: string;
  pageType: "static" | "dynamic";
  createdAt: string;
  updatedAt: string;
  user: User;
  subLinks: SubLinkProps;
}

interface User {
  id: string;
  email: string;
  name: string;
  emailVerified: boolean;
  hashedPassword: string;
  createdAt: string;
  updatedAt: string;
}

interface Programme {
  id: string;
  slug: string;
  programmeName: string;
  programmeCode: string;
  programmeType: string;
  programmeDuration: string;
  minQualification: string;
  order: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

interface AlbumProps {
  id: string;
  userId: string;
  title: string;
  thumbnailImage: string;
  status: "ACTIVE" | "INACTIVE";
  order: number;
  createdAt: string;
  updatedAt: string;
  images: ImageProps[];
}

interface ImageProps {
  id: string;
  albulmId: string;
  imageUrl: string;
}

interface TestimonialProps {
  id: string;
  name: string;
  sub: string;
  imageUrl: string;
  testimony: string;
  status: "ACTIVE" | "INACTIVE";
  order: number;
  createdAt: string;
  updatedAt: string;
}

interface DepartmentProps {
  id: string;
  departmentName: string;
  departmentCode: string;
  order: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

interface DesignationProps {
  id: string;
  designationName: string;
  designationCode: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

interface FacultyProps {
  id: string;
  firstName: string;
  slug: string;
  lastName: string;
  email: string;
  phone: string;
  departmentId: string;
  designationId: string;
  showEmail: string;
  showPhone: string;
  status: string;
  profileUrl: string;
  qualification: string;
  research: string;
  publications: string;
  experience: string;
  achievements: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  department: DepartmentProps;
  designation: DesignationProps;
}
