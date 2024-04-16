import React, { ReactNode } from "react";

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <nav>Nav Bar</nav>
      {children}
    </section>
  );
}
export default DashboardLayout;
