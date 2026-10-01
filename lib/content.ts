"use client";

import { FormEvent, useState } from 'react';

const initialState = {
  fullName: '',
  email: '',
  subject: '',
  category: 'General enquiry',
  message: '',
  consent: false,
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' });

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus({ type: 'idle', message: '' });

    const { fullName, email, subject, category, message, consent } = formData;

    if (!fullName || !email || !subject || !category || !message) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' });
      return;
    }

    if (!consent) {
      setStatus({ type: 'error', message: 'Please confirm your consent before sending your enquiry.' });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Submission failed');
      }

      setStatus({ type: 'success', message: result.message });
      setFormData(initialState);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Could not submit your enquiry. Please try again.',
      });
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <label>
        Full name
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={(event) => setFormData({ ...formData, fullName: event.target.value })}
          placeholder="Your full name"
        />
      </label>

      <div className="field-grid two-up">
        <label>
          Email address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(event) => setFormData({ ...formData, email: event.target.value })}
            placeholder="you@example.com"
          />
        </label>

        <label>
          Enquiry category
          <select
            name="category"
            value={formData.category}
            onChange={(event) => setFormData({ ...formData, category: event.target.value })}
          >
            <option>General enquiry</option>
            <option>Admissions</option>
            <option>Academic support</option>
            <option>Technical support</option>
            <option>Finance</option>
          </select>
        </label>
      </div>

      <label>
        Subject
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={(event) => setFormData({ ...formData, subject: event.target.value })}
          placeholder="Subject line"
        />
      </label>

      <label>
        Message
        <textarea
          rows={5}
          name="message"
          value={formData.message}
          onChange={(event) => setFormData({ ...formData, message: event.target.value })}
          placeholder="Tell us how we can help"
        />
      </label>

      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={formData.consent}
          onChange={(event) => setFormData({ ...formData, consent: event.target.checked })}
        />
        I consent to the processing of my submitted enquiry information for the purpose of support and follow-up.
      </label>

      {status.message ? (
        <div className={`form-status ${status.type}`}>{status.message}</div>
      ) : null}

      <button type="submit" className="btn btn-primary full-width">
        Send message
      </button>
    </form>
  );
}
