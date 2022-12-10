import Image from "next/image";
import defaultImage from "../../../assets/default_game.jpg";

type AppImageProps = {
  classname?: string;
  src?: string;
}

export default function AppImage({ classname, src }: AppImageProps) {
  return <Image src={src ? src : defaultImage} width={300} height={380} className={`rounded-xl ${classname}`} />;
}
