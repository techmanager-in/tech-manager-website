import React, { useState, useRef } from 'react';
import { ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { playHammerStrike, playForgeShatter } from '../utils/soundEffects';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [feedback, setFeedback] = useState({ text: '', type: 'idle' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const serviceInputRef = useRef(null);

  // Validate a single field
  const validateField = (field, value) => {
    let error = '';
    if (field === 'name') {
      if (!value.trim()) {
        error = 'Please enter your name.';
      } else if (value.trim().length < 2) {
        error = 'Name must be at least 2 characters.';
      }
    } else if (field === 'email') {
      if (!value.trim()) {
        error = 'Please enter your work email.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
        error = 'Please enter a valid email address.';
      }
    } else if (field === 'service') {
      if (!value) {
        error = 'Please select a service or area of interest.';
      }
    }
    return error;
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error immediately upon input to avoid yelling while typing (Validation Event Timing Matrix)
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playHammerStrike(1.3, 0.4);

    // Validate all fields
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const serviceErr = validateField('service', formData.service);

    const newErrors = {
      name: nameErr,
      email: emailErr,
      service: serviceErr
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, service: true });

    // If any error exists, route focus to the first invalid field
    if (nameErr) {
      nameInputRef.current?.focus();
      return;
    }
    if (emailErr) {
      emailInputRef.current?.focus();
      return;
    }
    if (serviceErr) {
      serviceInputRef.current?.focus();
      return;
    }

    setIsSubmitting(true);

    const brief = [
      `Enquiry for Tech Manager:`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Service: ${formData.service}`,
      `Project details: ${formData.message || 'Not specified'}`
    ].join('\n');

    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(brief)
        .then(() => {
          playForgeShatter();
          setFeedback({
            type: 'success',
            text: 'Your enquiry details have been copied to your clipboard! Connect your official email/backend endpoint before publishing to receive live submissions.'
          });
          setIsSubmitting(false);
        })
        .catch(() => {
          setFeedback({
            type: 'notice',
            text: 'Your details are ready. Please configure an email webhook or form API in production.'
          });
          setIsSubmitting(false);
        });
    } else {
      setFeedback({
        type: 'notice',
        text: 'Your details are ready. Please configure an email webhook or form API in production.'
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section section-shell section-space" id="contact">
      <div className="contact-glow" aria-hidden="true" />

      <div className="contact-content reveal is-visible">
        <div className="eyebrow">
          <span className="eyebrow-index">05 /</span> YOUR NEXT MOVE
        </div>
        <h2 id="contact-heading">
          Let’s make<br />
          <span className="gradient-word">something work.</span>
        </h2>
        <p>
          Tell us what’s slowing your team down, what you want to build, or what could work a little better. We’ll take it from there.
        </p>
      </div>

      <form
        className="contact-form reveal is-visible"
        aria-labelledby="contact-heading"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="form-top">
          <span>START A CONVERSATION</span>
          <span>01 — 03</span>
        </div>

        {/* Field 1: Name */}
        <div className="form-group">
          <label htmlFor="name">
            Your name <span aria-hidden="true">*</span>
          </label>
          <input
            ref={nameInputRef}
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="How should we address you?"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            aria-invalid={!!(touched.name && errors.name)}
            aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
          />
          {touched.name && errors.name && (
            <span id="name-error" className="field-error" role="alert">
              <AlertCircle size={12} /> {errors.name}
            </span>
          )}
        </div>

        {/* Field 2: Email */}
        <div className="form-group">
          <label htmlFor="email">
            Work email <span aria-hidden="true">*</span>
          </label>
          <input
            ref={emailInputRef}
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            aria-invalid={!!(touched.email && errors.email)}
            aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
          />
          {touched.email && errors.email && (
            <span id="email-error" className="field-error" role="alert">
              <AlertCircle size={12} /> {errors.email}
            </span>
          )}
        </div>

        {/* Field 3: Service */}
        <div className="form-group">
          <label htmlFor="service">
            What are you looking to build? <span aria-hidden="true">*</span>
          </label>
          <select
            ref={serviceInputRef}
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={(e) => handleChange('service', e.target.value)}
            onBlur={() => handleBlur('service')}
            aria-invalid={!!(touched.service && errors.service)}
            aria-describedby={touched.service && errors.service ? 'service-error' : undefined}
          >
            <option value="" disabled>Select a service</option>
            <option value="Optical Manager">Optical Manager (Retail POS & Customer)</option>
            <option value="Broadcast Manager">Broadcast Manager (WhatsApp Flow)</option>
            <option value="Web Manager">Web Manager (Brand & E-Commerce)</option>
            <option value="Surveillance Manager">Surveillance Manager (CCTV & Vision AI)</option>
            <option value="Custom Software">Custom Software / Internal Operations</option>
            <option value="Something Else">Something Else / Custom Challenge</option>
          </select>
          {touched.service && errors.service && (
            <span id="service-error" className="field-error" role="alert">
              <AlertCircle size={12} /> {errors.service}
            </span>
          )}
        </div>

        {/* Field 4: Message */}
        <div className="form-group">
          <label htmlFor="message">
            A little about your project <span>(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="A few details to get us started..."
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
          />
        </div>

        <button
          className="button button-primary form-submit"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Forging Enquiry...' : 'Prepare my enquiry'} <ArrowUpRight size={16} />
        </button>

        <div
          className={`form-feedback ${feedback.type === 'success' ? 'success' : ''}`}
          role="status"
          aria-live="polite"
        >
          {feedback.text ? (
            <div className="feedback-inner">
              {feedback.type === 'success' && <CheckCircle2 size={14} />}
              <span>{feedback.text}</span>
            </div>
          ) : (
            'This demo form copies the formatted brief to your clipboard and notifies you. Connect your SMTP or API endpoint before launching.'
          )}
        </div>
      </form>
    </section>
  );
}
