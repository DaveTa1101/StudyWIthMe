import { Typography } from "@material-tailwind/react";
const links = [
    {name: 'About Us', link: '/about-us'},
    {name: 'Services', link: '/services'},
    {name: 'Contact', link: '/contact'},
    {name: 'Privacy Policy', link: '/privacy-policy'},
    {name: 'Terms of Service', link: '/terms-of-service'},
]
const currentYear = new Date().getFullYear();

export function Footer16() {
  return (
    <footer className="px-8 py-28">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
          {links.map((link, index) => (
            <ul key={index}>
              <li>
                <Typography
                    as="a" 
                    href={link.link} 
                    color="white"
                    className="font-medium !text-gray-500 transition-colors hover:!text-gray-900"
                    >
                    {link.name} 
                </Typography>
              </li>
            </ul>
          ))}
        </div>
        <Typography
          color="blue-gray"
          className="mt-6 !text-sm !font-normal text-gray-500"
        >
          Copyright &copy; {currentYear} Material Tailwind
        </Typography>
      </div>
    </footer>
  );
}
export default Footer16;