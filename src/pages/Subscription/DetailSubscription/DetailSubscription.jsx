import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Badge } from "../../../components/ui/badge";
import PaymentCard from "./PaymentCard";

export default function DetailSubscription() {
  return (
    <Card>
      <CardHeader>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-6 gap-x-6">
          <Avatar className="grid grid-cols-1 h-16 w-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
          <div className="grid col-span-2 gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value="Nguyen Van A" readOnly={true} />
          </div>
          <div className="grid col-span-2 gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" value="vanA01" readOnly={true} />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-16">
          <div className="grid gap-2">
            <Label htmlFor="serviceName">Service Name</Label>
            <Input id="serviceName" value="Gói tân thủ" readOnly={true} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="startDate">Start Date</Label>
            <Input id="startDate" value="08:00 10/10/2002" readOnly={true} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="endDate">End Date</Label>
            <Input id="endDate" value="08:00 10/10/2002" readOnly={true} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Badge
              variant="outline"
              className="bg-green-600 w-16 relative bottom-1 right-2"
            >
              <span className="text-white">Active</span>
            </Badge>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <PaymentCard className="grid col-span-2"/>
        </div>
      </CardContent>
    </Card>
  );
}
