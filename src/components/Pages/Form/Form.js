//impot React from 'react';
import { useForm } from 'react-hook-form'
export default function App() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors},
    } = useForm();

    const onSubmit = (data) => console.log(data)
    console.log(watch("example"))

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
            <input defaultValue="test" {...register("example")} className='text-center m-auto bg-gray-300' />

            <input {...register("exampleRequired", {required: true})} className='text-center m-auto'/>
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    )


}