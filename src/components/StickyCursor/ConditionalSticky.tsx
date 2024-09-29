"use client"; // Use this directive to enable hooks

import StickyCursor from "@/components/StickyCursor";
import { usePathname } from "next/navigation";

const ConditionalStickyCursor = () => {
  const pathname = usePathname();

  return pathname !== "/" ? <StickyCursor /> : null;
};

export default ConditionalStickyCursor;
