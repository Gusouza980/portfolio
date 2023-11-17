"use client";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../button";
import { SectionTitle } from "../section-title";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const { register, handleSubmit } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section id="contact" className="py-16 px-6 md:py-34 flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          title="Vamos trabalhar juntos ? Entre em contato"
          subtitle="contato"
          className="text-center items-center"
        />
        <form
          action=""
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full h-14 bg-gray-800 rounded-lg placehoder:text-gray-400 text-emerald-400 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            {...register("name")}
          />
          <input
            type="email"
            placeholder="Seu email"
            className="w-full h-14 bg-gray-800 rounded-lg placehoder:text-gray-400 text-emerald-400 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            {...register("email")}
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placehoder:text-gray-400 text-emerald-400 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            maxLength={500}
            {...register("message")}
          ></textarea>
          <Button className="w-max mx-auto mt-6 shadow-button">
            Enviar Mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  );
};
