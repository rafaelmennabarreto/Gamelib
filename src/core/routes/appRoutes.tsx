import { IconType } from "react-icons";
import { IoHomeOutline, IoGameControllerOutline } from "react-icons/io5";

interface AppRoutes {
  label: string;
  path: string;
  icon: IconType;
}

export const Routes: AppRoutes[] = [
  { label: "Home", path: "/", icon: IoHomeOutline },
  { label: "New Game", path: "/new/game", icon: IoGameControllerOutline },
];
