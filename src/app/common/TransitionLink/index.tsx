import { useApp } from "@/context/Application";
import Link, { LinkProps } from "next/link";
import {  useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ITransitionLink extends LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}
const TransitionLink = ({ children, href, className }: ITransitionLink) => {
  const router = useRouter();
  const { setPageLoading } = useApp();

  const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleTransition = async (e: React.MouseEvent) => {
    e.preventDefault();

    let cleanPathName = href.replace(/^\//, "");
    if (cleanPathName === "") cleanPathName = "home";

    setPageLoading((prev) => ({ ...prev, [cleanPathName]: true }));

    const body = document.querySelector("body");
    body?.classList.add("page-transition");

    await sleep(500);

    router.push(href);

    await sleep(1500);

    body?.classList.remove("page-transition");
  };

  return (
    <Link className={className} onClick={handleTransition} href={href}>
      {children}
    </Link>
  );
};

export default TransitionLink;
