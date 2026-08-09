import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const fieldBase =
  "focus-ring w-full border border-charcoal-900/20 bg-white px-4 py-3 text-charcoal-900 placeholder:text-steel-500 transition-colors focus:border-amber-500";

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-charcoal-900">
      {children}
      {required ? <span className="ml-1 text-amber-600">*</span> : null}
    </label>
  );
}

export function TextField({
  id,
  label,
  required,
  ...rest
}: { id: string; label: string; required?: boolean } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <input id={id} name={id} required={required} className={fieldBase} {...rest} />
    </div>
  );
}

export function SelectField({
  id,
  label,
  required,
  options,
  ...rest
}: {
  id: string;
  label: string;
  required?: boolean;
  options: string[];
} & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <select id={id} name={id} required={required} className={fieldBase} defaultValue="" {...rest}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TextAreaField({
  id,
  label,
  required,
  ...rest
}: { id: string; label: string; required?: boolean } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <textarea id={id} name={id} required={required} rows={4} className={fieldBase} {...rest} />
    </div>
  );
}

export function FileField({
  id,
  label,
  required,
  ...rest
}: { id: string; label: string; required?: boolean } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <input
        id={id}
        name={id}
        type="file"
        required={required}
        className={`${fieldBase} cursor-pointer file:mr-4 file:cursor-pointer file:border-0 file:bg-charcoal-900 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-offwhite`}
        {...rest}
      />
    </div>
  );
}
