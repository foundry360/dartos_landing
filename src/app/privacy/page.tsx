import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal";
import { PrivacyPolicyContent, privacyMetadata } from "@/features/legal";

export const metadata: Metadata = {
  title: privacyMetadata.title,
  description:
    "Learn how VectorDarts collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title={privacyMetadata.title}
      lastUpdated={privacyMetadata.lastUpdated}
    >
      <PrivacyPolicyContent />
    </LegalPageLayout>
  );
}
