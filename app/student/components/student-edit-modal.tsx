export default function StudentEditModal({ open, student, onClose }: any) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Edit Teacher</h2>
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
            <label className="text-sm font-semibold" aria-label="email">Email:</label>
            <input className="input" placeholder="Email..." defaultValue={student.email} />
          </div>

          <div>
            <label className="text-sm font-semibold" aria-label="Classes">Birth Date</label>
            <input className="input" placeholder="Classes..." defaultValue={student.birthDate} />
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
            className="px-4 py-2 cursor-pointer rounded-lg bg-ring text-white hover:bg-ring/90"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}