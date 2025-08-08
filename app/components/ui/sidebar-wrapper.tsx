import { auth } from "@/auth";
import Sidebar from "./sidebar";

const SidebarWrapper = async () => {
  const session = await auth();

  return <Sidebar session={session} />;
};

export default SidebarWrapper;
