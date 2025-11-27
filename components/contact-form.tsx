'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1,'Required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10,'Too short')
});

type Data = z.infer<typeof schema>;

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<Data>({ resolver: zodResolver(schema) });

  const onSubmit = async (d: Data) => {
    await new Promise(r => setTimeout(r, 500));
    console.log('contact submit', d);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <a className="text-brand text-sm" href="#">Get in touch</a>
        <h2 className="h1-design text-2xl mt-2">Contact us</h2>
        <p className="text-gray-600 mt-3">Fill the form and we’ll get back in 24–48 hours.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <input {...register('name')} placeholder="Name" className="w-full px-4 py-3 border rounded-md" />
        {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}

        <input {...register('email')} placeholder="Email" className="w-full px-4 py-3 border rounded-md" />
        {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}

        <textarea {...register('message')} placeholder="Message" rows={5} className="w-full px-4 py-3 border rounded-md"></textarea>
        {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}

        <div className="flex items-center justify-between">
          <button className="btn-brand px-5 py-3 rounded-md text-white" type="submit">Send message</button>
          {isSubmitSuccessful && <p className="text-sm text-green-600">Thanks — message queued (demo)</p>}
        </div>
      </form>
    </div>
  );
}
