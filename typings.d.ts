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
    subtitle:string;
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