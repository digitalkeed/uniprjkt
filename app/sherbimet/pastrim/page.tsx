import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceDetail } from "@/content/services";

export const metadata: Metadata = { title: "Pastrim Profesional" };

export default function PastrimPage() {
  const service = getServiceDetail("pastrim")!;
  return <ServiceDetailPage service={service} />;
}
