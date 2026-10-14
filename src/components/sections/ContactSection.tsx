import { SectionHeading } from "./shared/SectionHeading";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { enquiryInterests, enquiryTopics, socialLinks } from "./data";
import { SocialIcon } from "./shared/SocialIcon";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.email("Enter a valid email address."),
  organisation: z.string().optional(),
  interest: z.string().min(1, "Choose an area of interest."),
  project: z.string().trim().min(3, "Tell us briefly about your project."),
  message: z.string().trim().min(10, "Please enter at least 10 characters."),
});

type EnquiryValues = z.infer<typeof enquirySchema>;

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    mode: "onBlur",
  });

  const onSubmit = (_values: EnquiryValues) => setSubmitted(true);

  return (
    <section className="site-section site-section-alt" id="contact">
      <div className="site-container">
        <SectionHeading eyebrow="Contact" title="Let's discuss the biological opportunity." description="Have a wastewater challenge, carbon-utilisation opportunity, product idea, or biological technology to explore? Tell us what you are working on." />
        <div className="site-contact-grid">
          <aside className="site-contact-info">
            <h3>What can we discuss?</h3>
            <ul className="site-fact-list" style={{ marginBottom: "2rem" }}>
              {enquiryTopics.map((item) => <li key={item}>{item}</li>)}
            </ul>
            
            <div className="site-social">
              <h4>Follow our work</h4>
              <ul className="site-social-list">
                {socialLinks.map((social) => (
                  <li key={social.platform}>
                    <a
                      className={`site-social-link site-social-${social.platform}`}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`BluGreen on ${social.label}`}
                    >
                      <SocialIcon platform={social.platform} />
                      <span>{social.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <address>Ernakulam, Kerala, India<br /><a href="mailto:info@blugreenbio.com">info@blugreenbio.com</a><br /><a href="https://blugreenbio.com" target="_blank" rel="noreferrer">blugreenbio.com</a></address>
          </aside>
          <form className="site-contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <h3>Send an enquiry</h3>
            <div className="site-form-grid">
              <label className="site-form-field">Full name *
                <input autoComplete="name" {...register("name")} aria-invalid={Boolean(errors.name)} />
                {errors.name && <small role="alert">{errors.name.message}</small>}
              </label>
              <label className="site-form-field">Work email *
                <input type="email" autoComplete="email" {...register("email")} aria-invalid={Boolean(errors.email)} />
                {errors.email && <small role="alert">{errors.email.message}</small>}
              </label>
            
              <label className="site-form-field site-form-full">Project / requirement *
                <input {...register("project")} aria-invalid={Boolean(errors.project)} />
                {errors.project && <small role="alert">{errors.project.message}</small>}
              </label>
              <label className="site-form-field site-form-full">Message *
                <textarea rows={5} {...register("message")} aria-invalid={Boolean(errors.message)} />
                {errors.message && <small role="alert">{errors.message.message}</small>}
              </label>
            </div>
            <button className="site-button site-button-primary" type="submit">Send enquiry <span aria-hidden="true">→</span></button>
            {submitted && <p className="site-form-success" role="status">Thank you. Your enquiry has been validated. Connect this form to a backend to receive submissions.</p>}
           
          </form>
        </div>
      </div>
    </section>
  );
}
