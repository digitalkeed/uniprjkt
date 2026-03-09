import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceDetail } from "@/content/services";

export const metadata: Metadata = { title: "Gatishmëri & Emergjencë" };

export default function OncallPage() {
  const service = getServiceDetail("oncall")!;
  return <ServiceDetailPage service={service} />;
}
