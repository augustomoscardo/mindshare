import { Dialog } from "@/components/ui/dialog";
import { useState } from "react";

interface CreateIdeaDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export function CreateIdeaDialog({ open, onOpenChange, onSuccess }: CreateIdeaDialogProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Conteúdo do diálogo para criar uma ideia */}
    </Dialog>
  )
}