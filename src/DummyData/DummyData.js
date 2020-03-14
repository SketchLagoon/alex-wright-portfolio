import { FaUserTie, FaPaintBrush, FaCode, FaBook, FaGithubSquare, FaLinkedin } from "react-icons/fa"




const User = {
    name: "Alex Wright",
    avatar: "https://pbs.twimg.com/profile_images/792597490759454721/3NbXSR7x_400x400.jpg",
    navLinks: ["About","Design","Development","Case Studies"],
    icons: [FaUserTie, FaPaintBrush, FaCode, FaBook],
    roles: ["Front End Engineer", "Product Designer"],
    links: [{url: "https://github.com/sketchLagoon", icon: FaGithubSquare}, {url: "https://www.linkedin.com/in/johnalexanderwright/", icon: FaLinkedin}]
}

export default User