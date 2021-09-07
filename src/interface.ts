export interface HeaderLink {
  id: string;
  headerId?: string;
  title: string;
  link?: string;
  width?: string;
  left?: string;
  fn?: (id: string) => void;
}
