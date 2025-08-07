import SidebarWrapper from "@/app/components/ui/sidebar-wrapper";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="flex items-start justify-between bg-white">
      <aside className="border-e  sticky top-0">
        <SidebarWrapper />
      </aside>
      <div className="w-full h-full px-5">{children}</div>
    </div>
  );
};

export default DashboardLayout;
