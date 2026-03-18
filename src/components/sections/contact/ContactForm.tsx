"use client";

import { useState } from "react";
import { Mail, MessageCircle, Building2, Check } from "lucide-react";
import { motion } from "framer-motion";

const channels = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "support@antigravity.dev",
    desc: "We respond within 24 hours",
  },
  {
    icon: <MessageCircle size={20} />,
    label: "Chat",
    value: "Chat with our team",
    desc: "Available 9 AM–6 PM PT",
  },
  {
    icon: <Building2 size={20} />,
    label: "Enterprise",
    value: "sales@antigravity.dev",
    desc: "Custom support available",
  },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "general",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", subject: "general", message: "" });
    }, 3000);
  };

  if (submitted) {
    return (
      <section className="w-full py-20 px-8 md:px-16 bg-white" style={{ backgroundColor: "#fafafa" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl p-12 text-center"
            style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
          >
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-6"
              style={{ backgroundColor: "#34a853" }}
            >
              <Check size={24} color="#fff" />
            </div>
            <h2
              style={{
                fontFamily: "'Google Sans Flex', sans-serif",
                fontSize: "24px",
                fontWeight: 500,
                color: "#1a1a1a",
                marginBottom: "8px",
              }}
            >
              Thank you for reaching out!
            </h2>
            <p
              style={{
                fontFamily: "'Google Sans Flex', sans-serif",
                fontSize: "15px",
                color: "#5f6368",
                lineHeight: 1.6,
              }}
            >
              We&apos;ve received your message and will get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-20 px-8 md:px-16 bg-white" style={{ backgroundColor: "#fafafa" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-lg border transition-colors"
                  style={{
                    borderColor: "rgba(0,0,0,0.12)",
                    fontFamily: "'Google Sans Flex', sans-serif",
                    fontSize: "14px",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)")}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-lg border transition-colors"
                  style={{
                    borderColor: "rgba(0,0,0,0.12)",
                    fontFamily: "'Google Sans Flex', sans-serif",
                    fontSize: "14px",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)")}
                />
              </div>

              <input
                type="text"
                name="company"
                placeholder="Company (optional)"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border transition-colors"
                style={{
                  borderColor: "rgba(0,0,0,0.12)",
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "14px",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)")}
              />

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border transition-colors"
                style={{
                  borderColor: "rgba(0,0,0,0.12)",
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "14px",
                  backgroundColor: "#fff",
                }}
              >
                <option value="general">General inquiry</option>
                <option value="support">Support request</option>
                <option value="sales">Sales inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="feedback">Product feedback</option>
              </select>

              <textarea
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border transition-colors resize-none"
                style={{
                  borderColor: "rgba(0,0,0,0.12)",
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "14px",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)")}
              />

              <button
                type="submit"
                className="w-full rounded-full py-3 transition-opacity hover:opacity-90 active:scale-95"
                style={{
                  backgroundColor: "#1a1a1a",
                  color: "#fff",
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Send message
              </button>
            </form>
          </div>

          {/* Contact Channels */}
          <div className="space-y-4">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl p-6 transition-shadow cursor-default"
                style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
                onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)")}
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl mb-3"
                  style={{ backgroundColor: "#f1f3f4", color: "#1a1a1a" }}
                >
                  {channel.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Google Sans Flex', sans-serif",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#1a1a1a",
                    marginBottom: "4px",
                  }}
                >
                  {channel.label}
                </h3>
                <p
                  style={{
                    fontFamily: "'Google Sans Flex', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#3c4043",
                    marginBottom: "4px",
                  }}
                >
                  {channel.value}
                </p>
                <p
                  style={{
                    fontFamily: "'Google Sans Flex', sans-serif",
                    fontSize: "12px",
                    color: "#5f6368",
                  }}
                >
                  {channel.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
