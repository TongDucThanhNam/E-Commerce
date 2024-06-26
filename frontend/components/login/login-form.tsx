'use client';

import {Formik} from 'formik';
import {Input, Spacer, Link, Button, Divider, Checkbox} from '@nextui-org/react';
import React from "react";
import {GithubIcon, TwitterIcon} from "@/components/icons";

const defaultSignFormData = {
    username: 'wangly19',
    password: 'nextui.org',
};

export const LoginForm: React.FC = () => {

    // @ts-ignore
    return (
        <div className=" w-96">
            <Formik
                initialValues={defaultSignFormData}
                // validate={handleSignFormValidate}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        // toast({
                        //     title: 'Welcome.',
                        //     description: 'Start your trip next. ',
                        // });
                        // router.replace('/');
                    }, 400);
                }}
            >
                {({
                      values,
                      errors,
                      handleChange,
                      isSubmitting,
                      handleSubmit,
                      handleBlur,
                  }) => (
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <Input
                            isRequired
                            size={"lg"}
                            name="username"
                            labelPlacement={"outside"}
                            placeholder="username: Arbitrary name"
                            value={values?.username}
                            label={errors?.username || 'UserName'}
                            onValueChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Spacer y={2}/>


                        <Input
                            isRequired
                            name="password"
                            type={"password"}
                            // shadow={false}
                            size={"lg"}
                            placeholder="password: nextui.org"
                            // labelLeft={<Password set="bold"/>}
                            value={values?.password}
                            labelPlacement={"outside"}

                            // status={errors?.password ? 'error' : undefined}
                            label={errors?.password || 'Password'}
                            onValueChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Spacer y={1}/>

                        <div className="flex justify-between">
                            <Checkbox>Remember me</Checkbox>

                            <Link color="primary">Forget Password?</Link>
                        </div>

                        <Spacer y={1}/>
                        <Button
                            type="submit"
                            className="w-full"
                            size="lg"
                            color="primary"
                        >
                            Sign In
                        </Button>

                        {/* Dont have account */}
                        <Spacer y={1}/>
                        <div className="flex-row justify-center">
                            <span>Dont have an account? </span>
                            <Link href={"/register"} color="primary">Sign up</Link>
                        </div>

                    </form>
                )}
            </Formik>

            <Spacer y={1}/>
            <Divider/>

            <Spacer y={1}/>

            <div className="flex content-center justify-center">
                <Button isIconOnly={true}>
                    <GithubIcon/>
                </Button>

                <Spacer y={1}/>
                <Button isIconOnly={true}>
                    <TwitterIcon/>
                </Button>

            </div>

            {/*<OtherSignInPlatform />*/}
        </div>
    );
};
