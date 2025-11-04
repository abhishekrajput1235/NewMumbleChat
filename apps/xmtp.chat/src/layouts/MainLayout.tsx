import { useRef } from "react";
import { useClickOutside } from "@mantine/hooks";
import classes from "./MainLayout.module.css";

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={classes.root}>{children}</div>;
};

export const MainLayoutHeader: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <header className={classes.header}>
      <div className={classes.headerContent}>{children}</div>
    </header>
  );
};

export const MainLayoutContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <main className={classes.main}>
      <div className={classes.mainContent}>{children}</div>
    </main>
  );
};

export type MainLayoutNavProps = React.PropsWithChildren<{
  opened?: boolean;
  toggle?: () => void;
}>;

export const MainLayoutNav: React.FC<MainLayoutNavProps> = ({
  children,
  opened,
  toggle,
}) => {
  const openedRef = useRef(opened);
  openedRef.current = opened;

  const overlayRef = useRef<HTMLDivElement>(null);

  const ref = useClickOutside(
    () => {
      if (openedRef.current) {
        toggle?.();
      }
    },
    [overlayRef] // Ignore clicks on the overlay
  );
  const classNames = [classes.aside, opened && classes.showNavbar].filter(Boolean);
  const overlayClassNames = [classes.overlay, opened && classes.overlayVisible]
    .filter(Boolean)
    .join(" ");
  return (
    <>
      <div
        ref={overlayRef}
        className={overlayClassNames}
        onClick={() => {
          if (openedRef.current) {
            toggle?.();
          }
        }}
      />
      <aside className={classNames.join(" ")} ref={ref}>
        <nav className={classes.asideNav}>{children}</nav>
      </aside>
    </>
  );
};

export const MainLayoutFooter: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <footer className={classes.footer} style={{}}>
      <div className={classes.footerContent}>{children}</div>
    </footer>
  );
};
