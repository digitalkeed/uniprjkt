import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceDetail } from "@/content/services";

export const metadata: Metadata = { title: "Facility Management" };

export default function FacilityPage() {
  const service = getServiceDetail("facility")!;
  return <ServiceDetailPage service={service} />;
}
