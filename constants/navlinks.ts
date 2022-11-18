import { ReactNode } from "react";
import { Github } from "../public/icons";
export const sitelinks = [
  { name: "Home", route: "/", icon: "" },
  { name: "About", route: "/about", icon: "" },
  { name: "Blogs", route: "/blogs", icon: "" },
  { name: "Projects", route: "/projects", icon: "" },
  { name: "ToolBox", route: "/toolbox", icon: "" },
];
export const sociallinks: { name: string; link: string; icon: ReactNode }[] = [
  { name: "Github", link: "/", icon: Github },
  { name: "Linkedin", link: "/about", icon: Github },
];
