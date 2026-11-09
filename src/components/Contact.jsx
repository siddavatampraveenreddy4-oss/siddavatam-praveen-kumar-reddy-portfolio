import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  // Parallax motion for giant background typography
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  // Form submission handler supporting EmailJS with automatic mailto fallback
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const form = formRef.current
    const firstName = form.querySelector('#firstName')?.value || ''
    const lastName = form.querySelector('#lastName')?.value || ''
    const email = form.querySelector('#email')?.value || ''
    const message = form.querySelector('#message')?.value || ''

    // Basic required field validation
    if (!firstName.trim() || !email.trim() || !message.trim()) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured = Boolean(
      serviceId &&
      templateId &&
      publicKey &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'
    )

    if (!isConfigured) {
      // Fallback: trigger user's default email client with pre-filled content
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(
          `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
        )}`,
        '_blank'
      )
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, form, publicKey)
      setStatus('success')
      form.reset()
    } catch (err) {
      console.error('EmailJS send error:', err)
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Background parallax layer holding giant Contact typography */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none z-0 flex items-start justify-center overflow-hidden"
      >
        <div
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5 whitespace-nowrap mt-10"
        >
          Contact
        </div>
      </motion.div>

      {/* Red Contact Form Card aligned to the right */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 ml-auto relative z-10 rounded-tl-3xl shadow-2xl"
      >
        {/* Header row with badge and Instagram DM pill */}
        <div className="flex items-center justify-between pb-8 border-b border-white/20">
          <span className="text-white/90 font-mono text-xs uppercase tracking-[0.2em] font-bold">
            Reach Me
          </span>
          <a
            href={socialLinks.instagram || 'https://instagram.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-sm"
          >
            DM on Instagram
          </a>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-12 mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {/* Left Inputs Column */}
            <div className="flex flex-col space-y-8">
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  placeholder="First Name *"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="lastName"
                  name="last_name"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Email Address *"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Right Textarea Column */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project, data challenge, or opportunity... *"
                required
                className="w-full h-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors resize-none min-h-[120px]"
              />
            </div>
          </div>

          {/* Bottom Details, Checkbox, and Submit Button */}
          <div className="flex flex-col space-y-6 pt-4 border-t border-white/20">
            {/* Checkbox */}
            <label className="flex items-start space-x-3 text-white/90 text-sm cursor-pointer select-none">
              <input
                type="checkbox"
                required
                className="w-4 h-4 rounded mt-0.5 text-[#ff2a2a] focus:ring-0 cursor-pointer"
              />
              <span>
                I agree that my submitted information will be processed to respond to this inquiry.
              </span>
            </label>

            <p className="text-white/85 text-xs leading-relaxed">
              Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
            </p>

            <p className="text-white/85 text-xs">
              For urgent inquiries, email me directly at{' '}
              <a
                href={`mailto:${personalInfo.emails.primary}`}
                className="underline font-bold text-white hover:text-black transition-colors"
              >
                {personalInfo.emails.primary}
              </a>
            </p>

            {/* Submit Pill Button */}
            <div className="pt-2">
              {status === 'sending' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-4 rounded-full bg-black/40 border border-white/20 text-white/70 font-bold flex items-center space-x-3 cursor-wait"
                >
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  <span>Sending...</span>
                </button>
              )}

              {status === 'success' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-4 rounded-full bg-green-600 border border-green-400 text-white font-bold flex items-center space-x-2 shadow-lg"
                >
                  <span>Sent Successfully ✓</span>
                </button>
              )}

              {status === 'error' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-4 rounded-full bg-red-950 border border-red-500 text-white font-bold flex items-center space-x-2 shadow-lg"
                >
                  <span>Failed — Try Again</span>
                </button>
              )}

              {status === 'idle' && (
                <button
                  type="submit"
                  className="px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-bold hover:bg-white hover:text-[#ff2a2a] group transition-all duration-300 flex items-center space-x-3 cursor-pointer shadow-lg"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
