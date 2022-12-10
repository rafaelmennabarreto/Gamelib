import Link from "next/link";
import { NextRouter } from "next/router";
import { IconType } from "react-icons";

type AppLinkType = {
  label: string,
  href: string,
  Icon: IconType,
  router: NextRouter
}

export default function AppLink({ label, href, Icon, router }: AppLinkType) {
  const isActive = router.asPath === (href === "/home" ? "/" : href);

  return (
    <Link href={href}>
      <a className={`flex items-end px-3 py-2 my-2 hover:bg-[#3d3d3d] hover:rounded-xl ${isActive ? "bg-[#272727] rounded-xl" : ""}`}>
        <Icon size={22} className="mr-3" />
        {label}
      </a>
    </Link>
  );
}
