"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
} from "@workspace/ui/components/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ButtonWithLoading } from "@workspace/ui/components/button-with-loading";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import { AlertCircle, SendIcon, TerminalIcon } from "lucide-react";
import { Separator } from "@workspace/ui/components/separator";
import { useSendMessage } from "@/hooks/use-send-message";
import { cn } from "@workspace/ui/lib/utils";

const sendMessageFormSchema = z.object({
  name: z.string().trim().min(1, { error: "Name is required" }),
  email: z
    .email({
      error: (issue) => {
        if (!issue.input) {
          return "Email is required";
        }
        return "Invalid email address";
      },
    })
    .transform((value) => value.toLowerCase()),
  subject: z.string().trim().min(1, { error: "Subject is required" }),
  message: z.string().trim().min(1, { error: "Message is required" }),
});

type SendMessageFormDto = z.infer<typeof sendMessageFormSchema>;

interface SendMessageCardProps {
  className?: string;
}

export const SendMessageCard = (props: SendMessageCardProps) => {
  const { className } = props;

  const form = useForm<SendMessageFormDto>({
    resolver: zodResolver(sendMessageFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { mutateAsync, isPending, isSuccess } = useSendMessage();

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = form;

  const onSubmit = async () => {
    try {
      await mutateAsync();
      reset();
    } catch (error) {
      let errorMessage = "Something went wrong, please try again later";
      if (error instanceof Error && error.message) {
        errorMessage = error.message;
      }
      setError("root.serverError", { type: "server", message: errorMessage });
    }
  };

  return (
    <Card
      className={cn(
        "transition-shadow duration-200 hover:shadow-md",
        className,
      )}
    >
      <CardContent>
        <CardDescription>
          Have a project in mind or want to discuss potential opportunities?
          I&rsquo;d love to hear from you.
        </CardDescription>
        <Separator className="mb-4" />

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="What's this regarding?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Your message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {errors.root?.serverError?.type === "server" ? (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  {errors.root.serverError.message}
                </AlertDescription>
              </Alert>
            ) : null}

            {isSuccess ? (
              <Alert className="text-green-600">
                <TerminalIcon className="h-4 w-4" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  Your message has been sent successfully. I will get back to
                  you as soon as possible.
                </AlertDescription>
              </Alert>
            ) : null}

            <ButtonWithLoading
              type="submit"
              className="h-full w-full"
              isLoading={isSubmitting || isPending}
            >
              <div className="flex flex-wrap items-center justify-center gap-2">
                <SendIcon />
                <div className="text-wrap">Send Message</div>
              </div>
            </ButtonWithLoading>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
