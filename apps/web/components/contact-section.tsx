import { ContactInformation } from "@/components/contact-information";
import { RevealText } from "@/components/reveal-text";
import { SendMessageCard } from "@/components/send-message-card";
import { SlideText } from "@/components/slide-text";
import { Separator } from "@workspace/ui/components/separator";
import { cn } from "@workspace/ui/lib/utils";

interface ContactSectionProps {
  className?: string;
}

export const ContactSection = (props: ContactSectionProps) => {
  const { className } = props;
  return (
    <section className={cn("", className)}>
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="flex flex-row justify-center">
            <RevealText coverClassName="bg-primary">
              <h2 className="text-primary text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Contact Me
              </h2>
            </RevealText>
          </div>
          <Separator className="mb-4 xl:mb-6" />

          <div className="space-y-4 lg:space-y-6">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_400px] lg:gap-6">
              <SlideText>
                <SendMessageCard className="h-full" />
              </SlideText>
              <SlideText>
                <ContactInformation className="h-full" />
              </SlideText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
