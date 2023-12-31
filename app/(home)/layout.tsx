'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const listMenuSidebar = [
    {
      name: 'Feed',
      href: '/',
    },
    {
      name: 'My community',
      href: 'community',
    },
    {
      name: 'Notification',
      href: 'notification',
    },
    {
      name: 'Explore',
      href: 'explore',
    },
    {
      name: 'Profile',
      href: 'profile',
    },
    {
      name: 'Settings',
      href: 'setting',
    },
    {
      name: 'Logout',
      href: 'logout',
    },
  ];
  const pathName = usePathname();
  return (
    <>
      <header className="flex justify-between py-4">
        <div>Logo</div>
        <div>Thanh search</div>
        <div>Avatar user</div>
      </header>
      <section className="flex">
        <aside className="pr-5">
          <nav>
            {listMenuSidebar.map((menuItem) => {
              const isActive = pathName.endsWith(menuItem.href);
              return (
                <li
                  className={
                    isActive
                      ? 'bg-gray-400 text-white rounded-lg font-bold px-5 py-3'
                      : 'font-bold text-gray-400 px-5 py-3 mb-3'
                  }
                  key={menuItem.name}
                >
                  <Link className="py-3" href={menuItem.href}>
                    {menuItem.name}
                  </Link>
                </li>
              );
            })}
          </nav>
        </aside>
        {children}
      </section>
    </>
  );
}
