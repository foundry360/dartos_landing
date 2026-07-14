import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact";

export const metadata: Metadata = {
  title: "Get In Touch",
  description:
    "Contact VectorDarts — reach the team about VectorOS, clubs, leagues, and partnerships.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
