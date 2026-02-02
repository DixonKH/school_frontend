export function ClassHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold">10-A</h2>
        <p className="text-sm text-muted-foreground">
          Academic year 2024–2025
        </p>
      </div>

      <button className="btn-outline">
        Edit class
      </button>
    </div>
  );
}
