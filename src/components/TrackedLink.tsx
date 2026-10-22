"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventParameters?: Record<string, string>;
  children: ReactNode;
};

export default function TrackedLink({ eventName, eventParameters, onClick, children, ...props }: TrackedLinkProps) {
  return <a {...props} onClick={(event) => { trackEvent(eventName, eventParameters); onClick?.(event); }}>{children}</a>;
}
