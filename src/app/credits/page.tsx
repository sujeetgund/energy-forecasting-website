import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  { name: "SUJEET GUND", rollNo: "23MIM10023" },
  { name: "PRASHANT BISHT", rollNo: "23MIM10048" },
  { name: "ARYAN SEN", rollNo: "23MIM10056" },
  { name: "ANSHIKA DUBEY", rollNo: "23MIM10083" },
  { name: "ANSHIKA MISHRA", rollNo: "23MIM10080" },
];

export default function CreditsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Team Members
            </CardTitle>
            <CardDescription className="text-center">
              The developers behind the Energy Consumption Predictor
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {teamMembers.map((member) => (
                <Card key={member.rollNo}>
                  <CardContent className="flex items-center space-x-4 p-4">
                    <Avatar>
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <Badge variant="secondary">{member.rollNo}</Badge>
                    </div>
                    <div className="flex space-x-2">
                      <Link
                        href="#"
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <Github className="h-5 w-5" />
                      </Link>
                      <Link
                        href="#"
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link
                        href="#"
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <Mail className="h-5 w-5" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
