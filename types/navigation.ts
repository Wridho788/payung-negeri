export type NavLeaf = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  children: Array<NavLeaf | NavGroup>;
};

export type NavItem = NavLeaf | NavGroup;