//import React from 'react';
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux';
import { sended, fail_send } from '../../Message/reducer';
import Message from '../../Message/Containers/Message';
function Form({ dis_send, dis_fail }) {
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log('Wartość data.exampleRequired:', data.exampleRequired);
        console.log('Negacja data.exampleRequired:', !data.exampleRequired);
        clearErrors('exampleRequired');
        if (!data.exampleRequired) {
            // Ustawienie błędu, jeśli warunek nie jest spełniony
            setError('exampleRequired', {
                type: 'manual',
                message: 'This field is required',
                
            });
            dis_fail();
        } else {
            dis_send();
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
            <input defaultValue="test" {...register("example")} className='text-center m-auto bg-green-100 mt-4' />

            <input {...register("exampleRequired")} className='text-center m-auto bg-green-100 mt-2 mb-2'/>
            {errors.exampleRequired && <span>{errors.exampleRequired.message}
                {/* {dis_fail()} */}
            </span>}

            <input type="submit" className='m-auto p-1 bg-green-400'/>
            <Message />
        </form>
        
    )
}

const mapDispatchToProps = dispatch => ({
    dis_send: () => dispatch(sended()),
    dis_fail: () => dispatch(fail_send())
})
export default connect(null,mapDispatchToProps)(Form)