import React, { useEffect } from 'react';
import '../legal.css';

function SteadyTailsPrivacy() {
  useEffect(() => {
    // Dynamic Meta adjustments for security and SEO
    document.title = "Privacy Policy - Steady Tails";
    
    // Add robots noindex / nofollow dynamically if not already present
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = "robots";
      metaRobots.content = "noindex, nofollow";
      document.head.appendChild(metaRobots);
    } else {
      metaRobots.content = "noindex, nofollow";
    }

    // Enable scrolling by overriding body overflow: hidden
    document.body.style.overflow = 'auto';

    // Clean up title and overflow on unmount
    return () => {
      document.title = "Kozai Development Labs";
      document.body.style.overflow = 'hidden';
    };
  }, []);

  return (
    <div className="legal-page">
      <div className="legal-container">
        
        <header className="legal-header">
          <div className="legal-badge">Steady Tails</div>
          <h1 className="legal-title">Privacy Policy</h1>
          <div className="legal-meta">
            <span><strong>Effective Date:</strong> June 5, 2026</span>
            <span><strong>Publisher:</strong> Kozai Development Labs LLC</span>
          </div>
        </header>

        <main className="legal-card">
          <div className="legal-body">
            <p>
              This Privacy Policy applies to the <strong>Steady Tails</strong> mobile application, together with any related services, websites, or features operated by <strong>Kozai Development Labs LLC</strong> (collectively, the "Application" or "Steady Tails"). Kozai Development Labs LLC is referred to as the "Service Provider", "we", "us", or "our".
            </p>

            <hr />

            <h2>1. Information Collection and Use</h2>
            <p>
              The Application collects personal information to provide, maintain, and improve our services, including pet care tracking, medication reminders, and household coordination.
            </p>

            <h3>A. Information You Provide</h3>
            <ul>
              <li><strong>Account Information:</strong> Email address, User ID, and User Name.</li>
              <li><strong>Profile Information:</strong> Profile images and photos uploaded to the Application (e.g., pet photos).</li>
              <li><strong>Pet Details:</strong> Pet names, breeds, medication schedules, logs, and other well-being details (non-human data).</li>
              <li><strong>Transaction Information:</strong> Purchase history, subscription status, and billing details managed via our payment processors.</li>
              <li><strong>Communication Data:</strong> Feedback, support queries, or emails sent to <a href="mailto:info@kozailabs.com">info@kozailabs.com</a>.</li>
            </ul>

            <h3>B. Automatically Collected Information</h3>
            <ul>
              <li><strong>Device & Usage Data:</strong> Internet Protocol (IP) address, mobile operating system version, unique device identifiers, and browser type.</li>
              <li><strong>Activity Data:</strong> Pages of the Application visited, time and date of visits, time spent on those pages, and other usage statistics.</li>
              <li><strong>Diagnostic Data:</strong> App performance logs, crash data, and diagnostic reports collected via Firebase Crashlytics.</li>
            </ul>

            <hr />

            <h2>2. Third-Party Service Providers and Data Sharing</h2>
            <p>
              We do not sell your personal data. We share your information with trusted third-party service providers to help run, support, and analyze the Application.
            </p>
            <p>
              Apple App Store Guidelines require us to disclose our third-party relationships. The Application utilizes the following third-party service providers:
            </p>
            <ul>
              <li><strong>Google Play Services:</strong> Used for core platform services on Android. <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
              <li><strong>Google Analytics for Firebase:</strong> Used for usage metrics and analytics. <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy Policy</a></li>
              <li><strong>Firebase Crashlytics:</strong> Used for crash reporting and app stability monitoring. <a href="https://firebase.google.com/support/privacy/" target="_blank" rel="noopener noreferrer">Firebase Crashlytics Privacy Policy</a></li>
              <li><strong>RevenueCat:</strong> Used for in-app subscription and transaction management. <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat Privacy Policy</a></li>
            </ul>

            <div className="legal-alert">
              <div className="legal-alert-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                Important
              </div>
              <p className="legal-alert-content">
                <strong>Third-Party Data Protection Guarantee:</strong> The Service Provider ensures that any third-party service providers with whom the Application shares data are contractually bound to provide the same or equivalent protection of user data as set forth in this Privacy Policy.
              </p>
            </div>

            <p>We may also disclose your information:</p>
            <ul>
              <li>As required by law, such as to comply with a subpoena or similar legal process.</li>
              <li>When we believe in good faith that disclosure is necessary to protect our rights, your safety or the safety of others, investigate fraud, or respond to a government request.</li>
              <li>In the event of a merger, acquisition, or sale of assets, in which case your information may be transferred to the successor entity.</li>
            </ul>

            <hr />

            <h2>3. Cookies and Tracking Technologies</h2>
            <p>
              The Application or its third-party SDKs may use cookies, software development kits (SDKs), pixels, and similar technologies to support functionality, analytics, or service delivery. Where required by applicable law (such as the EU ePrivacy Directive), the Service Provider will obtain your explicit consent before using non-essential tracking technologies.
            </p>

            <hr />

            <h2>4. International Data Transfers</h2>
            <p>
              The Service Provider is established in the United States. Personal data collected through the Application may be transferred to, stored, and processed in the United States or other countries where our service providers operate.
            </p>
            <p>For users in the European Economic Area (EEA), Switzerland, Canada, Australia, and New Zealand:</p>
            <ul>
              <li>Data protection laws in the United States may differ from those in your jurisdiction.</li>
              <li>We implement appropriate safeguards for international transfers, including <strong>Standard Contractual Clauses (SCCs)</strong> approved by the European Commission, or other legally recognized transfer mechanisms.</li>
              <li>By using the Application, you consent to the transfer of your data outside of your country of residence, where permitted by law.</li>
            </ul>

            <hr />

            <h2>5. Regional Privacy Rights and Compliance</h2>

            <h3>A. European Union, EEA, and Switzerland (GDPR / Swiss FADP)</h3>
            <p>
              If you reside in the EEA or Switzerland, the following provisions apply to you under the General Data Protection Regulation (GDPR) and the Swiss Federal Act on Data Protection (FADP):
            </p>
            <ul>
              <li><strong>Data Controller:</strong> Kozai Development Labs LLC is the Data Controller for your personal data.</li>
              <li>
                <strong>Legal Bases for Processing:</strong>
                <ul>
                  <li><em>Performance of a Contract:</em> To create your account, manage households, and sync pet logs.</li>
                  <li><em>Consent:</em> For analytics, optional features, or when you explicitly opt-in.</li>
                  <li><em>Legitimate Interests:</em> To monitor app performance, debug crashes, prevent fraud, and secure the Application.</li>
                  <li><em>Legal Obligation:</em> To comply with accounting, tax, or legal mandates.</li>
                </ul>
              </li>
              <li><strong>Your Rights:</strong> You have the right to request access to, correction of, portability of, or erasure of your personal data; the right to restrict or object to certain processing; and the right to withdraw consent at any time.</li>
              <li><strong>Supervisory Authority:</strong> You have the right to lodge a complaint with your local Data Protection Authority (DPA) regarding our processing of your personal data.</li>
            </ul>

            <h3>B. United States (California - CCPA/CPRA)</h3>
            <p>If you are a California resident, you have the following rights:</p>
            <ul>
              <li><strong>Right to Know:</strong> The right to request what personal information we collect, use, and share.</li>
              <li><strong>Right to Delete:</strong> The right to request the deletion of your personal information.</li>
              <li><strong>Right to Opt-Out:</strong> The right to opt-out of the "sale" or "sharing" of personal data (we do not sell or share your personal data for cross-context behavioral advertising).</li>
              <li><strong>Right to Non-Discrimination:</strong> The right to not receive discriminatory treatment for exercising your privacy rights.</li>
            </ul>

            <h3>C. Canada (PIPEDA)</h3>
            <p>
              We comply with the Personal Information Protection and Electronic Documents Act (PIPEDA). Canadian users have the right to access and correct their personal information, and to challenge our compliance with PIPEDA principles by contacting our privacy contact.
            </p>

            <h3>D. Australia & New Zealand (Privacy Act 1988 / Privacy Act 2020)</h3>
            <p>
              We process personal information in accordance with the Australian Privacy Principles (APPs) and the New Zealand Information Privacy Principles (IPPs).
            </p>
            <ul>
              <li>Personal information is transferred to servers located in the United States.</li>
              <li>You have the right to access and seek correction of your personal data without charge.</li>
              <li>
                If you believe we have breached the APPs or IPPs, you can file a complaint with us at <a href="mailto:info@kozailabs.com">info@kozailabs.com</a>. We will respond within 30 days. If unsatisfied, you may contact the Office of the Australian Information Commissioner (OAIC) or the New Zealand Office of the Privacy Commissioner (OPC).
              </li>
            </ul>

            <hr />

            <h2>6. Data Retention and Account Deletion</h2>
            <p>We retain your personal data only as long as necessary for the purposes set out in this policy:</p>
            <ul>
              <li><strong>User-Provided Data:</strong> Retained for the duration of your active account plus 12 months, unless a longer retention period is required by law.</li>
              <li><strong>Automatically Collected Data:</strong> Retained for up to 24 months.</li>
              <li><strong>Anonymized Data:</strong> Retained indefinitely for statistical and analytical purposes.</li>
            </ul>

            <div className="legal-alert">
              <div className="legal-alert-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                Important
              </div>
              <p className="legal-alert-content">
                <strong>Account Deletion:</strong> You can delete your account and all associated personal data (including pet logs and household associations) at any time directly from the <strong>Settings</strong> screen inside the Application. Alternatively, you may contact us at <a href="mailto:info@kozailabs.com">info@kozailabs.com</a> to request deletion. Please note that subscription cancellations must be managed directly through your App Store or Google Play account.
              </p>
            </div>

            <hr />

            <h2>7. Children's Privacy</h2>
            <p>
              The Application is not intended for children under 16 years of age (or the corresponding minimum age of digital consent in your jurisdiction). We do not knowingly solicit or collect personal information from children. If we discover that a child under 16 has provided us with personal information, we will immediately delete it from our servers. If you are a parent or guardian and are aware that your child has provided us with personal data, please contact us at <a href="mailto:info@kozailabs.com">info@kozailabs.com</a>.
            </p>

            <hr />

            <h2>8. Data Security and Breach Notification</h2>
            <p>
              We use administrative, physical, and technical safeguards to protect your personal data. In the event of a security breach that compromises your personal data, we will notify you and the relevant regulatory authorities in accordance with applicable legal requirements.
            </p>

            <hr />

            <h2>9. Changes to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy with an updated "Effective Date". Where required by law, we will obtain your consent to material changes before they take effect.
            </p>

            <hr />

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, or wish to exercise your rights, please contact us:
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:info@kozailabs.com">info@kozailabs.com</a></li>
              <li><strong>Mailing Address:</strong> Kozai Development Labs LLC</li>
            </ul>
          </div>
        </main>

        <footer className="legal-footer">
          <p>&copy; {new Date().getFullYear()} Kozai Development Labs LLC. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}

export default SteadyTailsPrivacy;
