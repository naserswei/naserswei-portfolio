"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Bounce, toast } from "react-toastify";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  Email: z.string().min(2).email(),
  content: z.string().min(20),
});

export function ProfileForm() {
  // ...
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      Email: "",
      content: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        values,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Thank you for sending me a message 😁 ", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex p-4 sm:p-0 flex-col sm:flex-row items-center w-full  space-y-8"
      >
        <div className=" text-black w-full  sm:w-1/3 text-3xl leading-loose font-semibold">
          Drop me a line.
          <br /> I would like to hear from you.
        </div>
        <div className=" flex flex-col  gap-4 w-full sm:w-2/3">
          <h1 className=" text-4xl text-[#F44336]">Get in Touch</h1>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <FormMessage />
                </FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <FormMessage />
                </FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="resize-none"
                    placeholder="Type your message here."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className=" dark:bg-gray-800 dark:text-white w-1/3"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex gap-1">
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </div>
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
