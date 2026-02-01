// student-edit-modal.tsx
"use client";

type Props = {
  open: boolean;
  onClose: () => void;
  student: {
    fullName?: string;
    parentName?: string;
    phone?: string;
    parentPhone?: string;
    address?: string;
  };
};

export default function StudentEditModal({ open, onClose, student }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Edit Student</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
          <Field label="Full name">
            <input defaultValue={student.fullName} />
          </Field>

          <Field label="Parent name">
            <input defaultValue={student.parentName} />
          </Field>

          <Field label="Phone">
            <input defaultValue={student.phone} />
          </Field>

          <Field label="Parent phone">
            <input defaultValue={student.parentPhone} />
          </Field>

          <Field label="Address">
            <textarea rows={3} defaultValue={student.address} />
          </Field>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-destructive text-white hover:bg-gray-50"
          >
            Cancel
          </button>
          <button className="px-4 py-2 rounded-lg bg-ring text-white hover:bg-primary/90">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

/* Reusable field wrapper */
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-500">{label}</label>
      <div className="rounded-lg border px-3 py-2 focus-within:ring-2 focus-within:ring-primary">
        {children}
      </div>
    </div>
  );
}
