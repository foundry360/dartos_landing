import { LegalSection } from "@/components/legal";
import {
  APP_URL,
  LEGAL_CONTACT_EMAIL,
  LEGAL_LAST_UPDATED,
  SITE_URL,
} from "@/features/legal/constants";

export const termsMetadata = {
  title: "Terms of Service",
  lastUpdated: LEGAL_LAST_UPDATED,
};

export function TermsOfServiceContent() {
  return (
    <>
      <LegalSection title="Acceptance of Terms">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and
          use of VectorDarts, including our website at{" "}
          <a
            href={SITE_URL}
            className="text-white/80 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
          >
            {SITE_URL}
          </a>{" "}
          and application at{" "}
          <a
            href={APP_URL}
            className="text-white/80 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
          >
            {APP_URL}
          </a>
          . By creating an account or using our services, you agree to these
          Terms. If you do not agree, do not use VectorDarts.
        </p>
      </LegalSection>

      <LegalSection title="Description of Service">
        <p>
          VectorDarts is a darts platform that enables players to play,
          practice, compete, and track performance. Features may change over
          time, and we may add, modify, or discontinue functionality at our
          discretion.
        </p>
      </LegalSection>

      <LegalSection title="User Accounts">
        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activity under your account. You must
          provide accurate information and promptly update it if it changes. You
          must be at least 13 years old to use VectorDarts.
        </p>
        <p>
          Notify us immediately if you suspect unauthorized access to your
          account. We reserve the right to suspend or terminate accounts that
          violate these Terms or pose a security risk.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable Use">
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use VectorDarts for any unlawful purpose</li>
          <li>Interfere with or disrupt the platform or its infrastructure</li>
          <li>
            Attempt to gain unauthorized access to accounts, systems, or data
          </li>
          <li>Upload malware, spam, or harmful code</li>
          <li>Harass, abuse, or harm other users</li>
          <li>
            Circumvent usage limits, security measures, or access controls
          </li>
          <li>
            Scrape, copy, or reverse engineer the service except as permitted by
            law
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <p>
          VectorDarts and its content, branding, software, and design are owned
          by us or our licensors and are protected by intellectual property
          laws. Except for the limited right to use the service as intended, no
          license or ownership rights are granted to you.
        </p>
      </LegalSection>

      <LegalSection title="User Content">
        <p>
          You may submit content such as profile information, match data, and
          communications through the platform. You retain ownership of your
          content, but grant us a non-exclusive, worldwide, royalty-free license
          to use, store, display, and process it as needed to operate and
          improve VectorDarts.
        </p>
        <p>
          You represent that you have the rights to any content you submit and
          that it does not violate the rights of others or applicable law.
        </p>
      </LegalSection>

      <LegalSection title="Payments and Subscriptions">
        <p>
          Certain features may require payment or a subscription. If applicable,
          pricing, billing cycles, and refund terms will be presented at the
          time of purchase. Failure to pay applicable fees may result in
          suspension or loss of access to paid features.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimer of Warranties">
        <p>
          VectorDarts is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis without warranties of any kind, whether express
          or implied, including implied warranties of merchantability, fitness
          for a particular purpose, and non-infringement. We do not warrant that
          the service will be uninterrupted, error-free, or secure.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, VectorDarts and its
          affiliates, officers, employees, and partners will not be liable for
          any indirect, incidental, special, consequential, or punitive damages,
          or any loss of profits, data, or goodwill, arising from your use of
          the service.
        </p>
        <p>
          Our total liability for any claim relating to the service will not
          exceed the greater of the amount you paid us in the twelve months
          before the claim or one hundred U.S. dollars ($100).
        </p>
      </LegalSection>

      <LegalSection title="Indemnification">
        <p>
          You agree to indemnify and hold harmless VectorDarts from claims,
          damages, losses, and expenses arising out of your use of the service,
          your content, or your violation of these Terms.
        </p>
      </LegalSection>

      <LegalSection title="Termination">
        <p>
          You may stop using VectorDarts at any time. We may suspend or
          terminate your access if you violate these Terms or if we discontinue
          the service. Provisions that by their nature should survive
          termination will remain in effect.
        </p>
      </LegalSection>

      <LegalSection title="Governing Law">
        <p>
          These Terms are governed by the laws of the United States and the
          State of Delaware, without regard to conflict of law principles,
          except where mandatory local law applies.
        </p>
      </LegalSection>

      <LegalSection title="Changes to These Terms">
        <p>
          We may update these Terms from time to time. Continued use of
          VectorDarts after changes become effective constitutes acceptance of
          the revised Terms. We will update the &quot;Last updated&quot; date
          when changes are posted.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>
          Questions about these Terms can be sent to{" "}
          <a
            href={`mailto:${LEGAL_CONTACT_EMAIL}`}
            className="text-white/80 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
          >
            {LEGAL_CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </>
  );
}
