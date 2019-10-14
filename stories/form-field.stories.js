import React, {useEffect} from 'react'
import {storiesOf, addDecorator} from '@storybook/react'
import {FormField} from '@smashing/form-field'
import {useForm} from '@smashing/form'
import {TextInput} from '@smashing/text-input'
import {withA11y} from '@storybook/addon-a11y'
import {SmashingThemeProvider} from '@smashing/theme'

addDecorator(withA11y)

const BasicForm = ({children}) => {
  const {Form} = useForm({
    initialValues: {
      firstName: 'John'
    }
  })

  return (
    <div style={{padding: 16}}>
      <Form>{children}</Form>
    </div>
  )
}

const FormWithError = ({children}) => {
  const {Form, form} = useForm({
    initialValues: {
      firstName: 'John',
      email: ''
    }
  })

  useEffect(() => {
    form.setFieldError('email', 'Email is required')
  }, [])

  return (
    <div style={{padding: 16}}>
      <Form>{children}</Form>
    </div>
  )
}

storiesOf('Core|FormField', module)
  .addDecorator(story => (
    <SmashingThemeProvider
      theme={{
        colors: {
          background: {
            default: 'white'
          }
        }
      }}
    >
      {story()}
    </SmashingThemeProvider>
  ))
  .add('default', () => (
    <BasicForm>
      <FormField
        label="First name"
        placeholder="Type your name..."
        name="firstName"
        component={TextInput}
      />
    </BasicForm>
  ))
  .add('with description', () => (
    <BasicForm>
      <FormField
        label="First name"
        placeholder="Type your name..."
        name="firstName"
        description="Lorem ipsum dolor sit amt"
        component={TextInput}
      />
    </BasicForm>
  ))
  .add('with custom description', () => (
    <BasicForm>
      <FormField
        label="First name"
        placeholder="Type your name..."
        name="firstName"
        description={<div>Hello</div>}
        component={TextInput}
      />
    </BasicForm>
  ))
  .add('with hint', () => (
    <BasicForm>
      <FormField
        label="First name"
        placeholder="Type your name..."
        name="firstName"
        hint="I'm a hint. You need me."
        component={TextInput}
      />
    </BasicForm>
  ))
  .add('with custom hint', () => (
    <BasicForm>
      <FormField
        label="First name"
        placeholder="Type your name..."
        name="firstName"
        hint={<div>I'm a hint</div>}
        component={TextInput}
      />
    </BasicForm>
  ))
  .add('with error', () => (
    <FormWithError>
      <FormField
        label="Email"
        placeholder="Type your email..."
        name="email"
        hint="I'm a hint. You need me."
        component={TextInput}
      />
    </FormWithError>
  ))
  .add('labelAppearance: overlay', () => (
    <FormWithError>
      <FormField
        labelAppearance="overlay"
        label="Email"
        placeholder="Type your email..."
        name="email"
        hint="I'm a hint. You need me."
        description="Lorem ipsum dolor sit amt"
        component={TextInput}
      />
    </FormWithError>
  ))
  .add('alertAppearance: overlay', () => (
    <FormWithError>
      <FormField
        alertAppearance="overlay"
        label="Email"
        placeholder="Type your email..."
        name="email"
        hint="I'm a hint. You need me."
        description="Lorem ipsum dolor sit amt"
        component={TextInput}
      />
    </FormWithError>
  ))
  .add('label and alert appearance: overlay', () => (
    <FormWithError>
      <FormField
        alertAppearance="overlay"
        labelAppearance="overlay"
        label="Email"
        placeholder="Type your email..."
        name="email"
        hint="I'm a hint. You need me."
        description="Lorem ipsum dolor sit amt"
        component={TextInput}
      />
    </FormWithError>
  ))
  .add('labelAppearance: inline', () => (
    <FormWithError>
      <FormField
        alertAppearance="overlay"
        labelAppearance="inline"
        label="Email or username"
        placeholder="Type your email..."
        name="email"
        hint="I'm a hint. You need me."
        description="Lorem ipsum dolor sit amt"
        component={TextInput}
      />
    </FormWithError>
  ))
