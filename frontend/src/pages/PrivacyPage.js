import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy | TechResona"
        description="Learn how TechResona collects, uses, and protects your personal information. Read our comprehensive privacy policy for cloud services and managed IT solutions."
        keywords="privacy policy, data protection, information security, TechResona privacy"
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
                Privacy Policy
              </h1>
              <p className="text-gray-600 mb-8">Last updated: January 2025</p>

              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    TechResona Pvt Ltd ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We collect several types of information to provide and improve our services:
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Name and contact details (email, phone number, address)</li>
                    <li>Company name and business information</li>
                    <li>Payment and billing information</li>
                    <li>Account credentials and authentication data</li>
                    <li>Communication preferences</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Technical Information</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Access times and referring website addresses</li>
                    <li>Pages viewed and navigation patterns</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 Service Usage Data</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Service configuration and settings</li>
                    <li>Support tickets and communications</li>
                    <li>Performance metrics and logs</li>
                    <li>Feature usage and interaction data</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use the collected information for various purposes:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Providing and maintaining our services</li>
                    <li>Processing transactions and managing accounts</li>
                    <li>Communicating about services, updates, and support</li>
                    <li>Improving and personalizing user experience</li>
                    <li>Analyzing usage patterns and service performance</li>
                    <li>Detecting and preventing fraud and security issues</li>
                    <li>Complying with legal obligations</li>
                    <li>Sending marketing communications (with consent)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Legal Basis for Processing (India)</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Under Indian data protection laws, we process your personal data based on:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Consent:</strong> When you explicitly agree to data processing</li>
                    <li><strong>Contract:</strong> To fulfill our service obligations</li>
                    <li><strong>Legal Obligation:</strong> To comply with Indian laws and regulations</li>
                    <li><strong>Legitimate Interest:</strong> For business operations and service improvement</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Information Sharing and Disclosure</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may share your information with:
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.1 Service Providers</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Third-party vendors who perform services on our behalf (cloud hosting, payment processing, analytics). These providers are contractually obligated to protect your information.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.2 Business Transfers</h3>
                  <p className="text-gray-700 leading-relaxed">
                    In connection with mergers, acquisitions, or asset sales, your information may be transferred. We will provide notice before your data is transferred and becomes subject to a different privacy policy.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.3 Legal Requirements</h3>
                  <p className="text-gray-700 leading-relaxed">
                    When required by law, court order, or government regulation, or to protect our rights, property, or safety.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.4 With Your Consent</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may share information for any other purpose with your explicit consent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We implement comprehensive security measures to protect your information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Employee training on data protection</li>
                    <li>Secure backup and disaster recovery procedures</li>
                    <li>Incident response and breach notification protocols</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When data is no longer needed, we securely delete or anonymize it. Specific retention periods vary by data type and legal requirements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights and Choices</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Access:</strong> Request copies of your personal data</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                    <li><strong>Objection:</strong> Object to processing of your data</li>
                    <li><strong>Restriction:</strong> Request restriction of data processing</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw previously given consent</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    To exercise these rights, please contact us at privacy@techresona.com. We will respond within 30 days.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Maintain user sessions and preferences</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Personalize content and advertisements</li>
                    <li>Improve website functionality and performance</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    You can control cookie preferences through your browser settings. Note that disabling cookies may affect website functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Third-Party Links</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Children's Privacy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. International Data Transfers</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your information may be transferred to and processed in countries other than India. When we transfer data internationally, we ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy and applicable data protection laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Privacy Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes via email or website notice. Continued use of our services after changes indicates acceptance of the updated policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For questions or concerns about this Privacy Policy or our data practices:
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6 space-y-2">
                    <p className="text-gray-800"><strong>Privacy Officer:</strong> TechResona Privacy Team</p>
                    <p className="text-gray-800"><strong>Email:</strong> privacy@techresona.com</p>
                    <p className="text-gray-800"><strong>Phone:</strong> +91-XXXX-XXXXXX</p>
                    <p className="text-gray-800"><strong>Address:</strong> TechResona Pvt Ltd, India</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Complaints</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you believe your privacy rights have been violated, you have the right to file a complaint with the appropriate data protection authority in India. However, we encourage you to contact us first so we can address your concerns directly.
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

export default PrivacyPage;