import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceDetail } from "@/content/services";

export const metadata: Metadata = {
  title: "Shërbime të Specializuara",
  description:
    "Pastrim xhamash, fasadash, panele solare, tapete dhe trajnime për staf pastrimi — UNI PROJECT Kosovë.",
};

export default function SpecializuarPage() {
  const service = getServiceDetail("specializuar")!;
  return <ServiceDetailPage service={service} />;
}
