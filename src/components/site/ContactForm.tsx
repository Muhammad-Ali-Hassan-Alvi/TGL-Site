"use client";

import Link from "next/link";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const inputClass =
  "w-full rounded-lg border border-teal-500/20 bg-[#0b1220]/50 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/30";

export function ContactForm() {
  const [step, setStep] = useState(1);

  return (
    <section
      id="contact"
      className="pemogan-hero-font py-16 text-white lg:py-24"
      style={{ backgroundColor: "#0B1220" }}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch overflow-hidden rounded-3xl border border-teal-500/20 bg-[#131d2e]/50 shadow-[0_24px_64px_rgba(6,10,18,0.5)] backdrop-blur-sm lg:grid-cols-[3fr_2fr]">
          <div className="p-6 md:p-10">
            <h2 className="max-w-[405px] text-[28px] font-semibold leading-[1.22] text-white sm:text-[36px] md:text-[50px]">
              Ready to Start Your Project?
            </h2>
            <p className="mt-3 max-w-[620px] text-[15px] leading-[1.7] text-white/60">
              Share your goals in a few steps so our team can prepare a relevant solution plan.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className={`h-1.5 w-10 rounded-full ${step >= 1 ? "bg-brand-cyan" : "bg-white/20"}`} />
              <span className={`h-1.5 w-10 rounded-full ${step >= 2 ? "bg-brand-cyan" : "bg-white/20"}`} />
              <span className={`h-1.5 w-10 rounded-full ${step >= 3 ? "bg-brand-cyan" : "bg-white/20"}`} />
            </div>

            <form
              className="mt-8 space-y-4"
              action="#"
              onSubmit={(e) => {
                e.preventDefault();
                trackEvent("lead_form_submit", { form_name: "contact_multistep" });
              }}
            >
              {step === 1 && (
                <>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="name"
                    className={inputClass}
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      autoComplete="tel"
                      className={inputClass}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      autoComplete="email"
                      className={inputClass}
                    />
                  </div>
                </>
              )}
              {step === 2 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <select name="service" className={inputClass} defaultValue="">
                    <option value="" disabled>Service Type</option>
                    <option>Digital Marketing</option>
                    <option>MERN Stack Development</option>
                    <option>Next.js Development</option>
                  </select>
                  <select name="budget" className={inputClass} defaultValue="">
                    <option value="" disabled>Budget Range</option>
                    <option>$10k - $25k</option>
                    <option>$25k - $75k</option>
                    <option>$75k - $150k</option>
                    <option>$150k+</option>
                  </select>
                </div>
              )}
              {step === 3 && (
                <textarea
                  name="message"
                  placeholder="Project goals, timeline, and key requirements"
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              )}
              <div className="flex flex-wrap items-center gap-3">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-[14px] font-semibold text-white transition hover:border-white/45"
                  >
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s + 1)}
                    className="inline-flex items-center justify-center rounded-full bg-brand-cyan px-8 py-3 text-[14px] font-semibold text-white shadow-lg transition hover:scale-95 hover:bg-brand-cyan-bright"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-brand-cyan px-8 py-3 text-[14px] font-semibold text-white shadow-lg transition hover:scale-95 hover:bg-brand-cyan-bright"
                  >
                    Submit Brief
                  </button>
                )}
                <Link
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("cta_click", { cta_name: "book_calendly" })}
                  className="inline-flex items-center justify-center rounded-full border border-brand-cyan px-6 py-3 text-[14px] font-semibold text-brand-cyan transition hover:bg-brand-cyan hover:text-white"
                >
                  Book via Calendly
                </Link>
              </div>
            </form>
          </div>

          <div
            className="relative hidden min-h-[400px] lg:block"
            aria-hidden
            style={{
              background:
                "linear-gradient(135deg, rgba(20,184,166,0.2) 0%, rgba(99,102,241,0.25) 50%, rgba(11,18,32,0.9) 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
