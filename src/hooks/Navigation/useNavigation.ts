import React from 'react';
import { usePathname } from 'next/navigation';

const useNavigation = () => {
  const pathname = usePathname();
  const scrollToContacts = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const footerContacts = document.querySelector('#footer-contacts');
    if (footerContacts) {
      footerContacts.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { pathname, scrollToContacts };
};

export default useNavigation;
