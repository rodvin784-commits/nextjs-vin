import Button from "../ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="mt-20">
      <h1 className="font-bold text-xl">📞Contact</h1>
      <div className="flex flex-wrap gap-3 mt-5">
        <Link
          href="https://www.linkedin.com/in/pramudya-diagusta/"
          target="_blank"
        >
          <Button>Linkedin</Button>
        </Link>
        <Button>Github</Button>
        <Button>Instagram</Button>
        <Button>Email</Button>
      </div>
    </div>
  );
}