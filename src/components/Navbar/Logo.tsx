import Image from "next/image";
import logo from "./logo/TSS.png";
export default function Logo() {
  return (
    <div className="logo-container">
      <Image src={logo} alt="logo" />
    </div>
  );
}
