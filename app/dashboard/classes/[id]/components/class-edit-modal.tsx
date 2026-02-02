"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

export function ClassEditModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit class</DialogTitle>
        </DialogHeader>

        {/* FORM */}
        <div className="space-y-4 py-2">
          {/* Class name */}
          <div className="space-y-1">
            <Label>Class name</Label>
            <Input defaultValue="10-A" />
          </div>

          {/* Status */}
          <div className="space-y-1">
            <Label>Status</Label>
            <Select>
              <option>Active</option>
              <option>Archived</option>
            </Select>
          </div>

          {/* Main teacher */}
          <div className="space-y-1">
            <Label>Main teacher</Label>
            <Select>
              <option>Mr. Ali</option>
              <option>Ms. Sara</option>
            </Select>
          </div>
        </div>

        {/* FOOTER */}
        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
