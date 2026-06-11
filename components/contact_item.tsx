import Image from "next/image";
import "../app/globals.css"

interface ContactItemProps {
  text: string,
  iconSrc: string,
  altText: string,
}

export default function ContactItem({text, iconSrc, altText}: ContactItemProps) {
  return (
    <div className="flex gap-3 items-center text-slate-300 pt-4">
        <Image className="rounded-lg bg-gradient-custom text-slate-300 p-2 w-8 h-8 | md:w-12 md:h-12" src={iconSrc} alt={altText} width={40} height={40} />
        <p className="text-sm | md:text-lg">
            {text}
        </p>
    </div>

  );
}