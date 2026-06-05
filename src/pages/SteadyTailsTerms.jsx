import React, { useEffect } from 'react';
import '../legal.css';

function SteadyTailsTerms() {
  useEffect(() => {
    // Dynamic Meta adjustments for security and SEO
    document.title = "Terms and Conditions - Steady Tails";
    
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
          <h1 className="legal-title">Terms and Conditions</h1>
          <div className="legal-meta">
            <span><strong>Effective Date:</strong> June 5, 2026</span>
            <span><strong>Publisher:</strong> Kozai Development Labs LLC</span>
          </div>
        </header>

        <main className="legal-card">
          <div className="legal-body">
            <p>
              These Terms and Conditions apply to the <strong>Steady Tails</strong> mobile application, together with any related services, websites, or features operated by <strong>Kozai Development Labs LLC</strong> (collectively, the "Application" or "Steady Tails"). Kozai Development Labs LLC is referred to as the "Service Provider", "we", "us", or "our".
            </p>
            <p>
              By downloading, accessing, or using the Application, you agree to be bound by these Terms and Conditions. Please read them carefully before using the Application. If you do not agree to these terms, you must immediately cease using and delete the Application.
            </p>

            <hr />

            <h2>1. Eligibility and Accounts</h2>
            <ul>
              <li><strong>Age Requirements:</strong> You must be at least 16 years of age (or the minimum age of digital consent in your jurisdiction) to use the Application. If you are under 18, your parent or legal guardian must review and accept these Terms on your behalf.</li>
              <li><strong>Account Registration:</strong> To use certain features, you must register for an account. You agree to provide accurate information and to keep your account details secure. You are solely responsible for all activities occurring under your account.</li>
              <li><strong>Device Security:</strong> It is your responsibility to maintain the security of your device and access to the Application. We advise against jailbreaking or rooting your device, which could expose it to malware, compromise security features, and cause the Application to malfunction.</li>
            </ul>

            <hr />

            <h2>2. License and Intellectual Property</h2>
            <ul>
              <li><strong>License Grant:</strong> Subject to your compliance with these Terms, the Service Provider grants you a limited, non-exclusive, non-transferable, revocable license to install and use the Application on a mobile device for personal, non-commercial use.</li>
              <li><strong>Restrictions:</strong> You may not copy, modify, distribute, sell, lease, reverse engineer, decompile, or attempt to extract the source code of the Application, unless permitted by applicable law or with our prior written consent.</li>
              <li><strong>Intellectual Property Rights:</strong> The Service Provider retains all right, title, and interest in and to the Application, including its source code, designs, trademarks, service marks, logos, and branding (the "IP"). These Terms do not grant you any license or right to use our IP for any purpose.</li>
            </ul>

            <hr />

            <h2>3. Veterinary and Medical Disclaimer (Not Veterinary Advice)</h2>
            <div className="legal-alert">
              <div className="legal-alert-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                Warning
              </div>
              <div className="legal-alert-content">
                <p><strong>STEADY TAILS IS NOT A MEDICAL DEVICE AND DOES NOT PROVIDE VETERINARY ADVICE.</strong></p>
                <ul>
                  <li><strong>For Informational and Tracking Purposes Only:</strong> The Application is designed solely as a tracking, logging, and coordination assistant for your pet's care. All features, tools, auto-complete entries, and information provided in the Application are for educational and informational tracking purposes only.</li>
                  <li><strong>No Professional Relationship:</strong> Use of the Application does not establish a veterinarian-client-patient relationship. The Application does not diagnose, treat, prevent, or cure any pet disease or medical condition.</li>
                  <li><strong>Consult a Professional:</strong> Always seek the advice of a licensed veterinarian or veterinary professional with any questions you may have regarding your pet’s health, symptoms, medication dosages, or treatment plans. Never disregard professional veterinary advice or delay seeking it because of something you have read or tracked in the Application.</li>
                  <li><strong>Emergency Situations:</strong> <strong>DO NOT USE THE APPLICATION FOR EMERGENCY PET CARE.</strong> In the event of a veterinary medical emergency, contact your local veterinarian or veterinary emergency center immediately.</li>
                  <li><strong>User Responsibility:</strong> You assume full responsibility for the health and safety of your pet. Any reliance on the data or logs tracked in the Application is strictly at your own risk.</li>
                </ul>
              </div>
            </div>

            <hr />

            <h2>4. Service Limitations and Reminder Disclaimer (No Guarantee of Delivery)</h2>
            <div className="legal-alert">
              <div className="legal-alert-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                Notification and Alarm Disclaimer
              </div>
              <div className="legal-alert-content">
                <ul>
                  <li><strong>No Guarantee of Reminder Delivery:</strong> The Application includes features to schedule and send medication and care reminders (both local notifications and push notifications). You acknowledge and agree that the delivery of these notifications is dependent on third-party systems and device-specific conditions beyond our control.</li>
                  <li><strong>Variables Affecting Reminders:</strong> Notifications may fail to display, be delayed, or be suppressed due to device power-management settings (e.g., battery optimization/low power modes), operating system updates, network coverage, do-not-disturb settings, or failure of Apple APNs/Google FCM delivery systems.</li>
                  <li><strong>Do Not Rely Solely on the App:</strong> <strong>You must not rely solely on the Application's reminders to administer life-critical medications or care to your pet.</strong> You should maintain an independent backup reminder system (such as a physical calendar or secondary alarm) to ensure your pet receives necessary care. We are not liable for any pet health issues, injury, or death resulting from missed doses or failed notification delivery.</li>
                </ul>
              </div>
            </div>

            <hr />

            <h2>5. Subscriptions and Purchases</h2>
            <p>
              Steady Tails offers premium subscription options ("Steady Tails Plus") providing enhanced features such as household sharing, advanced tracking, and unlimited pet profiles.
            </p>
            <ul>
              <li><strong>Billing and Payments:</strong> All purchases and subscriptions are processed and managed through the Apple App Store or Google Play Store.</li>
              <li><strong>Auto-Renewal:</strong> Subscriptions automatically renew at the end of each billing cycle (monthly or annually) at the then-current price, unless auto-renewal is turned off or the subscription is cancelled at least <strong>24 hours before the end of the current billing period</strong>.</li>
              <li><strong>Account Charges:</strong> Your store account (Apple ID or Google Play) will be charged for renewal within 24 hours prior to the end of the current billing period.</li>
              <li><strong>Subscription Management:</strong> You can manage or cancel your subscription at any time after purchase in your device's Account Settings (App Store Subscriptions or Google Play Subscriptions).</li>
              <li><strong>Refunds:</strong> All refund requests are handled exclusively by Apple or Google in accordance with their respective refund policies. The Service Provider cannot process refunds directly.</li>
            </ul>

            <hr />

            <h2>6. User-Generated Content and Acceptable Use</h2>
            <p>
              The Application may allow you to post, upload, or share content (such as pet profiles, care logs, photos, and caregiver comments) (collectively, "User-Generated Content" or "UGC").
            </p>

            <h3>A. Acceptable Use Guidelines</h3>
            <p>You agree not to post, upload, or transmit any UGC that:</p>
            <ul>
              <li>Is illegal, fraudulent, or violates any third-party rights (including intellectual property, privacy, or publicity rights).</li>
              <li>Is abusive, harassing, defamatory, threatening, or incites violence.</li>
              <li>Contains explicit, pornographic, or highly offensive material.</li>
              <li>Contains malware, viruses, or spam.</li>
              <li>Misrepresents your identity or affiliation.</li>
            </ul>

            <h3>B. Moderation and Enforcement</h3>
            <p>To comply with Apple App Store Guidelines and maintain a safe environment:</p>
            <ul>
              <li>We reserve the right (but have no obligation) to monitor, moderate, filter, or remove UGC that violates these Terms or applicable law.</li>
              <li>We may suspend or terminate accounts of users who repeatedly violate these Guidelines.</li>
              <li><strong>In-App Reporting and Blocking:</strong> The Application provides built-in tools allowing users to report objectionable content or block abusive users directly from the interface. We will review and act upon all user reports within a reasonable timeframe (typically within 24 hours).</li>
              <li><strong>Appeals:</strong> If your account or content is restricted, you may contact us at <a href="mailto:info@kozailabs.com">info@kozailabs.com</a> to request a review.</li>
            </ul>

            <h3>C. License to UGC</h3>
            <p>
              By submitting UGC to Steady Tails, you grant the Service Provider a non-exclusive, worldwide, royalty-free, perpetual license to host, store, copy, display, and distribute your content solely for the purpose of operating and providing the Application.
            </p>

            <hr />

            <h2>7. Consumer Protection and Regional Variations</h2>

            <h3>A. Australia and New Zealand</h3>
            <ul>
              <li><strong>Australian Consumer Law (ACL):</strong> Our services come with guarantees that cannot be excluded under the Australian Consumer Law. For major failures with the service, you are entitled to cancel your service contract with us and to a refund of the unused portion, or to compensation for its reduced value.</li>
              <li><strong>New Zealand Consumer Guarantees Act (CGA):</strong> If you are acquiring our services for personal use in New Zealand, the provisions of the Consumer Guarantees Act 1993 apply.</li>
              <li><strong>Carve-out:</strong> Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right, or remedy under the ACL or the CGA that cannot be lawfully excluded, restricted, or modified.</li>
            </ul>

            <h3>B. European Union and United Kingdom (Right of Withdrawal)</h3>
            <p>
              Under EU/UK consumer law, you have a statutory right to withdraw from digital purchases within 14 days. However, when purchasing digital content or services (such as Steady Tails Plus) through the App Store or Google Play:
            </p>
            <ul>
              <li>You acknowledge and agree that access to the premium services begins immediately upon confirmation of your purchase.</li>
              <li>You express consent to waive your statutory 14-day right of withdrawal in exchange for immediate access to the services.</li>
              <li>Cancellations and refunds are governed by the platform terms of Apple and Google.</li>
            </ul>

            <hr />

            <h2>8. Apple-Specific Terms (Minimum EULA Terms)</h2>
            <p>If you downloaded the Application from the Apple App Store, the following terms apply to you:</p>
            <ul>
              <li><strong>Acknowledgment:</strong> You acknowledge that these Terms are between you and the Service Provider only, and not with Apple, Inc. ("Apple"). The Service Provider, not Apple, is solely responsible for the Application and the content thereof.</li>
              <li><strong>Scope of License:</strong> The license granted to you for the Application is limited to a non-transferable license to use the Application on any Apple-branded products that you own or control, and as permitted by the Usage Rules set forth in the Apple Media Services Terms of Service.</li>
              <li><strong>Maintenance and Support:</strong> The Service Provider is solely responsible for providing any maintenance and support services with respect to the Application. You acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the Application.</li>
              <li><strong>Warranty:</strong> The Service Provider is solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed. In the event of any failure of the Application to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price for the Application to you. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the Application, and any other claims, losses, liabilities, damages, costs, or expenses attributable to any failure to conform to any warranty will be the Service Provider’s sole responsibility.</li>
              <li><strong>Product Claims:</strong> You acknowledge that the Service Provider, not Apple, is responsible for addressing any claims of you or any third party relating to the Application or your possession and/or use of that Application, including, but not limited to: (i) product liability claims; (ii) any claim that the Application fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection, privacy, or similar legislation.</li>
              <li><strong>Intellectual Property Rights:</strong> You acknowledge that, in the event of any third-party claim that the Application or your possession and use of that Application infringes that third party’s intellectual property rights, the Service Provider, not Apple, will be solely responsible for the investigation, defense, settlement, and discharge of any such intellectual property infringement claim.</li>
              <li><strong>Legal Compliance:</strong> You must represent and warrant that: (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a "terrorist supporting" country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties.</li>
              <li><strong>Developer Contact Information:</strong> Please direct any questions, complaints, or claims with respect to the Application to Kozai Development Labs LLC at <a href="mailto:info@kozailabs.com">info@kozailabs.com</a>.</li>
              <li><strong>Third-Party Terms of Agreement:</strong> You must comply with applicable third-party terms of agreement when using the Application (e.g., your wireless data service agreement).</li>
              <li><strong>Third-Party Beneficiary:</strong> You acknowledge and agree that Apple, and Apple’s subsidiaries, are third-party beneficiaries of these Terms, and that, upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary thereof.</li>
            </ul>

            <hr />

            <h2>9. Digital Services Act (DSA) Compliance</h2>
            <p>
              If the Application constitutes an "intermediary service" under the EU Digital Services Act (Regulation (EU) 2022/2065, "DSA"), the following provisions apply:
            </p>
            <ul>
              <li><strong>Point of Contact:</strong> Our single point of contact for EU authorities and users is <a href="mailto:info@kozailabs.com">info@kozailabs.com</a>.</li>
              <li><strong>Moderation Decisions:</strong> If we restrict access to your content or suspend your account, we will provide you with a clear statement of reasons outlining the decision, the basis, and redress options.</li>
              <li><strong>Notice and Action:</strong> Users may report allegedly illegal content to <a href="mailto:info@kozailabs.com">info@kozailabs.com</a>. We process reports diligently, acknowledge receipt, and communicate our decision without undue delay.</li>
              <li><strong>Out-of-Court Dispute Settlement:</strong> You have the right to resolve content moderation disputes through certified out-of-court dispute settlement bodies (Article 21 of the DSA). This does not affect your right to seek judicial remedy.</li>
              <li><strong>Transparency Reporting:</strong> We publish periodic transparency reports regarding our content moderation practices, available upon request at <a href="mailto:info@kozailabs.com">info@kozailabs.com</a>.</li>
            </ul>

            <hr />

            <h2>10. Limitation of Liability and Indemnification</h2>
            <ul>
              <li><strong>Disclaimers:</strong> The Application is provided "as is" and "as available" without warranties of any kind. We do not warrant that the Application will be error-free or uninterrupted.</li>
              <li><strong>Limitation of Liability:</strong> To the fullest extent permitted by law, the Service Provider shall not be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, data, or business interruption). Our total liability for any claim arising out of these Terms or use of the Application shall not exceed the amount paid by you to the Service Provider in the 12 months preceding the claim, or the minimum amount required by law, whichever is greater.</li>
              <li><strong>Retained Liability:</strong> Nothing in these Terms limits or excludes liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded under applicable law.</li>
              <li><strong>Indemnification:</strong> To the fullest extent permitted by law, you agree to indemnify and hold harmless the Service Provider and its affiliates, officers, directors, and employees from any claims, damages, losses, or expenses (including legal fees) arising out of your breach of these Terms, your misuse of the Application, or your User-Generated Content.</li>
            </ul>

            <hr />

            <h2>11. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms and Conditions are governed by the laws of the jurisdiction in which the Service Provider is established, excluding conflict of law rules, except to the extent mandatory consumer protection laws in your jurisdiction require otherwise. Any disputes will be resolved in the competent courts of that jurisdiction, subject to mandatory local consumer protection rules.
            </p>

            <hr />

            <h2>12. Changes to these Terms</h2>
            <p>
              We may update these Terms and Conditions from time to time. We will notify you of any changes by posting the new Terms on this page with an updated "Effective Date". Your continued use of the Application after changes take effect constitutes acceptance of the new Terms.
            </p>

            <hr />

            <h2>13. Contact Us</h2>
            <p>
              If you have any questions or suggestions about these Terms and Conditions, please contact us at <a href="mailto:info@kozailabs.com">info@kozailabs.com</a>.
            </p>
          </div>
        </main>

        <footer className="legal-footer">
          <p>&copy; {new Date().getFullYear()} Kozai Development Labs LLC. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}

export default SteadyTailsTerms;
