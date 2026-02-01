import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Replace these with your actual EmailJS credentials
export const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  templateId: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
};

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  const templateParams = {
    from_name: formData.name,
    from_company: formData.company,
    from_email: formData.email,
    from_phone: formData.phone,
    message: formData.message,
  };

  await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    templateParams,
    EMAILJS_CONFIG.publicKey
  );
};
