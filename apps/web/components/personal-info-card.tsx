import { OpenToWorkIndicator } from "@/components/open-to-work-indicator";
import { RevealTextGroup } from "@/components/reveal-text-group";
import { personalInfo } from "@/lib/site-config";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";
import { User } from "lucide-react";

export const PersonalInfoCard = () => {
  const { fullname, location, email, languages } = personalInfo;

  return (
    <Card className="gap-2 transition-shadow duration-200 hover:shadow-md">
      <CardHeader>
        <CardTitle className="flex flex-row items-end justify-start gap-2 overflow-hidden">
          <User className="text-primary size-6 md:size-8" />
          <div className="text-xl md:text-2xl">Personal Info</div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="space-y-4 lg:space-y-6">
        <OpenToWorkIndicator />

        <RevealTextGroup
          className="text-muted-foreground space-y-4"
          coverClassName="bg-muted-foreground"
        >
          <li>
            <span className="font-bold">Fullname: </span>
            <span>{fullname}</span>
          </li>
          <li>
            <span className="font-bold">Location: </span>
            <span>{location}</span>
          </li>
          <li>
            <span className="font-bold">Email: </span>
            <span className="break-all">{email}</span>
          </li>
          <li>
            <span className="font-bold">Languages: </span>
            <span>{languages.join(", ")}</span>
          </li>
        </RevealTextGroup>
      </CardContent>
    </Card>
  );
};
