import React, { useRef, useState } from "react";
import { Field, Switch } from "@headlessui/react";
import RoundedTransition from "../common/RoundedTransition/RoundedTransition";
import Footer from "../components/footer/Footer";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
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
} from "../components/ui/form";
import usePageTracking from "../components/hooks/use-page-tracking";

const formSchema = z.object({
    email: z.string().email(),
    first_name: z.string().min(4),
    last_name: z.string().min(4),
    message: z.string().min(10).max(200),
    phone_number: z.string().min(10),
});
export default function Contact() {
    const [agreed, setAgreed] = useState(false);
    const container = useRef(null);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            first_name: "",
            last_name: "",
            message: "",
            phone_number: "",
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
        // try {
        //     await getCsrfToken();
        //     const { user } = await login({ email, password }).unwrap();
        //     if (user.email_verified_at) {
        //         window.location.href = HOME;
        //     } else {
        //         window.location.href = "/verify";
        //         await sentCode({ email }).unwrap();
        //     }
        // } catch (error) {
        //     setError("email", { message: error.data.errors.email.join() });
        // }
        console.log(email, first_name, last_name, message, phone_number);
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
                            <Field className="flex gap-x-4 sm:col-span-2">
                                <div className="flex h-6 items-center">
                                    <Switch
                                        checked={agreed}
                                        onChange={setAgreed}
                                        className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                                    >
                                        <span className="sr-only">
                                            Agree to policies
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                                        />
                                    </Switch>
                                </div>
                                <Label className="text-sm/6 text-gray-600">
                                    By selecting this, you agree to our{" "}
                                    <a
                                        href="#"
                                        className="font-semibold text-indigo-600"
                                    >
                                        privacy&nbsp;policy
                                    </a>
                                    .
                                </Label>
                            </Field>
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
