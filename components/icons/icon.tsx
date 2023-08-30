// import iconGithub from "@/public/assets/icons/iconGithub.svg"
import IconGitHub from "@/public/assets/icons/IconGitHub";
import IconLinkedin from "@/public/assets/icons/IconLinkedin";
import IconTwitter from "@/public/assets/icons/IconTwitter";
import IconExternal from "@/public/assets/icons/IconExternal";
import IconFolder from "@/public/assets/icons/IconFolder";
import IconStars from "@/public/assets/icons/IconStars";
import IconFork from "@/public/assets/icons/IconFork";

const Icon = ({ name }: any) => {
  switch (name) {
    case "GitHub":
      return <IconGitHub />;
    case "Twitter":
      return <IconTwitter />;
    case "Linkedin":
      return <IconLinkedin />;
    case "External":
      return <IconExternal />;
    case "Folder":
      return <IconFolder />;
    case "Star":
      return <IconStars />;
    case "Fork":
      return <IconFork />;
  }
};
export default Icon;
