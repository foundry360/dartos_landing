import { LegalSection } from "@/components/legal";
import {
  APP_URL,
  LEGAL_LAST_UPDATED,
  PRIVACY_CONTACT_EMAIL,
  SITE_URL,
} from "@/features/legal/constants";

export const privacyMetadata = {
  title: "Privacy Policy",
  lastUpdated: LEGAL_LAST_UPDATED,
};

export function PrivacyPolicyContent() {
  return (
    <>
      <LegalSection title="Introduction">
        <p>
          VectorDarts (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
          operates the website at{" "}
          <a
            href={SITE_URL}
            className="text-white/80 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
          >
            {SITE_URL}
          </a>{" "}
          and the VectorDarts application at{" "}
          <a
            href={APP_URL}
            className="text-white/80 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
          >
            {APP_URL}
          </a>
          . This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you use our services.
        </p>
        <p>
          By accessing or using VectorDarts, you agree to the collection and use
          of information in accordance with this policy. If you do not agree,
          please do not use our services.
        </p>
      </LegalSection>

      <LegalSection title="Information We Collect">
        <p>We may collect the following types of information:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white/80">Account information</strong> —
            such as your name, email address, username, and password when you
            create an account.
          </li>
          <li>
            <strong className="text-white/80">
              Gameplay and performance data
            </strong>{" "}
            — including match history, scores, statistics, practice sessions,
            and related activity within the platform.
          </li>
          <li>
            <strong className="text-white/80">
              Device and usage information
            </strong>{" "}
            — such as browser type, operating system, IP address, pages viewed,
            and interactions with our services.
          </li>
          <li>
            <strong className="text-white/80">Communications</strong> — messages
            you send to us, including support requests and feedback.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide, operate, and maintain the VectorDarts platform</li>
          <li>Create and manage your account</li>
          <li>Track performance, statistics, and gameplay history</li>
          <li>Improve our products, features, and user experience</li>
          <li>Communicate with you about updates, security, and support</li>
          <li>
            Detect, prevent, and address fraud, abuse, or technical issues
          </li>
          <li>Comply with legal obligations</li>
        </ul>
      </LegalSection>

      <LegalSection title="How We Share Your Information">
        <p>
          We do not sell your personal information. We may share information in
          the following circumstances:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white/80">Service providers</strong> — with
            vendors who help us operate our platform, such as hosting,
            analytics, and customer support providers, subject to contractual
            obligations.
          </li>
          <li>
            <strong className="text-white/80">Legal requirements</strong> — when
            required by law, regulation, legal process, or governmental request.
          </li>
          <li>
            <strong className="text-white/80">Business transfers</strong> — in
            connection with a merger, acquisition, or sale of assets, with
            notice where required by law.
          </li>
          <li>
            <strong className="text-white/80">With your consent</strong> — when
            you direct us to share information or otherwise agree.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Data Retention">
        <p>
          We retain personal information for as long as necessary to provide our
          services, fulfill the purposes described in this policy, comply with
          legal obligations, resolve disputes, and enforce our agreements. When
          data is no longer needed, we delete or anonymize it in accordance with
          our retention practices.
        </p>
      </LegalSection>

      <LegalSection title="Your Rights and Choices">
        <p>
          Depending on your location, you may have rights regarding your
          personal information, including the right to access, correct, delete,
          or export your data, and to object to or restrict certain processing.
        </p>
        <p>
          You may update account details within the app where available, or
          contact us to exercise your rights. We may need to verify your
          identity before responding to certain requests.
        </p>
      </LegalSection>

      <LegalSection title="Cookies and Tracking">
        <p>
          We and our service providers may use cookies, local storage, and
          similar technologies to remember preferences, keep you signed in,
          understand usage patterns, and improve our services. You can control
          cookies through your browser settings, though some features may not
          function properly if cookies are disabled.
        </p>
      </LegalSection>

      <LegalSection title="Children's Privacy">
        <p>
          VectorDarts is not directed to children under 13, and we do not
          knowingly collect personal information from children under 13. If you
          believe we have collected information from a child under 13, please
          contact us and we will take steps to delete it.
        </p>
      </LegalSection>

      <LegalSection title="International Data Transfers">
        <p>
          Your information may be processed in countries other than your own.
          Where required, we implement appropriate safeguards for cross-border
          data transfers.
        </p>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          We use administrative, technical, and organizational measures designed
          to protect your information. However, no method of transmission over
          the internet or electronic storage is completely secure, and we cannot
          guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will post the
          revised policy on this page and update the &quot;Last updated&quot;
          date. Material changes may also be communicated through the app or by
          email where appropriate.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>
          If you have questions about this Privacy Policy or our data practices,
          contact us at{" "}
          <a
            href={`mailto:${PRIVACY_CONTACT_EMAIL}`}
            className="text-white/80 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
          >
            {PRIVACY_CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </>
  );
}
