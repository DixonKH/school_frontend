import JournalTable from "../components/JournalTable";

export default function ClassDetailPage() {
  return (
    <section className="space-y-6">
      {/* Class Header (oldin qilganing qoladi) */}
      <div>
        <h2 className="text-xl font-semibold">10-A sinf · Matematika</h2>
        <p className="text-sm text-muted-foreground">
          Haftalik elektron jurnal
        </p>
      </div>
      <JournalTable />
    </section>
  );
}
