import React, { useState } from "react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      title: "Email",
      content: "Oumar Bagayoko",
      link: "mailto:bagayokoo291@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      title: "Phone",
      content: "+62 82113699561",
      link: "tel:+62 82113699561",
    },
    {
      icon: <Linkedin className="w-5 h-5 text-primary" />,
      title: "LinkedIn",
      content: "linkedin.com/in/oumar-bagayoko",
      link: "http://www.linkedin.com/in/oumar-bagayoko-7b2843317",
    },
  ];

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/xldjypry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message,
        }),
      });

      if (response.ok) {
        setSuccess("Message sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        setError("Failed to send message. Please try again later.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30 opacity-0">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading text-3xl md:text-4xl mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-medium mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-background/50">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-foreground/70 hover:text-primary transition-colors"
                        target={info.title === "LinkedIn" ? "_blank" : undefined}
                        rel={info.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                      >
                        {info.content}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-medium mb-4">Working Hours</h3>
              <p className="text-foreground/80 mb-2">
                <span className="font-medium">Monday - Friday:</span> 9:00 AM - 5:00 PM
              </p>
              <p className="text-foreground/80">
                <span className="font-medium">Saturday:</span> By appointment only
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              {success && <p className="text-green-600">{success}</p>}
              {error && <p className="text-red-600">{error}</p>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
