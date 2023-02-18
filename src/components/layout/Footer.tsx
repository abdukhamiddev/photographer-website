import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { classNames, isRoute } from "@/lib";
import { navigation } from "@/components/layout/NavbarItems";
import IconIG from "@/components/icons/Instagram";
import LatestCollectionSlugs from "@/components/collections/LatestCollectionSlugs";

function Footer() {
  const { route } = useRouter();
  const color = (path: string) =>
    isRoute(path, route) ? "font-semibold text-primary" : "text-gray-700";

  return (
    <footer className="px-8 py-8 border-t border-gray-100 md:px-16">
      <div className="space-y-10 md:space-y-0 md:space-x-28 md:flex">
        <div className="space-y-8 md:w-2/5">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <a className="relative inline-block w-16 h-14 md:w-20 md:h-16">
                <Image src="/images/logo.svg" alt="logo" layout="fill" />
              </a>
            </Link>
          </div>
          <p className="text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
            possimus consectetur! Laboriosam illum quasi sit quos quo ipsam
            architecto possimus atque mollitia vitae.
          </p>
        </div>
        <div className="flex justify-between mt-4 md:justify-start md:w-3/5 md:space-x-32">
          <ul className="space-y-4">
            <li>
              <span className="text-sm font-medium font-display">
                Navigation
              </span>
            </li>
            {navigation.map((item) => (
              <li key={item.route}>
                <Link href={item.route === "/home" ? "/" : item.route}>
                  <a
                    className={classNames(
                      "hover:text-primary focus:text-primary",
                      color(item.route)
                    )}
                  >
                    {item.text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="space-y-4">
            <li>
              <span className="text-sm font-medium font-display">
                Latest Work
              </span>
            </li>
            <LatestCollectionSlugs />
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
