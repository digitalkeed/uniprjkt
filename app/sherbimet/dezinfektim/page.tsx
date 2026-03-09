import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceDetail } from "@/content/services";

export const metadata: Metadata = { title: "Dezinfektim & Sanitizim" };

export default function DezinfektimPage() {
  const service = getServiceDetail("dezinfektim")!;
  return <ServiceDetailPage service={service} />;
}
