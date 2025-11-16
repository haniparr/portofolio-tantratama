import { getPorto } from "@/lib/data";
import PortfolioStickyClient from "@/app/components/portofolio/PortfolioStickyClient";

export const metadata = {
  title: "Portfolio Sticky | Tantratama",
  description: "Portfolio showcase with smooth scroll",
};

export default async function PortfolioStickyPage() {
  const portfolios = await getPorto("", 1);

  return <PortfolioStickyClient portfolios={portfolios} />;
}
