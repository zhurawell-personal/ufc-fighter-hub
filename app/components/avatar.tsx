// generates initials from a name, e.g. "John Doe" -> "JD"
// TODO: replace with actual avatar images (maybe AI generated?) and remove the getInitials function
export function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Avatar({ name, size = 14 }: { name: string; size?: number }) {
  const initials = getInitials(name);
  const dim = `${size}rem`;

  return (
    <div
      style={{ width: dim, height: dim }}
      className="flex items-center justify-center rounded-full bg-slate-700 text-lg font-semibold text-slate-100"
    >
      {initials}
    </div>
  );
}
