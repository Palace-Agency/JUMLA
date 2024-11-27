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
import { Button } from "../Button";
import { FaSpinner } from "react-icons/fa6";
import { Input } from "../ui/input";
import { useResetPasswordMutation } from "../../slices/authApiSlice";
import { getUser } from "../../slices/userSlice";
import { PasswordInput } from "../PasswordInput";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../router/router";
import React from "react";

const FormSchema = z
    .object({
        new_password: z
            .string()
            .min(8, "Password must contain at least 8 character(s)")
            .regex(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Your password needs to have at least one (number - alphabet - {@$!%*#?&})"
            ),
        new_password_confirmation: z
            .string()
            .min(8, "Password must contain at least 8 character(s)"),
    })
    .superRefine(({ new_password_confirmation, new_password }, ctx) => {
        if (new_password_confirmation !== new_password) {
            ctx.addIssue({
                code: "custom",
                message: "The passwords did not match",
                path: ["new_password_confirmation"],
            });
        }
    });

const ResetPasswordForm = () => {
    const [resetPassword] = useResetPasswordMutation();
    const navigate = useNavigate();
    const user = getUser();
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            new_password: "",
            new_password_confirmation: "",
        },
    });

    const {
        setError,
        formState: { isSubmitting },
    } = form;

    const onSubmit = async ({ new_password }) => {
        try {
            const email = user?.email;
            const { message } = await resetPassword({
                email,
                new_password,
            }).unwrap();
            toast.success(message);
            navigate("/sign-in");
        } catch (error) {
            setError("email", { message: error.data.message });
        }
    };

    return (
        <div className="shadow-md p-6 rounded-2xl w-4/6">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-2/3 space-y-6"
                >
                    <div className="flex flex-col justify-between w-[400px] mb-3">
                        <p className="font-semibold">Reset Password</p>
                        <p className="text-sm text-gray-500">
                            Please enter your new password.
                        </p>
                    </div>
                    <FormField
                        control={form.control}
                        name="new_password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>New Password</FormLabel>
                                <FormControl>
                                    <PasswordInput
                                        placeholder="Enter your password"
                                        className={"rounded-full"}
                                        containerStyle={"w-[350px]"}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="w-[350px]" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="new_password_confirmation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password Confirmation</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Confirm your password"
                                        className={"rounded-full w-[350px]"}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="w-[350px]" />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="mt-4"
                        disabled={isSubmitting}
                    >
                        {isSubmitting && (
                            <FaSpinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Save
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default ResetPasswordForm;
