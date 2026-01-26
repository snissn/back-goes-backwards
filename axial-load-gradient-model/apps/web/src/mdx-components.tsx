import Link from "next/link";

import { Callout } from "./components/mdx/Callout";
import { DrillGrid } from "./components/mdx/DrillGrid";
import { QuickScreen } from "./components/mdx/QuickScreen";

type MDXComponents = Record<string, unknown>;

type AnchorProps = {
  href?: string;
  children?: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

function A({ href = "", children, ...rest }: AnchorProps) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...(rest as any)}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" {...rest}>
      {children}
    </a>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: A,
    Callout,
    QuickScreen,
    DrillGrid,
    ...components
  };
}
