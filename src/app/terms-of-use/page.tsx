
import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Use | Vaibhav Singhal',
  description: 'Terms of Use for Vaibhav Singhal\'s personal portfolio website.',
};

export default function TermsOfUsePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm" className="mb-4">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Terms of Use</h1>
          <p className="mt-2 text-muted-foreground">Last Updated: 13 March 2026</p>
          <div className="multicolor-line mt-6"></div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay="delay-100">
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p>
            Welcome to Vaibhav Singhal's Personal Portfolio Website (https://vaibhav-singhal.netlify.app/). These Terms of Use (“Terms”) govern your access to and use of this Website and all content, materials, and services available through it.
          </p>
          <p>
            By accessing or using this Website, you agree to comply with and be legally bound by these Terms. If you do not agree with any part of these Terms, you should discontinue use of the Website immediately.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By visiting, browsing, or interacting with this Website, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Use and any applicable laws and regulations.
            </p>
            <p>
              Your continued use of the Website constitutes acceptance of these Terms, including any future updates or modifications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Purpose of the Website</h2>
            <p>
              This Website serves as a personal portfolio and informational platform operated by Vaibhav Singhal. The Website may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Personal projects</li>
              <li>Professional work samples</li>
              <li>Blog posts or written content</li>
              <li>Links to external platforms</li>
              <li>Contact information</li>
              <li>Demonstrations of technical or creative work</li>
            </ul>
            <p>
              The Website is provided primarily for informational and professional showcase purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Ownership of Content</h2>
            <p>
              Unless otherwise stated, all content on this Website is owned by the Website owner and is protected by applicable intellectual property laws.
            </p>
            <p>
              This includes but is not limited to: text and written material, code snippets, images, graphics, logos, and the overall website layout.
            </p>
            <p>
              You may not copy, reproduce, republish, distribute, modify, or use the content for commercial purposes without prior written permission from the Website owner.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Accuracy of Information</h2>
            <p>
              While efforts are made to keep the information accurate, no guarantees are made regarding completeness or reliability. Content may contain errors, become outdated, or represent personal interpretations.
            </p>
            <p>
              All information is provided “as is” and “as available”. Users should independently verify any information before relying on it for professional or technical decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. External Links and Third-Party Platforms</h2>
            <p>
              This Website may contain links to third-party platforms (social media, code repositories, etc.). These links are provided for convenience. The Website owner does not control these external sites and is not responsible for their content or availability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Third-Party Content and Embedded Material</h2>
            <p>
              Certain parts of the Website may include embedded media or third-party plugins. Such material remains the property of its respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Permitted Use</h2>
            <p>
              You agree to use the Website only for lawful purposes. You may not attempt to hack, disrupt, or damage the Website, or use automated tools to scrape content without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, the Website owner shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of or inability to access the Website. Use of the Website is entirely at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">9. No Professional Advice</h2>
            <p>
              Nothing on this Website should be interpreted as legal, financial, or professional consulting advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">10. Website Availability</h2>
            <p>
              The Website owner does not guarantee that the Website will always be available or free from interruptions. Access may be modified or discontinued at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">11. Modifications to the Website</h2>
            <p>
              The Website owner reserves the right to update content or change features at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">12. Changes to the Terms of Use</h2>
            <p>
              These Terms may be updated at any time. Your continued use of the Website after updates constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">13. Privacy</h2>
            <p>
              The Website owner may collect minimal technical information for site performance purposes. Your use of the Website is also governed by our standard privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">14. Contact Information</h2>
            <p>
              If you have questions about these Terms of Use, you may contact:<br />
              <strong>Vaibhav Singhal</strong><br />
              Email: vaibhavsinghal2808@gmail.com<br />
              Website: https://vaibhav-singhal.netlify.app/
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">15. Governing Law</h2>
            <p>
              These Terms shall be governed and interpreted in accordance with the laws applicable in the Indian jurisdiction where the Website owner operates.
            </p>
          </section>
        </div>
      </AnimatedSection>
    </div>
  );
}
