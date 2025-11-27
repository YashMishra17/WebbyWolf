import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const schema = z.object({
  name: z.string().trim().min(2, 'Enter your name').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Enter a valid email').max(255, 'Email must be less than 255 characters'),
  message: z.string().trim().min(10, 'Message is too short').max(1000, 'Message must be less than 1000 characters'),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('contact form submission:', data);
    setSuccess(true);
    toast.success('Thanks — we received your message.');
    reset();
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div>
        <Label htmlFor="name" className="text-sm font-medium">Name</Label>
        <Input 
          id="name"
          {...register('name')} 
          className={`mt-1 transition-all duration-200 ${errors.name ? 'border-destructive shake' : 'focus:shadow-brand'}`}
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1 animate-slide-up">{errors.name.message}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="contact-email" className="text-sm font-medium">Email</Label>
        <Input 
          id="contact-email"
          {...register('email')} 
          className={`mt-1 transition-all duration-200 ${errors.email ? 'border-destructive shake' : 'focus:shadow-brand'}`}
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1 animate-slide-up">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="message" className="text-sm font-medium">Message</Label>
        <Textarea 
          id="message"
          {...register('message')} 
          rows={5}
          className={`mt-1 resize-none transition-all duration-200 ${errors.message ? 'border-destructive shake' : 'focus:shadow-brand'}`}
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1 animate-slide-up">{errors.message.message}</p>
        )}
      </div>
      
      <div>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          size="lg"
          className="bg-primary hover:bg-primary-dark hover:scale-105 active:scale-95 transition-all duration-200 shadow-brand font-semibold"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
