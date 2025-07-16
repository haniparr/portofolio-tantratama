import EditPorto from "@/app/components/portofolio/edit-portofolio";
import { getPortoById } from "@/lib/data";
import { notFound } from "next/navigation";

const UpdatePortoPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const awaitedParams = await params;
  const id = awaitedParams.id;
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
