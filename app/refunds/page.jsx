import Link from "next/link";
import PolicyPage from "@/components/PolicyPage";

export const metadata = {
  title: "Refund Policy | UNMAKE Studio",
  description: "Request a refund within 14 days for UNMAKE Studio digital products purchased through Paddle, including The Table.",
};

export default function RefundsPage() {
  return (
    <PolicyPage title="Refund Policy" intro="We want our tools to be useful. If a purchase is not right for you, here is how to ask for a refund.">
      <div>
        <h2>1. Our 14-day refund window</h2>
        <p>For UNMAKE Studio web apps and digital products purchased through Paddle, including The Table, you may request a full refund within 14 calendar days of your purchase. You can request a refund if the product does not suit your needs, you purchased by mistake, or you have trouble accessing it. Using or accessing the product during this period does not by itself remove this refund offer.</p>
        <p>This policy applies to one-time purchases. A refund request received within the window remains eligible even if processing takes longer. Free access and fully discounted orders have no payment to refund.</p>
      </div>
      <div>
        <h2>2. How to request a refund</h2>
        <p>Email <a href="mailto:tricia@un-make.com">tricia@un-make.com</a> with the email address used at checkout, your order or transaction reference if available, and the product name. You may include feedback or describe a problem, but a detailed explanation is not required for requests within 14 days. Do not send card numbers or passwords.</p>
        <p>You can also request billing help or a refund for a Paddle order directly at <a href="https://paddle.net">paddle.net</a>. Paddle is the Merchant of Record for purchases processed through its checkout and handles the payment reversal.</p>
      </div>
      <div>
        <h2>3. Processing and access</h2>
        <p>We aim to acknowledge requests within three business days. Approved refunds are returned through the original payment method by Paddle. The time until funds appear depends on the payment provider and your bank; we cannot guarantee an exact posting date.</p>
        <p>Once your purchase is refunded, the paid license and associated access may be withdrawn, including access shared through that purchase. For questions about retrieving your own app entries or deleting an account, contact us. Refunding an order and deleting personal information are separate requests; see our <Link href="/privacy">Privacy Policy</Link>.</p>
      </div>
      <div>
        <h2>4. Problems reported after 14 days</h2>
        <p>Contact us if you have not received access, were charged twice, or the product has a significant unresolved fault. We will investigate and work with you and Paddle on an appropriate remedy. Requests after the standard refund window are considered individually, alongside Paddle’s policies and applicable consumer law.</p>
        <p>This policy does not restrict mandatory consumer rights, remedies for defective or misdescribed products, or Paddle’s authority to issue refunds under its <a href="https://www.paddle.com/legal/refund-policy">Refund Policy</a>.</p>
      </div>
      <div>
        <h2>5. Purchases through other marketplaces</h2>
        <p>If you bought a UNMAKE product through Etsy or another marketplace, request assistance through that marketplace’s order system. Its payment and refund rules apply to that transaction, together with your statutory rights. We can help identify your order if you email us.</p>
      </div>
      <div>
        <h2>6. Contact</h2>
        <p>UNMAKE Studio is operated by Tricia Hilario in the Philippines. For product support, refund requests, or questions about this policy, email <a href="mailto:tricia@un-make.com">tricia@un-make.com</a> or use our <Link href="/studio/contact">contact form</Link>.</p>
      </div>
    </PolicyPage>
  );
}
