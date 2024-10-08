"use client"
import * as z from "zod"
import axios from "axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"


const formSchema = z.object( {
    title: z.string().min( 1, {
        message: "Title is required",
    } )

} )

const createPage = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>( {
        resolver: zodResolver( formSchema ),
        defaultValues: {
            title: ""
        }
    } );
    const { isSubmitting, isValid } = form.formState;
    const onSubmit = async ( values: z.infer<typeof formSchema> ) => {
        try {
            const response = await axios.post( "/api/course", values );
            router.push( `/teacher/course/${response.data.id}` );
        } catch ( e ) {
            console.log( "error:", e );
        }
    }
    return (
        <div className="max-w-5xl mx-auto flex md:items-center h-full md:justify-center p-6  ">
            <div>
                <h1 className="text-2xl ">
                    Name Your Course
                </h1>
                <p className="text-sm text-slate-600">
                    What would you like to name your course?
                    Don&apos;t worry,you can change it later.
                </p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit( onSubmit )} className="space-y-8 mt-8">
                        <FormField control={form.control} name="title" render={( { field } ) => {
                            return (
                                <FormItem>
                                    <FormLabel>
                                        Course title
                                    </FormLabel>
                                    <FormControl>
                                        <Input disabled={isSubmitting} placeholder="e.g. 'Advanced Web development'"{...field} />
                                    </FormControl>
                                    <FormDescription>
                                        What will you teach in this course?
                                    </FormDescription>
                                </FormItem>
                            )
                        }} />
                        <div className="flex items-center gap-x-2">
                            <Link href="/">
                                <Button type="button" variant="ghost">
                                    Cancel
                                </Button>

                            </Link>
                            <Button type="submit" disabled={!isValid || !isSubmitting} variant="default">
                                Continue
                            </Button>


                        </div>
                    </form>
                </Form>
            </div>

        </div>
    )
}

export default createPage;