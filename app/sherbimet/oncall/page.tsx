import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceDetail } from "@/content/services";

export const metadata: Metadata = { title: "On-call & Emergjencë" };

export default function OncallPage() {
  const service = getServiceDetail("oncall")!;
  return <ServiceDetailPage service={service} />;
}
