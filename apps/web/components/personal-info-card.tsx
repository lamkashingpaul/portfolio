import { RevealTextGroup } from "@/components/reveal-text-group";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";
import { User } from "lucide-react";

export const PersonalInfoCard = () => {
  return (
    <Card className="gap-2 transition-shadow duration-200 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex flex-row items-end justify-start gap-2 overflow-hidden">
          <User />
          Personal Info
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent>
        <RevealTextGroup
          className="text-muted-foreground space-y-2 text-sm"
          coverClassName="bg-muted-foreground"
        >
          <li>
            <span className="font-medium">Fullname:</span>
            <span> Ka Shing Lam</span>
          </li>
          <li>
            <span className="font-medium">Location:</span>
            <span> Hong Kong</span>
          </li>
          <li>
            <span className="font-medium">Email:</span>
            <span className="break-all">{` ${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}</span>
          </li>
          <li>
            <span className="font-medium">Languages:</span>
            <span> Cantonese, English, Mandarin</span>
          </li>
        </RevealTextGroup>
      </CardContent>
    </Card>
  );
};
