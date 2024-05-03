"use client";
import { useScrollToTop } from "../hooks/use-scroll-to-top";

const MainDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  useScrollToTop();

  return <main>{children}</main>;
};

const WrappedMainDashboardLayout = (props: any) => (
 
    <MainDashboardLayout {...props} />

);

export default WrappedMainDashboardLayout;
