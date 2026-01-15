"use client"

export default function Input({
  label,
  placeholder = "",
  type = "text",
  value = "",
  onChange = () => {},
  error = "",
  required = false,
  step,
  ...props
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-foreground">
          {label}
          {required && <span className="text-destructive">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        step={step}
        className={`w-full px-3 py-2 border rounded-lg text-sm transition-colors ${
          error
            ? "border-destructive bg-destructive/5"
            : "border-border bg-input text-foreground placeholder:text-muted-foreground hover:border-border/80 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
        }`}
        {...props}
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}
