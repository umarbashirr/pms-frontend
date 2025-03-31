import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { LoginForm } from "../_components/LoginForm";

const LoginPage = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-lg">Login to your account</CardTitle>
        <CardDescription>
          Welcome Back! We are happy to see you again
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
};

export default LoginPage;
