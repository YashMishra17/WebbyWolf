'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';

const schema = z.object({
  email: z.string().min(1, 'Required').email('Invalid email'),
});

type FormData = z.infer<typeof schema>;

export default function NewsletterForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 600));
    console.log('newsletter subscribe', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3 items-start">
      <div className="flex-1">
        <input {...register('email')} placeholder="Enter your email" className="w-full px-4 py-3 border rounded-md" />
        {errors.email && <p className="text-sm text-red-600 mt-2">{errors.email.message}</p>}
        {isSubmitSuccessful && <p className="text-sm text-green-600 mt-2">Thanks — check your inbox.</p>}
      </div>
      <motion.button type="submit" whileTap={{ scale: 0.98 }} className="btn-brand px-5 py-3 rounded-md text-white" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Subscribe'}
      </motion.button>
    </form>
  );
}
