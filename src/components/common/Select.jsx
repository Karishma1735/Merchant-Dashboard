"use client"

export default function Select({ label, value = "", onChange = () => {}, options = [], error = "" }) {
  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-foreground">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border rounded-lg text-sm transition-colors ${
          error
            ? "border-destructive bg-destructive/5"
            : "border-border bg-input text-foreground hover:border-border/80 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}
