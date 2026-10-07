"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  ArrowUpRight,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "lapsatechnologies@gmail.com",
    href: "mailto:lapsatechnologies@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 111 608 331",
    href: "tel:+254111608331",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
  },
  {
    icon: Building2,
    label: "Office",
    value: "Kahawa Wendani, Magu House, 1st Floor, Room 27",
  },
];

const socials = [
  { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61570201295782", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=v17tv48", label: "Instagram" },
  { icon: FaTwitter, href: "https://x.com/Lapsa020?t=6Mt7tfu41Aw5JKx3vy9BwA&s=09", label: "Twitter / X" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@muriithi_nguru?_t=ZM-8wuMwLm6AoH&_r=1", label: "TikTok" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/edwin-nguru-92ab23312", label: "LinkedIn" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    // NOTE: removed `overflow-hidden` — instead we constrain the blobs
    //       so they never extend past the section width.
    <section className="relative bg-white py-16 md:py-24">
      {/* ---- decorative blobs (contained so they can't cause overflow) ---- */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px] sm:h-[520px] sm:w-[520px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] translate-x-1/4 rounded-full bg-blue-500/10 blur-[120px] sm:h-[380px] sm:w-[380px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        {/* ---------- HEADER ---------- */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            Get in touch
          </span>

          <h2 className="mt-5 text-[26px] font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl md:text-5xl">
            Let&apos;s build something{" "}
            <span className="text-orange-500">remarkable</span> together.
          </h2>

          <p className="mt-4 text-[14.5px] leading-relaxed text-gray-600 sm:text-[15px] md:text-base">
            Tell us about your project — we usually reply within 24 hours.
          </p>
        </motion.div>

        {/* ---------- MAIN GRID ---------- */}
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* ============================================
              LEFT — INFO
          ============================================ */}
          <motion.aside
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
            className="min-w-0 lg:col-span-5"
          >
            <div className="flex h-full flex-col gap-6 rounded-3xl border border-gray-100 bg-gray-50/60 p-5 sm:p-6 md:p-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Contact Information
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Reach out through any of these channels.
                </p>
              </div>

              {/* info list */}
              <ul className="space-y-3">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  const Wrapper = item.href ? "a" : "div";
                  return (
                    <motion.li
                      key={item.label}
                      variants={fadeUp}
                      custom={i + 2}
                      initial="hidden"
                      animate="show"
                      className="min-w-0"
                    >
                      <Wrapper
                        {...(item.href ? { href: item.href } : {})}
                        className="group flex items-start gap-3 rounded-2xl border border-transparent bg-white p-3.5 transition-all hover:border-orange-200 hover:shadow-[0_8px_30px_-12px_rgba(255,122,0,0.25)] sm:gap-4 sm:p-4"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                          <Icon size={18} strokeWidth={2.2} />
                        </span>

                        {/* KEY: min-w-0 lets children shrink instead of
                            forcing the parent wider than the viewport */}
                        <span className="min-w-0 flex-1">
                          <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block break-words text-[14px] font-medium leading-snug text-gray-800 sm:text-[14.5px]">
                            {item.value}
                          </span>
                        </span>

                        {item.href && (
                          <ArrowUpRight
                            size={16}
                            className="mt-3 shrink-0 text-gray-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-500"
                          />
                        )}
                      </Wrapper>
                    </motion.li>
                  );
                })}
              </ul>

              {/* socials */}
              <div className="mt-auto pt-4">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400">
                  Follow us
                </p>
                <div className="flex flex-wrap gap-2">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition-all hover:-translate-y-0.5 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                      >
                        <Icon size={15} />
                      </a>
                    );
                  })}
                </div>
                <p className="mt-3 break-words text-[12.5px] text-gray-500">
                  @{" "}
                  <span className="font-semibold text-gray-700">
                    Lapsa Web &amp; Graphics
                  </span>
                </p>
              </div>
            </div>
          </motion.aside>

          {/* ============================================
              RIGHT — FORM
          ============================================ */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
            className="min-w-0 lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="min-w-0 rounded-3xl border border-gray-100 bg-white p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.15)] sm:p-6 md:p-8"
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Send us a message
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Fields marked with * are required.
                </p>
              </div>

              {/* grid stays 1 col until sm; children use min-w-0 to
                  prevent inputs from pushing the form wider than the card */}
              <div className="grid min-w-0 gap-4 sm:grid-cols-2">
                <Field label="Full name" required>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="input"
                  />
                </Field>

                <Field label="Email address" required>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jane@example.com"
                    className="input"
                  />
                </Field>

                <Field label="Phone number">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+254 700 000 000"
                    className="input"
                  />
                </Field>

                <Field label="Subject">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project enquiry"
                    className="input"
                  />
                </Field>

                <div className="min-w-0 sm:col-span-2">
                  <Field label="Message" required>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us a bit about what you need…"
                      className="input resize-none"
                    />
                  </Field>
                </div>
              </div>

              {/* status banner */}
              {status && status !== "sending" && (
                <div
                  className={`mt-5 flex items-start gap-3 rounded-2xl border p-3.5 text-sm ${
                    status === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  ) : (
                    <AlertCircle size={18} className="mt-0.5 shrink-0" />
                  )}
                  <span className="min-w-0 break-words">
                    {status === "success"
                      ? "Message sent successfully. We'll be in touch soon."
                      : "Something went wrong. Please try again or email us directly."}
                  </span>
                </div>
              )}

              <div className="mt-6 flex flex-col-reverse items-stretch justify-between gap-3 sm:flex-row sm:items-center">
                <p className="text-[12.5px] text-gray-400">
                  By sending, you agree to be contacted about your enquiry.
                </p>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/25 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <Send
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* -------- shared input styling -------- */}
      <style jsx>{`
        .input {
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
          border-radius: 0.9rem;
          border: 1px solid #e5e7eb;
          background: #f9fafb;
          padding: 0.85rem 1rem;
          font-size: 0.92rem;
          color: #111827;
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease,
            box-shadow 0.2s ease;
        }
        .input::placeholder {
          color: #9ca3af;
        }
        .input:hover {
          background: #ffffff;
        }
        .input:focus {
          background: #ffffff;
          border-color: #ff7a00;
          box-shadow: 0 0 0 4px rgba(255, 122, 0, 0.12);
        }
      `}</style>
    </section>
  );
}

/* ---------- Field helper ---------- */
function Field({ label, required, children }) {
  return (
    <label className="block min-w-0">
      <span className="mb-1.5 block text-[12.5px] font-semibold text-gray-700">
        {label}
        {required && <span className="ml-0.5 text-orange-500">*</span>}
      </span>
      {children}
    </label>
  );
}