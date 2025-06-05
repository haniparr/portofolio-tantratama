import EditPorto from "@/components/portofolio/edit-portofolio";
import { getPortoById } from "@/lib/data";
import { notFound } from "next/navigation";

const UpdatePortoPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const porto = await getPortoById(id);

  if (!porto) {
    notFound();
  }
  return (
    <div className="w-full h-full">
      <EditPorto portofolio={porto} />
    </div>
  );
};
export default UpdatePortoPage;
