import PolicyPage from "@/components/PolicyPage";

export const metadata = {
  title: "Privacy Policy | UNMAKE Studio",
  description: "How UNMAKE Studio handles contact inquiries, product accounts, purchases, and personal information.",
};

export default function PrivacyPage() {
  return (
    <PolicyPage updated="November 18, 2026" title="Privacy Policy" intro="How we handle personal information when you visit UNMAKE, contact us, or use our digital products.">
      <div>
        <h2>1. Who is responsible</h2>
        <p>UNMAKE Studio is operated by Tricia Hilario in the Philippines. We are responsible for the personal information we collect to run our website and products. Contact <a href="mailto:tricia@un-make.com">tricia@un-make.com</a> with privacy questions or requests. This policy covers un-make.com and UNMAKE products that link to it.</p>
      </div>
      <div>
        <h2>2. Information we collect</h2>
        <ul>
          <li><strong>Contact inquiries:</strong> the name, email address, selected topic, and message you submit, plus information you choose to send in support correspondence.</li>
          <li><strong>Purchases:</strong> order references, the purchased product, payment status, and buyer details provided to us by the checkout provider, such as email and billing country. Full card details are handled by the payment provider rather than our contact form or app.</li>
          <li><strong>App accounts and content:</strong> when you use account-based features, account identifiers, email, profile details you provide, and entries such as meals, grocery lists, inventory, preferences, and household invitations. Depending on the product and feature, entries may be stored on your device or in its connected database.</li>
          <li><strong>Technical information:</strong> hosting and service providers may process IP addresses, browser and device information, request times, and error or security logs when delivering the website and services.</li>
        </ul>
        <p>Please avoid putting passwords, card details, or sensitive medical information in support messages or meal descriptions. Only provide another person’s details when you have permission to do so.</p>
      </div>
      <div>
        <h2>3. How and why we use information</h2>
        <p>We use information to respond to inquiries, deliver purchases, manage accounts and invitations, save app entries, provide support, process refunds, prevent abuse, maintain security, and meet recordkeeping obligations. We do not sell personal information or use private app entries for targeted advertising.</p>
        <p>Where a legal basis is required, we process information to perform our agreement with you, meet legal obligations, or pursue legitimate interests such as support and service security, balanced against your rights. We rely on consent where required for optional communications or tracking. You can withdraw consent without affecting earlier lawful processing.</p>
      </div>
      <div>
        <h2>4. Service providers and sharing</h2>
        <p>The website is hosted on Vercel. Our contact form sends submissions through Web3Forms for delivery to us by email. These providers process information needed to deliver and secure their services.</p>
        <p>For Paddle purchases, Paddle acts as Merchant of Record and processes checkout, billing, taxes, fraud checks, and refunds under its own <a href="https://www.paddle.com/legal/privacy">Privacy Policy</a>. Purchases through Etsy are subject to <a href="https://www.etsy.com/legal/privacy/">Etsy’s Privacy Policy</a>. These providers have their own responsibilities for the information they collect.</p>
        <p>App features may also use service providers for authentication, database storage, and transactional email. We share only information needed to operate those features. If you use a social sign-in option offered by an app, its provider shares the basic account details you authorize.</p>
        <p>People you invite to a shared household can see information made available within that shared space. We may also disclose information when legally required, to protect users and our services, or during a business transfer with appropriate privacy protections and notice where required.</p>
      </div>
      <div>
        <h2>5. Cookies and device storage</h2>
        <p>We use Vercel Web Analytics to understand traffic to our public website, including page views, referral sources, approximate location, and browser and device types. This analytics setup does not use cookies or record form contents or private household pages. We remove query strings and fragments from page URLs before sending page-view events. Statistics are shown in aggregate. See <a href="https://vercel.com/docs/analytics/privacy-policy">Vercel’s analytics privacy information</a> for details.</p>
        <p>Websites, apps, and checkout providers may use cookies or local storage for essential functions such as remembering a session, storing preferences, securing checkout, or saving entries on your device. Clearing browser storage may remove locally saved entries or sign you out.</p>
        <p>You can manage cookies through your browser, although blocking necessary storage can affect features. If we introduce optional analytics or advertising cookies that require consent, we will request that consent before enabling them. External social and marketplace links lead to sites with their own privacy practices.</p>
      </div>
      <div>
        <h2>6. Retention and security</h2>
        <p>We keep information only as long as needed for the purposes above. App content is retained while needed to provide your account and features; support correspondence is kept as needed to handle requests and follow-up. Order and accounting records may need to be kept longer to satisfy legal requirements or resolve disputes. Deletion from backups may take longer than deletion from active systems.</p>
        <p>We use reasonable technical and organizational safeguards and limit access to those who need it to operate and support the service. No internet service can guarantee absolute security. Keep your login details private and notify us promptly of suspected unauthorized access.</p>
      </div>
      <div>
        <h2>7. International processing and your rights</h2>
        <p>We are based in the Philippines, and our service providers may process information in other countries. Where applicable law requires safeguards for international transfers, we use the safeguards required for those transfers.</p>
        <p>Depending on your location and applicable law, you may request access to, correction of, deletion of, or a copy of your information, and object to or restrict certain processing. Email <a href="mailto:tricia@un-make.com">tricia@un-make.com</a> to make a request. We may need to verify your identity and retain records required by law. For data held independently by Paddle or another marketplace, you can also contact that provider directly.</p>
        <p>You may raise a concern with the Philippine National Privacy Commission or the data protection authority where you live. Our products are intended for adult purchasers; we do not knowingly collect personal information directly from children under 13. Contact us if you believe a child has provided information so we can address it.</p>
      </div>
      <div>
        <h2>8. Policy updates</h2>
        <p>We will update this page when our practices change and provide additional notice for material changes where required. The date above identifies the latest revision.</p>
      </div>
    </PolicyPage>
  );
}
