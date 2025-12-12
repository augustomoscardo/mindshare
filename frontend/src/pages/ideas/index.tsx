import { Page } from "@/components/page";
import { Label } from "@/components/ui/label";
import { CreateIdeaDialog } from "./components/create-idea-dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function IdeasPage() {
  const [isCreateIdeaDialogOpen, setIsCreateIdeaDialogOpen] = useState(false);

  return (
    <Page>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Label className="text-3xl font-medium text-purple-600">Ideias</Label>
          <Button onClick={() => setIsCreateIdeaDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Nova Ideia
          </Button>
        </div>
      </div>

      <CreateIdeaDialog
        open={isCreateIdeaDialogOpen}
        onOpenChange={setIsCreateIdeaDialogOpen}
      />
    </Page>
  );
}
