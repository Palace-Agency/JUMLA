import React, { useEffect, useRef, useState } from "react";
import { Field, Switch } from "@headlessui/react";
import RoundedTransition from "../common/RoundedTransition/RoundedTransition";
import Footer from "../components/footer/Footer";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { PhoneInput } from "../components/ui/phone-input";
import { cn } from "../components/lib/utils";
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
    FormDescription,
} from "../components/ui/form";
import usePageTracking from "../components/hooks/use-page-tracking";
import { useContactMutation } from "../slices/contactSlice";
import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "../components/ui/dialog";
import { useGetSettingQuery } from "../slices/settingsSlice";

const formSchema = z.object({
    email: z.string().email(),
    first_name: z.string().min(4),
    last_name: z.string().min(4),
    message: z.string().min(10).max(200),
    phone_number: z.string().min(10),
    privacy: z.literal(true).refine((val) => val === true, {
        message: "You must accept the terms and conditions.",
    }),
});
export default function Contact() {
    const [settings, setSettings] = useState({
        privacy_policy: "",
    });
    const [contact] = useContactMutation();
    const [agreed, setAgreed] = useState(false);
    const container = useRef(null);
    const containerRef = useRef(null);
    const { data: setting, isLoading, isSuccess } = useGetSettingQuery("");

    useEffect(() => {
        if (isSuccess) {
            const settingData = setting.entities[1];
            if (settingData) {
                setSettings({
                    privacy_policy: settingData.privacy_policy,
                });
            }
        }
    }, [isSuccess, setting]);
    const SafeHtml = ({ htmlContent }) => {
        useEffect(() => {
            if (containerRef.current) {
                const shadowRoot = containerRef.current.attachShadow({
                    mode: "open",
                });
                const wrapper = document.createElement("div");
                wrapper.innerHTML = htmlContent;
                shadowRoot.appendChild(wrapper);
            }
        }, [htmlContent]);

        return <div ref={containerRef}></div>;
    };

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            first_name: "",
            last_name: "",
            message: "",
            phone_number: "",
            privacy: false,
        },
    });

    const {
        setError,
        formState: { isSubmitting },
    } = form;

    const onSubmit = async ({
        email,
        first_name,
        last_name,
        message,
        phone_number,
    }) => {
        try {
            await contact({
                email,
                first_name,
                last_name,
                message,
                phone_number,
            }).unwrap();
            toast.success("Message sent successfully!");
        } catch (error) {
            setError("email", { message: error.data.errors.email.join() });
        }
    };
    usePageTracking();

    return (
        <>
            <div
                ref={container}
                className="relative isolate z-20 bg-white px-6 py-24 sm:py-32 lg:px-8"
            >
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                >
                    <div
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Contact us
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600">
                        Aute magna irure deserunt veniam aliqua magna enim
                        voluptate.
                    </p>
                </div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-3 mx-auto mt-16 max-w-xl sm:mt-20"
                    >
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <FormField
                                    control={form.control}
                                    name="first_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="block text-sm/6 font-semibold text-gray-900">
                                                First name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    className={"rounded-full"}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div>
                                <FormField
                                    control={form.control}
                                    name="last_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="block text-sm/6 font-semibold text-gray-900">
                                                Last name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    className={"rounded-full"}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="block text-sm/6 font-semibold text-gray-900">
                                                E-mail
                                            </FormLabel>
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
                            </div>
                            <div className="sm:col-span-2">
                                <FormField
                                    control={form.control}
                                    name="phone_number"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="block text-sm/6 font-semibold text-gray-900">
                                                Phone
                                            </FormLabel>
                                            <FormControl>
                                                <PhoneInput
                                                    className={"rounded-full"}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="block text-sm/6 font-semibold text-gray-900">
                                                Message
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    className={"rounded-lg"}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <FormField
                                    control={form.control}
                                    name="privacy"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={
                                                        field.onChange
                                                    }
                                                />
                                            </FormControl>
                                            <div className="space-y-1 leading-none">
                                                <FormLabel>
                                                    Accept terms and conditions{" "}
                                                </FormLabel>
                                                <FormDescription>
                                                    You agree to our{" "}
                                                    <Dialog>
                                                        <DialogTrigger asChild>
                                                            <button
                                                                type="button"
                                                                className="text-indigo-600 underline hover:text-indigo-500"
                                                            >
                                                                Terms of Service
                                                                and Privacy
                                                                Policy.
                                                            </button>
                                                        </DialogTrigger>
                                                        <DialogContent className="max-w-4xl h-auto max-h-[80vh] overflow-y-auto rounded-lg p-6">
                                                            <DialogHeader>
                                                                <DialogTitle>
                                                                    Privacy
                                                                    Policy
                                                                </DialogTitle>
                                                                <DialogDescription>
                                                                    <SafeHtml
                                                                        htmlContent={
                                                                            settings.privacy_policy
                                                                        }
                                                                    />
                                                                </DialogDescription>
                                                            </DialogHeader>
                                                        </DialogContent>
                                                    </Dialog>{" "}
                                                </FormDescription>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="mt-10">
                            <Button
                                type="submit"
                                className={"w-full mt-4 bg-indigo-600"}
                                disabled={isSubmitting}
                            >
                                {isSubmitting && (
                                    <FaSpinner className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Let's talk
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
            <RoundedTransition container={container} />
            <Footer />
        </>
    );
}
