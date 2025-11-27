import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const schema = z.object({
  email: z.string().trim().email('Please enter a valid email').max(255, 'Email must be less than 255 characters'),
});

type FormData = z.infer<typeof schema>;

const NewsletterForm = () => {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('newsletter subscription:', data);
    setSuccess(true);
    toast.success('Thanks! Check your inbox.');
    reset();
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            {...register('email')}
            placeholder="example@gmail.com"
            className={`w-full px-5 py-3.5 border rounded-lg bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[15px] ${
              errors.email ? 'border-destructive shake' : 'border-border'
            }`}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary hover:bg-primary-dark hover:scale-105 active:scale-95 transition-all duration-200 shadow-brand font-semibold whitespace-nowrap px-8 py-3.5 text-[15px] rounded-lg"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe →'}
        </Button>
      </div>
      {errors.email && (
        <p className="text-sm text-destructive mt-2 ml-1">{errors.email.message}</p>
      )}
      <p className="text-[14px] text-muted-foreground mt-3 flex items-center gap-2 ml-1">
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold">✓</span>
        No credit required!
      </p>
    </form>
  );
};

export default NewsletterForm;
