import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="flex gap-x-2 items-center mt-2">
      <Link href="https://www.facebook.com/Biplobmolla123/">
        <FaFacebook size={30} />
      </Link>
      <Link href="https://github.com/biplobmolla">
        <FaGithub size={30} />
      </Link>
      <Link href="https://www.linkedin.com/in/biplob-molla-4a7951212/">
        <FaLinkedin size={30} />
      </Link>
      <Link href="https://twitter.com/biplobmolla01">
        <FaSquareXTwitter size={30} />
      </Link>
    </div>
  );
};

export default SocialLinks;
