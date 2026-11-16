import Link from "next/link";
import PolicyPage from "@/components/PolicyPage";

export const metadata = {
  title: "Terms of Service | UNMAKE Studio",
  description: "Terms for using UNMAKE Studio websites, web apps, and digital products, including The Table.",
};

export default function TermsPage() {
  return (
    <PolicyPage title="Terms of Service" intro="Please read these terms before using our website or purchasing a UNMAKE digital product.">
      <div>
        <h2>1. About UNMAKE and these terms</h2>
        <p>UNMAKE Studio (also called UNMAKE, “we,” “us,” or “our”) is operated by Tricia Hilario, an independent creator based in the Philippines. These terms cover un-make.com and our web apps and digital products, including The Table. Contact us at <a href="mailto:tricia@un-make.com">tricia@un-make.com</a>.</p>
        <p>By using our services or purchasing a product, you agree to these terms, our <Link href="/privacy">Privacy Policy</Link>, and our <Link href="/refunds">Refund Policy</Link>. If you do not agree, please do not use the services or purchase. You must be legally able to enter into this agreement, or have a parent or guardian who agrees on your behalf.</p>
      </div>
      <div>
        <h2>2. Products and access</h2>
        <p>We create practical web apps and digital resources for everyday life. The product page explains the included features, price, access requirements, and any usage limits. A web app requires a compatible browser and an internet connection for online features; it is not a physical product.</p>
        <p>The Table is offered for a one-time payment, with no recurring subscription for that purchase. A one-time purchase does not promise perpetual hosting or every future product or paid upgrade. We will not start a subscription or charge for an upgrade without your separate agreement. If we plan to discontinue a purchased service, we will provide reasonable advance notice and explain the available options, subject to your legal rights.</p>
        <p>Access or download instructions are provided following successful checkout. If access is missing or does not work, contact us with your order reference so we can resolve it. Products still marked as coming soon or awaiting checkout are not available for purchase until checkout is enabled.</p>
      </div>
      <div>
        <h2>3. Payments and taxes</h2>
        <p>For purchases made through Paddle, Paddle.com acts as our online reseller and Merchant of Record. Paddle conducts the order process, handles payment-related customer service and returns, and issues transaction receipts. UNMAKE provides product and technical support. Paddle purchases are also subject to the <a href="https://www.paddle.com/legal/checkout-buyer-terms">Paddle Buyer Terms</a>. For billing or refund assistance, visit <a href="https://paddle.net">paddle.net</a>.</p>
        <p>Review the currency, final total, and any applicable taxes before completing checkout. Where a price excludes tax, applicable sales tax is added at checkout. Products purchased through another marketplace, such as Etsy, use that marketplace’s checkout and applicable buyer terms.</p>
      </div>
      <div>
        <h2>4. Accounts and permitted use</h2>
        <p>When a product offers accounts, provide accurate information, keep your password secure, and tell us if you suspect unauthorized access. Use household invitations only for people you are authorized to invite, within the limit shown for your product.</p>
        <p>Your purchase grants a personal, non-exclusive, non-transferable license to use the product, including permitted household sharing. It does not transfer ownership of the software or designs. You may not resell access, distribute paid files publicly, bypass access controls, interfere with the service, or upload unlawful content.</p>
      </div>
      <div>
        <h2>5. Your content and privacy</h2>
        <p>You retain ownership of the information you enter. You give us permission to store and process it as needed to provide the features you use. You are responsible for having permission to share content and for checking entries for accuracy. Our <Link href="/privacy">Privacy Policy</Link> explains how we handle personal information.</p>
      </div>
      <div>
        <h2>6. Product limitations and changes</h2>
        <p>Our tools support everyday organization. The Table does not provide medical, nutrition, allergy, or food-safety advice. Check ingredients and dietary suitability yourself and seek qualified advice when needed.</p>
        <p>We aim to keep services useful and available, but maintenance, outages, and errors may occur. We may make reasonable updates for functionality or security. We do not exclude statutory guarantees or remedies. To the extent permitted by law, we are not responsible for indirect losses arising from use of the services; this does not limit liability that cannot lawfully be limited.</p>
      </div>
      <div>
        <h2>7. Refunds, suspension, and disputes</h2>
        <p>Our <Link href="/refunds">Refund Policy</Link> provides a 14-day refund window for UNMAKE purchases through Paddle. We may restrict access for misuse or security threats and, where practical, give notice and a chance to resolve the issue. You may stop using the service at any time and contact us about account deletion.</p>
        <p>Please email us first if something is wrong so we can try to resolve it. These terms are governed by Philippine law, without taking away mandatory consumer protections or rights to bring a claim where you live.</p>
      </div>
      <div>
        <h2>8. Updates to these terms</h2>
        <p>We may update these terms as products or requirements change. We will publish the revised date here and provide reasonable notice of material changes affecting existing customers. Changes do not remove rights that already apply to your purchase.</p>
      </div>
    </PolicyPage>
  );
}
