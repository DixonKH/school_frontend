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
        <form className="space-y-2 max-h-[70vh] overflow-y-auto p-2 flex justify-center flex-col">
          <div className="flex flex-col">
            <label className="text-sm font-semibold" aria-label="name">Name: </label>
            <input className="input" placeholder="Name..." defaultValue={student.fullName} />
          </div>

          <div>
            <label className="text-sm font-semibold" aria-label="phone">Phone:</label>
            <input className="input" placeholder="Phone..." defaultValue={student.phone} />
          </div>

          <div>
            <label className="text-sm font-semibold" aria-label="Parent Name">Parent Name:</label>
            <input className="input" placeholder="Classes..." defaultValue={student.parentPhone} />
          </div>

          <div>
            <label className="text-sm font-semibold" aria-label="Address">Address:</label>
            <input className="input" placeholder="Address..." defaultValue={student.address} />
          </div>
        </form>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-destructive text-white hover:bg-red-500/90"
          >
            Cancel
          </button>
          <button className="px-4 py-2 rounded-lg bg-ring text-white hover:bg-ring/90">
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
