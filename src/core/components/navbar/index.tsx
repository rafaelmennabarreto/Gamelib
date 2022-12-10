import AppLink from "../shared/appLink";
import { Routes } from "../../routes/appRoutes";
import { useRouter } from "next/router";

export function Navbar() {
  const router = useRouter();

  return (
    <div className="flex h-full w-[230px] flex-col px-3 py-2">
      {Routes.map(route =>
        <AppLink label={route.label} key={route.path} href={route.path} Icon={route.icon} router={router} />
      )}
    </div>
  );
}
