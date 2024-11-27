import { cn } from "../lib/utils";
import { Button } from "../ui/button";
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
} from "../ui/form";
import { Link } from "react-router-dom";
import { PasswordInput } from "../ui/PasswordInput";
import { useLoginMutation } from "../../slices/authApiSlice";
import React from "react";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

const SignInAuthForm = ({ className, ...props }) => {
    const [login] = useLoginMutation();

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
            const { user } = await login({ email, password }).unwrap();
            console.log(user);
            if (user) {
                window.location.href = "/";
            }
        } catch (error) {
            setError("email", { message: error.data.errors.email.join() });
        }
    };

    return (
        <div className={cn("grid gap-3", className)} {...props}>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
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
                    <Link
                        className="flex justify-end text-sm underline font-medium leading-[15.05px]"
                        to={"/forget-password"}
                    >
                        Forgot your password?
                    </Link>
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

export default SignInAuthForm;
