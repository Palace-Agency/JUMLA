import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../ui/input";
import { FaSpinner } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";
import { PasswordInput } from "../PasswordInput";
import GoogleAuth from "./GoogleAuth";
import FacebookAuth from "./FacebookAuth";
import { useRegisterMutation } from "../../slices/authApiSlice";
import React from "react";

const formSchema = z
    .object({
        email: z.string().email(),
        password: z.string().min(8),
        confirmPassword: z.string().min(8),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: "custom",
                message: "The passwords did not match",
                path: ["confirmPassword"],
            });
        }
    });

const SignUpAuthForm = ({ className, ...props }) => {
    const [register] = useRegisterMutation();
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const {
        setError,
        formState: { isSubmitting },
    } = form;

    const onSubmit = async ({ email, password }) => {
        try {
            await register({ email, password }).unwrap();
            window.location.href = "/verify";
        } catch (error) {
            setError("email", { message: error.data.errors.email.join() });
        }
    };

    return (
        <div className={cn("grid gap-1", className)} {...props}>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-1"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>E-mail</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="example@domain.com"
                                        className={"rounded-full"}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <PasswordInput
                                        placeholder=""
                                        className={"rounded-full"}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm password</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder=""
                                        type="password"
                                        className={"rounded-full"}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className={"w-full mt-4"}
                        disabled={isSubmitting}
                    >
                        {isSubmitting && (
                            <FaSpinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Submit
                    </Button>
                </form>
            </Form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <GoogleAuth isSubmitting={isSubmitting} />
            <FacebookAuth isSubmitting={isSubmitting} />

            <p className="text-[10px] font-medium leading-[15.05px]">
                By creating an account, you agree to our{" "}
                <Link className="border-b border-gray-400">
                    Terms & Conditions
                </Link>
                ,{" "}
                <Link className="border-b border-gray-400">
                    Privacy Policy.
                </Link>
            </p>
        </div>
    );
};

export default SignUpAuthForm;
