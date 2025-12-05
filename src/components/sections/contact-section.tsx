
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Instagram, FileText } from 'lucide-react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    remarks: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = () => {
    const { name, email, company, phone, remarks } = formState;
    const mailtoLink = `mailto:vaibhavsinghal2808@gmail.com?subject=${encodeURIComponent(`One-Pager Resume Request from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\n\nRemarks:\n${remarks}`)}`;
    window.location.href = mailtoLink;
    setIsDialogOpen(false);
  };

  return (
    <section id="contact" className="container mx-auto py-12 md:py-24 text-center scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Get In Touch</h2>
       <div className="multicolor-line mb-12 w-24 mx-auto"></div>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
        I'm always open to discussing new projects, product challenges, or opportunities to collaborate. Feel free to reach out!
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <Link href="mailto:vaibhavsinghal2808@gmail.com">
            <Mail className="mr-2 h-5 w-5" /> Email Me
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="https://www.linkedin.com/in/vaibhav-singhal-iit-ropar" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
          </Link>
        </Button>
         <Button asChild variant="outline" size="lg">
          <Link href="https://github.com/WebBhav" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-5 w-5" /> GitHub
          </Link>
        </Button>
         <Button asChild variant="outline" size="lg">
          <Link href="https://www.instagram.com/thewebbhav" target="_blank" rel="noopener noreferrer">
            <Instagram className="mr-2 h-5 w-5" /> Instagram
          </Link>
        </Button>
      </div>

      <div className="mt-12 text-center">
        <Button variant="secondary" size="lg" onClick={() => setIsDialogOpen(true)}>
            <FileText className="mr-2 h-5 w-5" /> Request One-Pager Resume
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Request One-Pager Resume</DialogTitle>
            <DialogDescription>
              Please fill out the form below. Clicking "Request" will open your default email client to send the request.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name*
              </Label>
              <Input id="name" value={formState.name} onChange={handleInputChange} className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email*
              </Label>
              <Input id="email" type="email" value={formState.email} onChange={handleInputChange} className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="company" className="text-right">
                Company
              </Label>
              <Input id="company" value={formState.company} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input id="phone" type="tel" value={formState.phone} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="remarks" className="text-right">
                Remarks
              </Label>
              <Textarea id="remarks" value={formState.remarks} onChange={handleInputChange} className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
                <Button type="button" variant="secondary">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={handleSubmit} disabled={!formState.name || !formState.email}>Request</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
