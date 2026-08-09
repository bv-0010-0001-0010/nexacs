function labelFromFieldName(name: string) {
  const withSpaces = name.replace(/([A-Z])/g, " $1");
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
}

export function buildMailto({
  to,
  subject,
  form,
}: {
  to: string | null;
  subject: string;
  form: HTMLFormElement;
}) {
  const formData = new FormData(form);
  const lines: string[] = [];
  let fileNote = "";

  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      if (value.name) {
        fileNote += `\n\nNote: "${value.name}" was selected for ${labelFromFieldName(key)} but can't be attached automatically from this form — please attach it manually before sending this email.`;
      }
      continue;
    }
    const trimmed = value.toString().trim();
    if (!trimmed) continue;
    lines.push(`${labelFromFieldName(key)}: ${trimmed}`);
  }

  const body = lines.join("\n") + fileNote;
  const params = new URLSearchParams({ subject, body });
  return `mailto:${to ?? ""}?${params.toString()}`;
}
