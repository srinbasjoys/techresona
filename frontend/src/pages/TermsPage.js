import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { motion } from 'framer-motion';

const TermsPage = () => {
  return (
    <>
      <SEOHead 
        title="Terms and Conditions | TechResona"
        description="Read TechResona's terms and conditions. Learn about our service agreement, user responsibilities, and terms of use for our cloud solutions and managed services."
        keywords="terms and conditions, service agreement, terms of use, TechResona terms"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Terms and Conditions
              </h1>
              <p className="text-gray-600 mb-8">Last updated: January 2025</p>

              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to TechResona Pvt Ltd ("TechResona", "we", "us", or "our"). These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    TechResona provides cloud computing solutions, managed IT services, website development, and digital marketing services including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Azure and AWS cloud migration and management</li>
                    <li>Office 365 setup and migration</li>
                    <li>Managed IT services and support</li>
                    <li>Website development and SEO services</li>
                    <li>Digital marketing and online presence optimization</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When using our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Use services only for lawful purposes</li>
                    <li>Not attempt to disrupt or interfere with our services</li>
                    <li>Respect intellectual property rights</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Payment terms for our services include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Fees are quoted in Indian Rupees (INR) unless otherwise specified</li>
                    <li>Payment is due as per the agreed schedule in the service agreement</li>
                    <li>Late payments may incur additional charges</li>
                    <li>Prices are subject to change with prior notice</li>
                    <li>Refunds are provided as per our refund policy</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Level Agreement (SLA)</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our managed services include specific SLA commitments regarding uptime, response times, and resolution times. Detailed SLA terms are provided in individual service agreements. We strive to maintain 99.9% uptime for critical services and provide 24/7 support for emergency issues.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
                  <p className="text-gray-700 leading-relaxed">
                    All content, trademarks, and intellectual property on our website and in our services remain the property of TechResona or our licensors. Clients retain ownership of their data and content. We may use client logos and project descriptions as portfolio examples with prior written consent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Security and Privacy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We implement industry-standard security measures to protect your data. However, no system is completely secure. We comply with Indian data protection laws and regulations. For detailed information about data handling, please refer to our Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed">
                    To the maximum extent permitted by law, TechResona shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the fees paid by you for the specific service in question during the 12 months preceding the claim.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Service Termination</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Either party may terminate services under the following conditions:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>With 30 days written notice for ongoing services</li>
                    <li>Immediately for breach of terms</li>
                    <li>Immediately for non-payment after grace period</li>
                    <li>Upon completion of project-based services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Confidentiality</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We maintain strict confidentiality of all client information and data. Our employees and contractors are bound by confidentiality agreements. We will not disclose client information except as required by law or with explicit written consent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Force Majeure</h2>
                  <p className="text-gray-700 leading-relaxed">
                    TechResona shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, strikes, government actions, or failures of third-party services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
                  <p className="text-gray-700 leading-relaxed">
                    These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in [Your City], India.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after changes constitutes acceptance of modified terms. We will notify clients of significant changes via email.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6 space-y-2">
                    <p className="text-gray-800"><strong>Email:</strong> legal@techresona.com</p>
                    <p className="text-gray-800"><strong>Phone:</strong> +91-XXXX-XXXXXX</p>
                    <p className="text-gray-800"><strong>Address:</strong> TechResona Pvt Ltd, India</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Acceptance</h2>
                  <p className="text-gray-700 leading-relaxed">
                    By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermsPage;