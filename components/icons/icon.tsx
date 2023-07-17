// import iconGithub from "@/public/assets/icons/iconGithub.svg"
import IconGitHub from "@/public/assets/icons/IconGitHub";
import  IconLinkedin  from "@/public/assets/icons/IconLinkedin";
import IconTwitter from "@/public/assets/icons/IconTwitter";
const Icon = ({name}:any) => {
    switch (name){
        case 'GitHub':
            return <IconGitHub/>;
        case 'Twitter':
            return <IconTwitter/>
        case 'Linkedin':
            return <IconLinkedin/>
    }
}
export default Icon;