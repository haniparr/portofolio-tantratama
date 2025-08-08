import { getPortoBySlug } from "@/lib/data";
import { Metadata } from "next";
import PortoContent from "@/app/components/portofolio/PortoContent";
import PortoSidebar from "@/app/components/portofolio/PortoSidebar";
import PortoDetailHeader from "@/app/components/portofolio/PortoDetailHeader";
import Footer from "@/app/components/Footer";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // SOLUSI 1: Await params di sini
  const awaitedParams = await params;
  const portofolio = await getPortoBySlug(awaitedParams.slug);

  return {
    title: portofolio.title,
    description: portofolio.content.substring(0, 160),
  };
}

export default async function PortoDetailPage({ params }: Props) {
  // Ambil data untuk post spesifik berdasarkan slug dari URL
  const awaitedParams = await params;
  const portofolio = await getPortoBySlug(awaitedParams.slug);
  return (
    <>
      <PortoDetailHeader porto={portofolio} />
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-8/12">
              <PortoContent porto={portofolio} />
            </div>
            <div className="w-full lg:w-4/12">
              <PortoSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
