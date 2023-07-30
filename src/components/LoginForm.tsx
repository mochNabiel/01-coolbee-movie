'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {message: 'Password must be at least 6 characters long'}),
});

export const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full mb-5'>
        <div className='mt-3'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type='email'
                    placeholder='Enter your Email'
                    {...field}
                    className='text-gray-200 py-6 border-b border-gray-400 mb-3 focus:border-[#F6C90E] focus:placeholder-transparent placeholder:text-gray-400 placeholder:opacity-60'
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='Enter your Password'
                    {...field}
                    className='text-gray-200 py-6 border-b border-gray-400 mb-3 focus:border-[#F6C90E] focus:placeholder-transparent placeholder:text-gray-400 placeholder:opacity-60'
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {/* Remember and forgot */}
        <div className='w-full flex justify-between items-center py-2 mb-5 font-light text-gray-200'>
          <div className='flex gap-2'>
            <input type='checkbox' id='remember' className='cursor-pointer' />
            <label htmlFor='remember' className='cursor-pointer'>
              Remember me
            </label>
          </div>
          <Link href='/forgot-password'>
            <p>Forgot password?</p>
          </Link>
        </div>

        {/* Submit */}
        <Button
          type='submit'
          className='w-full text-xl font-semibold tracking-wider py-7 bg-gray-200 rounded-xl hover:bg-[#F6C90E]'
        >
          Login
        </Button>
      </form>
    </Form>
  );
};
