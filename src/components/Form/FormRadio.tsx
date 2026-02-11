import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "../ui/field";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { cn } from "@/lib/utils";

interface FormRadioProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  className?: string;
  options: readonly string[];
}

const FormRadio = <T extends FieldValues>({
  name,
  control,
  label,
  className,
  options,
}: FormRadioProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FieldSet>
          {label && <FieldLegend>{label}</FieldLegend>}
          <RadioGroup
            name={field.name}
            value={field.value}
            onValueChange={field.onChange}
          >
            <div className={cn("flex flex-col gap-5", className)}>
              {options.map((item) => (
                <FieldLabel key={item} htmlFor={`form-radiogroup-${item}`}>
                  <Field
                    orientation="horizontal"
                    data-invalid={fieldState.invalid}
                  >
                    <FieldContent>
                      <FieldTitle>{item}</FieldTitle>
                    </FieldContent>
                    <RadioGroupItem
                      value={item}
                      id={`form-radiogroup-${item}`}
                      aria-invalid={fieldState.invalid}
                    />
                  </Field>
                </FieldLabel>
              ))}
            </div>
          </RadioGroup>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </FieldSet>
      )}
    />
  );
};

export default FormRadio;
