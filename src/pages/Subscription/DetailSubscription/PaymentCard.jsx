import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { Switch } from "../../../components/ui/switch";


export default function PaymentCard(props) {
  return (
    <Card className={props.className}>
      <CardHeader>
        <CardTitle>Payment Detail</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 -space-y-2">
        <div className="flex items-center justify-between space-x-2">
          <span className="font-medium">Name:</span>
          <span className="font-medium">Nguyen Van A</span>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <span className="font-medium">Phone:</span>
          <span className="font-medium">0931 265 765</span>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <span className="font-medium">Issuer:</span>
          <span className="font-medium">MB Bank</span>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <span className="font-medium">Type:</span>
          <span className="font-medium">Mastercard Credit Card</span>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <span className="font-medium">Trading time:</span>
          <span className="font-medium">10:12:10 01/10/2023</span>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <span className="font-medium">Price:</span>
          <span className="font-medium">30 000đ</span>
        </div>
      </CardContent>
    </Card>
  );
}
