import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", {
            required: "Eingabefeld ist auszufüllen.",
          })}
        />
      </FormRow>

      <FormRow label="E-Mail" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "Eingabefeld ist auszufüllen.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Bitte gib eine gültige E-Mail-Adresse an.",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Passwort (mind. 6 Zeichen)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "Eingabefeld ist auszufüllen.",
            minLength: {
              value: 6,
              message: "Passwort mit mind. 6 Zeichen.",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Passwort wiederholen"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "Eingabefeld ist auszufüllen.",
            validate: (value) =>
              value === getValues().password ||
              "Passwörter müssen übereinstimmen.",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          Abbrechen
        </Button>
        <Button disabled={isLoading}>Erstellen</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
