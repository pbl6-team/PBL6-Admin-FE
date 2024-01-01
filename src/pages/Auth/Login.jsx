import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import SignIn from "../../api/Auth/SignIn";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  async function handleLogin() {
    setLoading(true);
    const response = await SignIn(username, password);
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("tokenTimeOut", response.data.tokenTimeOut);
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      localStorage.setItem("refreshTokenTimeOut", response.data.refreshTokenTimeOut);
      console.log(response.data);
      navigate("/dashboard");
      toast.success("Login to success", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error('Username or password is incorrect', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      // setError(true);
    }
    setLoading(false);
  }

  return (
    <div className="relative flex flex-col justify-center items-center bg-[rgb(238,242,246)] min-h-screen overflow-hidden px-2">
      <Card className="py-5 w-full m-auto bg-white sm:max-w-sm lg:max-w-lg shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Sign in</CardTitle>
          <CardDescription className="text-center">
            Enter your username and password to login
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="text">Username</Label>
            <Input
              id="text"
              type="text"
              placeholder=""
              onChange={(e) => setUsername(e.target.value)}
            />
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => {if (e.key === 'Enter') handleLogin()}}
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <Button variant="link" className="text-blue-800">
              Forget Password?
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          {loading ? (
            <Button className="w-full" disabled>
              <div className="flex justify-center items-center space-x-2">
                <Loader2 className="animate-spin" />
                <span>Signing in...</span>
              </div>
            </Button>
          ) : (
            <Button className="w-full" onClick={handleLogin}>
              Sign in
            </Button>
          )}
        </CardFooter>
      </Card>

      
    </div>
  );
}
