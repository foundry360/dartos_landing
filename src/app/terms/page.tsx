import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal";
import { TermsOfServiceContent, termsMetadata } from "@/features/legal";

export const metadata: Metadata = {
  title: termsMetadata.title,
  description:
    "Read the terms and conditions for using the VectorDarts platform.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      title={termsMetadata.title}
      lastUpdated={termsMetadata.lastUpdated}
    >
      <TermsOfServiceContent />
    </LegalPageLayout>
  );
}
